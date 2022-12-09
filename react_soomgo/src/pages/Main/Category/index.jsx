import React from "react";
import Categorylist from "./Categorylist";
import $ from './category.module.scss'
//import svg
import business from "../../../assets/categoryImage/business.svg";
import development from "../../../assets/categoryImage/design-development.svg";
import etc from "../../../assets/categoryImage/etc.svg";
import event from "../../../assets/categoryImage/event.svg";
import health from "../../../assets/categoryImage/health-beauty.svg";
import living from "../../../assets/categoryImage/home-living.svg";
import navi from "../../../assets/categoryImage/icon-navi-logo.svg";
import lesson from "../../../assets/categoryImage/lesson.svg";
import parttime from "../../../assets/categoryImage/part-time-job.svg";


const cateList = [
  {
    name: "레슨",
    image: lesson,
    link:"/lesson"
  },
  {
    name: "홈/리빙",
    image: living,
    link:"/living"
  },
  {
    name: "이벤트",
    image: event,
    link:"/event"
  },
  {
    name: "비즈니스",
    image: business,
    link:"/business"
  },
  {
    name: "디자인/개발",
    image: development,
    link:"/development"
  },
  {
    name: "건강/미용",
    image: health,
    link:"/health"
  },
  {
    name: "알바",
    image: parttime,
    link:"/parttime"
  },
  {
    name: "기타",
    image: etc,
    link:"/etc"
  },
];

export default function Category() {

  return (
    <div className={$.categoryWrap}>
      <div className={$.categoryBox}>
        <ul>
        {cateList.map(list => (
            <Categorylist name={list.name} link={list.link} image={list.image}/>
          ))}
        </ul> 
      </div>
    </div>
  );
}
