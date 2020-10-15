import React, { useState } from "react";
// Component now is useState
import "./App.css";
import Person from './Person/Person.js';
import styled from 'styled-components';

const StyledButton = styled.button`
	    background-color: ${ props => (props.alt ? 'red' : 'green')};
        color: white;
        font: inherit;
        border: 1px solid blue;
        padding: 8px;
        cursor: pointer;
        &:hover {
        	background-color:  ${ props => (props.alt ? 'salmon' : 'lightgreen')};
        	color: black;
        }

`;

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { id: '1', name: 'Max', age: 28 },
            { id: '2', name: 'kris', age: 5 },
            { id: '3', name: 'fawnze', age: 19 }
        ]
    });
    const [showPersons, setShowPersons] = useState(false);
    const [setOtherState, otherState] = useState('somethang else');



    console.log(typeof(setOtherState))
    const switchNameHandler = (newName) => {



        setPersonsState({
            persons: [
                { name: 'monz', age: 31 },
                { name: 'evan', age: 5 },
                { name: newName, age: 19 }
            ]

        });
    };

    const nameChangedHandler = (event, id) => {
    	const personIndex = personsState.persons.findIndex(p => {
    		return p.id === id;
    	});


    	const person = { ...personsState.persons[personIndex]}

    	person.name = event.target.value;

    	const persons = [...personsState.persons];
    	persons[personIndex] = person;


        setPersonsState({
            persons: persons

        });
    }

    const deletePersonHandler = (personIndex) => {
    	// const persons = personsState.persons;
    	const persons = [...personsState.persons]
    	persons.splice(personIndex, 1);
    	setPersonsState({persons: persons})

    }

    const togglePersonsHandler = () => setShowPersons(showPersons => !showPersons);

    const style = {


    	backgroundColor: '',
        ':hover': {
        	backgroundColor: '',
        	color: ''
        }
    };


    let persons = null;


    if (showPersons) {
    
        persons = (
            <div>
                { 
                	personsState.persons.map((person, index) => {
                	return <Person 
                	click={() => deletePersonHandler(index)}	
                	name={person.name} 
                	age={person.age} 
                	key={person.id}
                	changed={(event) => nameChangedHandler(event, person.id)}
                	/>
                })

            }
            </div>
        );
        
        // style[':hover'] = {
        // 	backgroundColor: 'salmon',
        // 	color: 'black'
        // }
    };

    let classes = [];
    if (personsState.persons.length <= 2) {

    	classes.push('red');
    }
    if (personsState.persons.length <= 1) {

    	classes.push('bold');
    }
    
    return (
    	
        <div className="App">
				<h1>Monika</h1>
				<p className={classes.join(' ')}>werk pls</p>
				<StyledButton alt={showPersons} 
					onClick={togglePersonsHandler}>Switch em</StyledButton>
					{persons}
				</div>

    );

};
export default app;