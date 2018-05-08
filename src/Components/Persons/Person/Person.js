import React, {Component} from 'react';
import classes from './Person.css';
import PropTypes from 'prop-types'; //if you want to define what type of props you should receive

class Person extends Component {
    render() {
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <input type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </div>
        );
    }
}
//defining props types
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default Person;