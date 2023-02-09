import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import ProState from './context/pro_jects/Pro_State';
import SomeState from './context/some_State/Some_State';
import Signup from './components/Signup';
import Login from './components/Login';
import UserInfo from './components/UserInfo';
import Facelogin from './components/face_recog/Face_login'
import Allprojects from './components/Projects'
import ForgotPassword from './components/passwordReset/ForgotPassword';
import PasswordReset from './components/passwordReset/PasswordReset';
import Newproject from './components/addproject/Add_newpro'
import EmailVerify from './components/EmailVerify';
import Howitsworks from './components/howitsworks';

function App() {
  return (
    <>
      <ProState>
        <SomeState>
          <Router>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/signup">
                  <Signup />
                </Route>
                <Route exact path="/userinfo">
                  <UserInfo />
                </Route>
                <Route exact path="/facelogin">
                  <Facelogin />
                </Route>
                <Route exact path="/allprojects">
                  <Allprojects />
                </Route>
                <Route exact path="/password-reset">
                  <PasswordReset />
                </Route>
                <Route exact path="/forgotpassword/:id/:token">
                  <ForgotPassword />
                </Route>
                <Route exact path="/addproject">
                  <Newproject />
                </Route>
                <Route exact path="/users/:id/verify/:token">
                  <EmailVerify />
                </Route>
                <Route exact path="/howitsworks">
                  < Howitsworks />
                </Route>
              </Switch>
            </div>
          </Router>
        </SomeState>
      </ProState>
    </>
  );
}

export default App;
