// {"name":"Tiger Nixon","position":"System Architect","office":"Edinburgh","age":"61","date":"2011/04/25","salary":"$320"}
export class Member {

    name = "";
    position = "";
    office = "";
    age = "";
    date = "";
    salary = "";
    members = [];

    constructor( name ) {
        this.name = name;
        console.log( `### name : ${this.name}` );
    }

    getName() {
        return this.name;
    }

    setMembers( data ) {
        this.members = data;
    }

    getMembers() {
        return this.members;
    }
}