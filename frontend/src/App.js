import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import InvitationList from "./components/InvitationList";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/invitation-list">
            <InvitationList />
          </Route>
          <Route path="/employee-list">
            <EmployeeList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
