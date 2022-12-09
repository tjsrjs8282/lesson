import React from "react";
import $ from './Header.module.scss'
import Logo from "./Logo/Logo";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";

export default function Header() {


  return (
    <div className={$.headerWrap}>
      <div className={$.headerBox}>
        <div className={$.headerLeft}>
          <Logo />
          <LeftMenu/>
        </div>
        
        <RightMenu/>
      
      
      </div>
    </div>
  );
}
