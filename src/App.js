import './App.css';
import './login.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Forgot from './components/forgotPassword';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/dashboard';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/forgotpassword" component={Forgot}/>
        <Route path="/dashboard/:id" component={Dashboard}/>
        <Route path="/" component={Login}/>
      </Switch>
    </Router>
  );
}

export default App;
