import React from "react";

export default function Menu() {
  const menuName = ["고수매칭", "고수찾기", "마켓", "커뮤니티"];
  const menuStyle = {
    marginRight: "15px",
  };
  const menuLinkStlye = {
    fontSize: "16px",
    fontWeight: "bold",
  };
  const menuUlStlye = {
    display: "flex",
  };
  const nameList = menuName.map((name) => (
    <li style={menuStyle}>
      <a href="/" style={menuLinkStlye}>
        {name}
      </a>
    </li>
  ));

  return <ul style={menuUlStlye}>{nameList}</ul>;
}
