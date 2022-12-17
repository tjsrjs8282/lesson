import React from "react";
import { Link } from "react-router-dom";

const CategoryList = ({ image, name, link }) => {
  return (
    <li>
      <Link to={link}>
        <img src={image} alt={name} />
        <p>{name}</p>
      </Link>
    </li>
  );
};

export default CategoryList;
