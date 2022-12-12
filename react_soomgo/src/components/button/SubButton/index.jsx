import React from "react";
import $ from "./subButton.module.scss";

const SubButton = ({ title }) => {
  return <button className={$.subButton}>{title}</button>;
};

export default SubButton;
