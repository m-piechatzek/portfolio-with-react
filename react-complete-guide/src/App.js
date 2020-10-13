import React, { useState } from "react";
// Component now is useState
import "./App.css";
import Person from './Person/Person.js';


const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Max', age: 28 },
            { name: 'kris', age: 5 },
            { name: 'fawnze', age: 19 }
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

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                { name: 'Max', age: 28 },
                { name: event.target.value, age: 5 },
                { name: 'fawnze', age: 19 }
            ]

        });
    }

    const togglePersonsHandler = () => setShowPersons(showPersons => !showPersons);


    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    
    return (
        <div className="App">
				<h1>Monika</h1>
				<button 
				style={style} 
				onClick={togglePersonsHandler}>Switch em</button>
        {(console.log("showPersons JSX", showPersons))}
				{ 
					showPersons ? <div>
				<Person 
				 name={personsState.persons[0].name} 
				 age={personsState.persons[0].age} />
				<Person 
				 name={personsState.persons[1].name} 
				 age={personsState.persons[1].age} 
				 click={switchNameHandler.bind(this,'Fawns in person class')}
				 changed={nameChangedHandler}>hobby</Person>
				<Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
				</div> : <div></div> 
			}
			</div>
        // return React.createElement('h1', null, 'h1', 'Hi, I\'m aReact App!!!');
    );

};
export default app;