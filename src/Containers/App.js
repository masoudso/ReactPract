import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../Components/Cockpit/Cockpit';
import Persons from '../Components/Persons/Persons';

class App extends Component {
  /************************ States BEGIN here ************************/
  state = {
    persons: [
      { id: 1, name: 'Masoud', age: 29 },
      { id: 2, name: 'Af', age: 23 },
      { id: 3,name: 'Mor', age: 34}
    ],
    content: 'Show Content',
    otherState: 'some other value',
    showPersons: false
  }
  /************************ States ENDS here ************************/

  /************************ Mthods BEGIN here ************************/

  //in this method, you're passing in the event(whatever changes down there) and
  //the id. once receiving them, this method compares the id, with the id for 
  //each element in the "persons" array, 
  //if found, returns the index of that element:
  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    //now, make a copy of person using spread op to create 
    //a new person with the index found above
    const person = {
      ...this.state.persons[personIndex]
    };
    //set the persons name to the value user inputs
    person.name = event.target.value;
    //make a copy of the whole array using spread op
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons } )
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
    if(this.state.showPersons){
      this.setState({content : 'Show Content'})
    }else {this.setState({content : 'Hide Content'})}
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); 
    //for a better approach than the line above (spread op):
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons : persons});
  }
  /************************ Methods END here ************************/

  /************************ Render() BEGINS here ************************/
  render () {
    let persons = null;
    if(this.state.showPersons){
      persons = <Persons 
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>;
    }
    
    return (
      <div className={classes.App}>
       <Cockpit
        showPersons={this.state.showPersons}
        persons={this.state.persons}
        content={this.state.content}
        clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
