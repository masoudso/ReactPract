import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium'
import './App.css';
import Person from './Person/Person';

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
    const style = {
      backgroundColor : 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor : 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor : 'salmon',
        color : 'black'
      }
    }
    let classes = [];
    if(this.state.persons.length <= 2){
      classes.push('red');
    }
    if(this.state.persons.length <= 1){
      classes.push('bold');
    }
    
    return (
      <StyleRoot>
      <div className="App">
        <h1>Masoud Soltanveis</h1>
        <p className={classes.join(' ')}> React is the paddles!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>{this.state.content}</button>
        {persons}
      </div>
      </StyleRoot>
    );
  }
}

export default Radium (App);
