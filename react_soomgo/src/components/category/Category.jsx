import React from "react";
import business from "../../assets/categoryImage/business.svg";
import development from "../../assets/categoryImage/design-development.svg";
import etc from "../../assets/categoryImage/etc.svg";
import event from "../../assets/categoryImage/event.svg";
import health from "../../assets/categoryImage/health-beauty.svg";
import living from "../../assets/categoryImage/home-living.svg";
import navi from "../../assets/categoryImage/icon-navi-logo.svg";
import lesson from "../../assets/categoryImage/lesson.svg";
import parttime from "../../assets/categoryImage/part-time-job.svg";

export default function Category() {
  const cateStyle = {
    display: "flex",
    width: "100%",
    justifyContent: "space-around",
  };

  const cateName = [
    {
      name: "레슨",
      image: lesson,
    },
    {
      name: "홈/리빙",
      image: living,
    },
    {
      name: "이벤트",
      image: event,
    },
    {
      name: "비즈니스",
      image: business,
    },
    {
      name: "디자인/개발",
      image: development,
    },
    {
      name: "건강/미용",
      image: health,
    },
    {
      name: "알바",
      image: parttime,
    },
    {
      name: "기타",
      image: etc,
    },
  ];

  return (
    <ul style={cateStyle}>
      {cateName.map((name) => (
        <li>
          <a href=""></a>
          <img src={name.image} alt={name.name} />
          <p>{name.name}</p>
        </li>
      ))}
    </ul>
  );
}
