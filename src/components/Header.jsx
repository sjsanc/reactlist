import React from "react";
import Miku from "./mikusitting.png";

function Header({ total }) {
  return (
    <div className={"header"}>
      <h3>Ancestor's Todolist</h3>
      <p className={"smalltext"}>Total items: {total} </p>
      <img src={Miku}></img>
    </div>
  );
}

export default Header;
