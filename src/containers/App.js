import React, { Component } from "react";
import Persons from "../components/Persons/Persons";
import classes from "./App.module.css";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "1001", name: "Arindam", age: "28" },
      { id: "1002", name: "Sabyasachi", age: "27" },
      { id: "1003", name: "Surya", age: "28" },
      { id: "1004", name: "Anindya", age: "28" }
    ],
    showPerson: false
  };

  // switchNameHandler = () => {
  //   this.setState({
  //     persons :  [
  //       {name: 'ArindamEdited', age: '28'},
  //       {name: 'Sabyasachi', age: '27'},
  //       {name: 'Surya', age: '28Edited'}
  //     ]
  //   });
  // };

  switchNameHandler = () => {
    const togglePerson = this.state.showPerson;
    this.setState({
      showPerson: !togglePerson
    });
  };

  deletePersonHandler = personIndex => {
    console.log(personIndex);
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  render() {
    let persons = null;

    if (this.state.showPerson) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }
    return (
      <div className={classes.App}>
        <Cockpit
          title={this.props.title}
          showPerson={this.state.showPerson}
          persons={this.state.persons}
          clicked={this.switchNameHandler}
        />
        {persons}
      </div>
    );
  }
}

export default App;
