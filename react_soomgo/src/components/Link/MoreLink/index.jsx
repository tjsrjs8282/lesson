import React from "react";
import $ from "./moreLink.module.scss";
import { Link } from "react-router-dom";

const MoreLink = ({ link, title }) => {
  return (
    <Link to={link} className={$.moreBtn}>
      {title}
    </Link>
  );
};

export default MoreLink;
