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
import Signup from './components/Signup';
import Login from './components/Login';
import UserInfo from './components/UserInfo';

function App() {
  return (
    <>
      <ProState>
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
            </Switch>
          </div>
        </Router>
      </ProState>
    </>
  );
}

export default App;
