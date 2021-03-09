
import React, { Component } from 'react';


class InputForm extends Component {

    constructor() {
        super();

        this.state = {
            title: "question from react",
            description: "question text"
        };
    }

    postToRest(){
        alert("press");

        fetch('http://localhost:8080/questions', {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    title: 'yourValue',
    description: 'yourOtherValue',
  })
})
    }
//<button onClick={this.postToRest}>Submit</button>
    

    render() {
        return (
            <div>
                Test
            </div>
        );
    }
}

export default InputForm;