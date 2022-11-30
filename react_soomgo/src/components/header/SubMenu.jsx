import React from "react";

export default function SubMenu() {
  const menuName = ["받은요청", "바로견적", "채팅", "프로필"];
  const menuStyle = {
    marginRight: "15px",
  };
  const smFont = {
    fontSize: "14px",
  };
  const smFlex = {
    display: "flex",
  };

  return (
    <ul style={smFlex}>
      {menuName.map((name) => (
        <li style={menuStyle}>
          <a href="/" style={smFont}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
