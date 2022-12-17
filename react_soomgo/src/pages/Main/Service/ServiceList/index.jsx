import React from "react";
import { SlBubble } from "react-icons/sl";
import { Link } from "react-router-dom";
import $ from "./serviceList.module.scss";
const ServiceList = ({ title, image, link, num }) => {
  return (
    <li>
      <Link to={link}>
        <img src={image} alt={title} />
        <p>{title}</p>
        {num && (
          <div className={$.numTxt}>
            <SlBubble /> <span>{num}</span>명 요청
          </div>
        )}
      </Link>
    </li>
  );
};

export default ServiceList;
