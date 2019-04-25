import React, { Component } from 'react';
import { MDBDataTable } from 'mdbreact';
import './members.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { Member } from "../../model/member/member.js";

class Members extends Component {

    constructor() {
        super();
        this.state = {
            members : []
        };
    }

    componentDidMount() {
        fetch( "/api/members" )
        .then( res => res.json() )
        .then( members => {
            let data = {
                columns : [
                    { label: 'Name', field: 'name', sort: 'asc', width: 150 },
                    { label: 'Position', field: 'position', sort: 'asc', width: 270 },
                    { label: 'Office', field: 'office', sort: 'asc', width: 200 },
                    { label: 'Age', field: 'age', sort: 'asc', width: 100 },
                    { label: 'Start date', field: 'date', sort: 'asc', width: 150 },
                    { label: 'Salary', field: 'salary', sort: 'asc', width: 100 }
                ],
                rows : []
            };
            data.rows = members;
            this.setState({ data });
            
            console.log( "### members fetched : ", this.state );
        } )
        .catch( error => console.log( `### error : ${error.message}` ) );
    }

    componentDidUpdate() {}

    render() {
        return (
            <MDBDataTable striped hover data={this.state.data} />
        );
    }
}

export default Members;