import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Customers from './components/customers/customers.js'
import Members from './components/members/members.js'



class App extends Component {

	clickWelcome() {
		document.querySelector( ".div_Welcome" ).style.display = "block"
		document.querySelector( ".div_Customers" ).style.display = "none"
		document.querySelector( ".div_Members" ).style.display = "none"
	}

	clickCustomers() {
		document.querySelector( ".div_Welcome" ).style.display = "none"
		document.querySelector( ".div_Customers" ).style.display = "block"
		document.querySelector( ".div_Members" ).style.display = "none"
	}

	clickMembers() {
		document.querySelector( ".div_Welcome" ).style.display = "none"
		document.querySelector( ".div_Customers" ).style.display = "none"
		document.querySelector( ".div_Members" ).style.display = "block"
	}

	render() {
		return (
			<div className="App">

				<div className="header">
					<h2>ELECTRIMA</h2>
				</div>
				
				<ul className="top_menu">
					<li onClick={this.clickWelcome}>Home</li>
					<li onClick={this.clickCustomers}>Customers</li>
					<li onClick={this.clickMembers}>Members</li>
				</ul>
				
				<div className="div_Welcome">
					<div>
						come one
					</div>
				</div>

				<div className="div_Customers">
					<Customers />
				</div>

				<div className="div_Members">
					<Members />
				</div>
			</div>
		);
	}
}

export default App;
