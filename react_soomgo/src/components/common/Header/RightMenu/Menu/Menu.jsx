import React from "react";
import { Link } from "react-router-dom";

const Menu = ({ name, link }) => {
  return (
    <li>
      <Link to={link}>{name}</Link>
    </li>
  );
};

export default Menu;
