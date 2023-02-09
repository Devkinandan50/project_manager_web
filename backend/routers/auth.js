const express = require('express');
const User = require('../models/User');
const Token = require('../models/Token');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');
var face_re = require('../middleware/face_reco');
const SendMail = require('../middleware/sendemail');
const crypto = require("crypto");

const JWT_SECRET = process.env.JWTPRIVATEKEY;

/*
router.get('/', (req, res)=>{

    obj = {
        a: 'thos',
        number: 34
    }
    res.json(obj)


    // data display in terminal
    console.log(req.body);
    const user = User(req.body);
    user.save();
    // data display in request
    res.send(req.body);

})  */

// ROUTE : Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
  body('firstname', 'Enter a valid name').isLength({ min: 3 }),
  body('lastname', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),

], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success, errors: errors.array() });
  }
  try {
    // Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    if (user && !user.verified) {
      return res.status(400).json({ success, error: "user already exists Please do email verification or login to get new verification link" })
    }
    if (user) {
      return res.status(400).json({ success, error: "Sorry a user with this email already exists" })
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt);

    // Create a new user
    user = await User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      password: secPass,
      email: req.body.email,
      image: req.body.image,
    });

    const token = await new Token({
      userId: user._id,
      token: crypto.randomBytes(32).toString("hex"),
    }).save();
    const url = `This Link Valid For 15 MINUTES ${process.env.BASE_URL}/users/${user.id}/verify/${token.token}`;
    await SendMail(user.email, "Verify Email", url);


    // const data = {
    //   user: {
    //     id: user.id
    //   }
    // }
    // const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;

    // res.json(user)
    res.status(201).send({ success, "firstname": user.firstname, "lastname": user.lastname, "email": user.email, "message": "An Email sent to your account please verify" });
    // res.status(201).send({ success, authtoken, "name": user.name, "email": user.email, "message": "An Email sent to your account please verify" });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
})



// Activate Account of signup user
router.patch("/:id/verify/:token/", async (req, res) => {
  let success = false;
  try {
    // const user = await User.findOne({ _id: req.params.id });
    // if (!user) return res.status(400).send({ success, message: "Invalid link 1" });

    const token = await Token.findOne({
      userId: req.params.id,
      token: req.params.token,
    });
    if (!token) return res.status(400).send({ success, message: "Invalid link 2" });

    // await User.updateOne({ verified: true });
    pro = await User.findByIdAndUpdate(req.params.id, { verified: true }, { new: true });
    if (pro.verified) {
      await token.remove();
      success = true;
    }
    res.status(200).send({ success, message: "Email verified successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
    console.log(error)
  }
});

// ROUTE : Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    if (!user.verified) {
      let token = await Token.findOne({ userId: user._id });
      if (!token) {
        token = await new Token({
          userId: user._id,
          token: crypto.randomBytes(32).toString("hex"),
        }).save();
        const url = `This Link Valid For 15 MINUTES ${process.env.BASE_URL}/users/${user.id}/verify/${token.token}`;
        await SendMail(user.email, "Verify Email", url);
      }

      return res.status(400).send({ error: "An Email sent to your account please verify" });
    }



    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    // const authtoken = user.generateAuthToken();
    success = true;
    res.status(200).send({ success, authtoken, message: "logged in successfully", "firstname": user.firstname, "lastname": user.lastname, "email": user.email });
    // res.json({ success, authtoken, "name": user.name, "email": user.email })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

// ROUTE : Get loggedin User Details using: POST "/api/auth/getuser". Login required
router.post('/getuser', fetchuser, async (req, res) => {

  try {
    userId = req.user.id;
    // fetch all except password
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// get email data from user to reset password
router.post('/sendpasswordlinktoemail', [
  body('email', 'Enter a valid email').isEmail(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ success, error: "User not exist" });
    }

    if (!user.verified) {
      success = false
      return res.status(400).send({ success, error: "Invalid credentials" });
    }

    const token = jwt.sign({ _id: user._id }, JWT_SECRET, { expiresIn: "120s" });
    
    const setusertoken = await User.findByIdAndUpdate({ _id: user._id }, { passwordverificationtoken: token }, { new: true });
    console.log(setusertoken)
    
    if (setusertoken) {
      const text = `This Link Valid For 2 MINUTES ${process.env.BASE_URL}/forgotpassword/${user.id}/${setusertoken.passwordverificationtoken}`
      // console.log(text)
      await SendMail(email, "Sending Email For password Reset", text);
    }
    success = true;
    res.status(200).send({ success, message: "logged in successfully", email });

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});


// verify user for forgot password time
router.get("/forgotpasswordlinkverification/:id/:token",async(req,res)=>{
  const {id,token} = req.params;

  try {
      const validuser = await User.findOne({_id:id,passwordverificationtoken:token});
      
      const verifyToken = jwt.verify(token,JWT_SECRET);

      if(validuser && verifyToken._id){
          res.status(201).json({status:201,success:true})
      }else{
          res.status(401).json({status:401,message:"user not exist"})
      }

  } catch (error) {
      res.status(401).json({status:401,error})
  }
});


// add new password
router.post("/newpassword/:id/:token",async(req,res)=>{
  const {id,token} = req.params;

  try {
      const validuser = await User.findOne({_id:id,passwordverificationtoken:token});
      
      const verifyToken = jwt.verify(token,JWT_SECRET);

      if(validuser && verifyToken._id){
          const newpassword = await bcrypt.hash(req.body.password,12);

          const setnewuserpass = await User.findByIdAndUpdate({_id:id},{password:newpassword},{passwordverificationtoken:"a"});

          setnewuserpass.save();
          res.status(201).json({status:201,success:true})

      }else{
          res.status(401).json({status:401,message:"user not exist"})
      }
  } catch (error) {
      res.status(401).json({status:401,error})
  }
})


// ROUTE : log in using face: POST "/api/auth/face_login".
router.post('/face_login', [
  body('email', 'Enter a valid email').isEmail(),
  body('image', 'image cannot be capture').exists(),
], async (req, res) => {

  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, image } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please sign in first, email cannot exist" });
    }


    let imgCompare = false;
    if (face_re(user.image, image, user.firstname, user.lastname)) {
      imgCompare = true;
    }


    // if(image == user.image){
    //     imgCompare = true;
    // }

    if (!imgCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }



    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});
module.exports = router