
import React, { Component } from 'react';

class Consultants extends Component {

    constructor() {
        super();

        this.state = {
            consultants: []
        };
    }

    componentWillMount() {
        //alert("fetch starting");
        //console.log("fetch starting") 
        fetch(`http://localhost:8080/getConsultants`)
            .then(consultantsList => {
                return consultantsList.json();
            }).then(data => {
                let new_consultants = data.consultantsList.map((consultant) => {
                    return (
                        <div key={consultant.id}>
                            {consultant.content}
                        </div>
                    )
                })
                this.setState({ consultants: new_consultants });    
                //console.log("state ", this.state.consultants) 
            })
    }

    render() {
        return (
            <div>
                {this.state.consultants}
            </div>
        );
    }
}

export default Consultants;