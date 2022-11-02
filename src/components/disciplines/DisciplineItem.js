import React from "react";
import "./DisciplineItem.css";

function DisciplineItem(props) {
  console.log("Im here")
  console.log(props)
  return (
    <div className="card">
      <div>
        <img className="image" src={props.img} />
      </div>
      <h1> {props.title} </h1>
      <p> {props.description} </p>
      <div className="timing-container">
        <p> Started at: {props.startTime} </p>
        <p> - - </p>
        <p> Finished at: {props.finishTime}</p>
       
      </div>
    </div>
  );
}

export default DisciplineItem;
