import React from "react";
import $ from './LeftMenu.module.scss'
import Menu from "./Menu";

const menuName = [
  {
    name : "고수매칭",
    link : "soomgo-matching",
  },
  {
    name : "고수찾기",
    link : "soomgo-search",
  },
  {
    name : "마켓",
    link : "market",
  },
  {
    name : "커뮤니티",
    link : "community",
  },
]

export default function LeftMenu() {
  return (
    <div className={$.menuWrap}>
      <ul className={$.menuList}>
        {menuName.map(list => (
          <Menu name={list.name} link={list.link}/>
        ))}
      </ul> 
    </div>
  );
}
