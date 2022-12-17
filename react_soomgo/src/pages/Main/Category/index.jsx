import React from "react";
import Categorylist from "./CategoryList";
import $ from "./category.module.scss";
//import svg
import business from "assets/images/business.svg";
import development from "assets/images/design-development.svg";
import etc from "assets/images/etc.svg";
import event from "assets/images/event.svg";
import health from "assets/images/health-beauty.svg";
import living from "assets/images/home-living.svg";
import navi from "assets/images/icon-navi-logo.svg";
import lesson from "assets/images/lesson.svg";
import parttime from "assets/images/part-time-job.svg";

const cateList = [
  {
    id: 1,
    name: "레슨",
    image: lesson,
    link: "/lesson",
  },
  {
    id: 2,
    name: "홈/리빙",
    image: living,
    link: "/living",
  },
  {
    id: 3,
    name: "이벤트",
    image: event,
    link: "/event",
  },
  {
    id: 4,
    name: "비즈니스",
    image: business,
    link: "/business",
  },
  {
    id: 5,
    name: "디자인/개발",
    image: development,
    link: "/development",
  },
  {
    id: 6,
    name: "건강/미용",
    image: health,
    link: "/health",
  },
  {
    id: 7,
    name: "알바",
    image: parttime,
    link: "/parttime",
  },
  {
    id: 8,
    name: "기타",
    image: etc,
    link: "/etc",
  },
];

export default function Category() {
  return (
    <div className={$.categoryWrap}>
      <div className={$.categoryBox}>
        <ul>
          {cateList.map((list) => (
            <Categorylist
              name={list.name}
              link={list.link}
              image={list.image}
              key={list.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
