import React from "react";

export default function Card4Drop(props) {
  return (
    <div className="card4_drop">
      <div className="drop_name_cont">
        <div className="drop_name">{props.title}</div>
      </div>
      <div className="vert_line"></div>
      <div className="main_info">{props.value}</div>
    </div>
  );
}
