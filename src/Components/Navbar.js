import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">{props.home}</Link>
        </li>
        <li>
          <Link to="/todoitem">{props.todolist}</Link>
        </li>
        <li>
          <Link to="/about">{props.about}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
