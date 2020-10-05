import React, { Component } from "react";
import "./App.css";
import Person from './Person/Person.js';

class App extends Component {
	render() {
		return (
			<div className="App">
				<h1>Monika</h1>
				<Person />
			</div>
		// return React.createElement('h1', null, 'h1', 'Hi, I\'m aReact App!!!');
		);
	}
}
export default App;
