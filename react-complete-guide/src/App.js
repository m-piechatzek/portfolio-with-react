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


    const [otherState, setOtherState] = useState('somethang else');


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
				<Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
				<Person 
				name={personsState.persons[1].name} 
				age={personsState.persons[1].age} 
				click={switchNameHandler.bind(this,'Fawns in person class')}
				changed={nameChangedHandler}
				>hobby</Person>
				<Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
				<button 
				style={style} 
				onClick={() => switchNameHandler('Monzozo')}>Switch em</button>
			</div>
        // return React.createElement('h1', null, 'h1', 'Hi, I\'m aReact App!!!');
    );

};
export default app;