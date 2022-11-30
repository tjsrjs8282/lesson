import React from "react";
import Category from "./Category";
export default function CategoryList() {
  const autoMargin = {
    width: "1100px",
    padding: "40px 0px",
    margin: "auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  return (
    <div style={autoMargin}>
      <Category />
    </div>
  );
}
