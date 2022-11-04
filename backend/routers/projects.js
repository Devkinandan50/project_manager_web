const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Project = require('../models/Project');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Projects using: GET "/api/projects/fetchallprojects". Login required
router.get('/fetchallprojects', fetchuser, async (req, res) => {
    try {
        const pro = await Project.find({ user: req.user.id });
        res.json(pro)
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 2: Add a new Project using: POST "/api/projects/addproject". Login required
router.post('/addproject', fetchuser, [
    body('Projectname', 'Enter a valid Projectname').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),
    body('progess', 'Enter a valid Progess').isNumeric({ min: 0, max: 100 })], async (req, res) => {
        try {
            const { Projectname, description, tag, progess, githublink, pro_enddate, project_members, project_tasks } = req.body;

            // If there are errors, return Bad request and the errors
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            const pro = new Project({
                Projectname, description, tag, progess, githublink, pro_enddate, user: req.user.id, project_members, project_tasks
            })
            const savedpro = await pro.save()

            res.json(savedpro)

        } catch (error) {
            console.error(error.message);
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Project using: PUT "/api/projects/updateProject". Login required
router.put('/updateproject/:id', fetchuser, async (req, res) => {
    const { Projectname, description, tag, progess, githublink, pro_enddate } = req.body;
    try {
        // Create a newProject object
        const newProject = {};
        if (Projectname) { newProject.Projectname = Projectname };
        if (description) { newProject.description = description };
        if (tag) { newProject.tag = tag };
        if (progess) { newProject.progess = progess
            newProject.lastpro_updatedate = Date.now();
        };
        if (githublink) { newProject.githublink = githublink };
        if (pro_enddate) { newProject.pro_enddate = pro_enddate };

        // Find the Project to be updated and update it
        let pro = await Project.findById(req.params.id);
        if (!pro) { return res.status(404).send("Not Found") }

        if (pro.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }
        pro = await Project.findByIdAndUpdate(req.params.id, { $set: newProject }, { new: true })
        res.json({ pro });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// ROUTE 4: Delete an existing Project using: DELETE "/api/projects/deleteProject". Login required
router.delete('/deleteproject/:id', fetchuser, async (req, res) => {
    try {
        // Find the Project to be delete and delete it
        let pro = await Project.findById(req.params.id);
        if (!pro) { return res.status(404).send("Not Found") }

        // Allow deletion only if user owns this Project
        if (pro.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        pro = await Project.findByIdAndDelete(req.params.id)
        res.json({ "Success": "Project has been deleted", project_info: pro });
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})
module.exports = router