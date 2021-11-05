import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <ul className="navBar">
        <li>
          <NavLink to="/" exact={true}>
            <p>HOME</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/invitation-list" exact={true}>
            <p>InvitationList</p>
          </NavLink>
        </li>
        <li>
          <NavLink to="/employee-list" exact={true}>
            <p>EmployeeList</p>
          </NavLink>
        </li>

      </ul>
    </div>
  );
}

export default Navbar;
