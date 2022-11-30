import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

export default function HeaderLeft() {
  const flex = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  };
  return (
    <div className="headerLeft" style={flex}>
      <Logo />
      <MenuList />
    </div>
  );
}
