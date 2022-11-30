import React from "react";
import HeaderLeft from "./HeaderLeft";
import SubMenuList from "./SubMenuList";

export default function Header({ color, name }) {
  const header = {
    width: "100%",
    borderBottom: "1px solid #ddd",
  };
  const hstyle = {
    width: "1100px",
    height: "80px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  return (
    <header style={header}>
      <div style={hstyle}>
        <HeaderLeft />
        <SubMenuList />
      </div>
    </header>
  );
}
