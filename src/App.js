import React, { Component } from 'react';
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
    otherState: 'some other value',
    showPersons: false
  }
  /************************ States ENDS here ************************/

  /************************ Mthods BEGIN here ************************/

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Masoud', age: 29 },
        { name: event.target.value, age: 23 }
      ]
    } )
  }
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
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
      backgroundColor : 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
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
            key={person.id} />
          })}
        </div>
      );
    }
    
    return (
      <div className="App">
        <h1>Masoud Soltanveis</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
