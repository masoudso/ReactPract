import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }
    if (props.persons.length <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.bold);
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Masoud Soltanveis</h1>
            {/* passing the name from index.js to app.js and then to cockpit.js */}
            <h2>{props.appName}</h2>
            <p className={assignedClasses.join(' ')}> React is the paddles!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>{props.content}</button>
        </div>
    );
}

export default cockpit;