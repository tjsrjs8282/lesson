import React from "react";
import ServiceList from "./ServiceList";
import Title from "@/components/Title";
import SubButton from "@/components/button/SubButton";
import tutoring from "@/assets/images/soomgo_tutoring.webp";
import personal from "@/assets/images/soomgo_personal.webp";
import vocal from "@/assets/images/soomgo_vocal.webp";
import remodeling from "@/assets/images/soomgo_remodeling.webp";
import MoreBtn from "@/components/Link/MoreLink";
import $ from "./service.module.scss";

const serviceSubList = [
  {
    id: 1,
    title: "축가는누가하지",
  },
  {
    id: 2,
    title: "성종적인마케팅하기",
  },
  {
    id: 3,
    title: "나의심리상태",
  },
  {
    id: 4,
    title: "잘나가로고디자인",
  },
];

const serviceDummy = [
  {
    id: 1,
    title: "영어 과외",
    image: tutoring,
    link: "/tutoring",
    num: "1,000",
  },
  {
    id: 2,
    title: "퍼스널트레이닝(PT)",
    image: personal,
    link: "/personal",
    num: "3,000",
  },
  { id: 3, title: "보컬 레슨", image: vocal, link: "/vocal", num: "1,000" },
  {
    id: 4,
    title: "리모델링",
    image: remodeling,
    link: "/remodeling",
    num: "4,500",
  },
];

const Service = () => {
  return (
    <div className={$.serviceWrap}>
      <div className={$.serviceBox}>
        <Title title="숨고 인기 서비스" />
        <div className={$.subListBox}>
          <div>
            {serviceSubList.map((data) => (
              <SubButton title={data.title} key={data.id} />
            ))}
          </div>
          <MoreBtn title="상품 더보기" link="/" />
        </div>
        <ul>
          {serviceDummy.map((data) => (
            <ServiceList title={data.title} image={data.image} num={data.num} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Service;
