import React, { Component } from 'react';
// eslint-disable-next-line
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard.js'
import Customers from './components/customers/customers.js'
import Members from './components/members/members.js'



class App extends Component {

	clickMenu( evt ) {

		let clicked = evt.currentTarget.className;
		let ul = evt.currentTarget.parentElement;
		let li_arr = ul.querySelectorAll( "li" );
		li_arr.forEach( li => {
			
			let current = li.className
			if ( current === clicked ) {
				document.querySelector( ".div_" + current ).style.display = "block";
			} else {
				document.querySelector( ".div_" + current ).style.display = "none";
			}
		});
	}

	render() {
		return (
			<div className="App">

				<div className="header">
					<h2>ELECTRIMA</h2>
				</div>
				
				<ul className="top_menu" id="top_menu">
					{/* <li onClick={this.clickWelcome}>Home</li> */}
					<li className="dashboard" key="dashboard" onClick={this.clickMenu}>Dashboard</li>
					<li className="customers" key="customers" onClick={this.clickMenu}>Customers</li>
					<li className="members"   key="members"   onClick={this.clickMenu}>Members</li>
				</ul>
								
				{/* <div className="div_Welcome">
					<div>
						come one
					</div>
				</div> */}

				<div className="div_dashboard">
					<div><Dashboard /></div>
				</div>

				<div className="div_customers">
					<Customers />
				</div>

				<div className="div_members">
					<Members />
				</div>
			</div>
		);
	}
}

export default App;
