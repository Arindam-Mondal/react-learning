import React, { useEffect } from "react";
import classes from "./Cockpit.module.css";

const cockpit = props => {
  const assignedClasses = [];
  let btnClass = "";

  useEffect(() => {
    console.log("[Cockpit.js]");
  });

  console.log(props.showPerson);
  if (props.showPerson) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 2) {
    assignedClasses.push(classes.bold);
  }

  return (
    <div className={classes.Cockpit}>
      <p>{props.title}</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Person
      </button>
    </div>
  );
};

export default cockpit;
