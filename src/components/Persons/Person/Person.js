import React, { Component } from "react";
import personClass from "./Person.module.css";
import Aux from "../../../hoc/Auxilliary";

class Person extends Component {
  render() {
    return (
      <Aux className={personClass.Person}>
        <p onClick={this.props.click}>
          I am {this.props.name} and my age is {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

export default Person;
