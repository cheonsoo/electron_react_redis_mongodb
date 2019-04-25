import React, { Component } from 'react';
import './customers.css';

let data = {};
class Customers extends Component {

    constructor() {
        super();
        this.state = {
            customers: []
        };
    }

    componentDidMount() {
        fetch( "/api/customers" )
        .then( res => res.json() )
        .then( customers => this.setState({ customers }, () => console.log( `### Customers fetched`, customers ) ) )
        .catch( error => console.log( `### error : ${error.message}` ) );
    }

    render() {
        return (
            <div>
                <h2>Customers</h2>
                <ul>
                    {
                        this.state.customers.map( ( customer, idx ) => {
                            let li_no = <li key={idx}>{idx+1}</li>
                            let li_item = <li key={customer.id}>{customer.firstname} {customer.lastname}</li>
                            let row = <div key={customer.id}>{ [li_no, li_item] }</div>
                            return row;
                        } )
                    }
                </ul>
            </div>
        );
    }
}

export default Customers;