import React, { Component } from 'react';
import './App.css';
import StudentList from './components/StudentList'

class App extends Component {

state = {
  students: [
    { id: 1, name: "Jim James", photo: "pic.jpg", bio: "Coder with no home" },
    { id: 2, name: "Jim Jomes", photo: "pic.jpg", bio: "Coder with two homes" },
    { id: 3, name: "Jim Jumes", photo: "pic.jpg", bio: "Coder with cardboard box" },
    { id: 4, name: "Jim Jemes", photo: "pic.jpg", bio: "Coder with a pet snail" }
  ]
}

  render() {
    return (
      <div className="App">
        <StudentList students={ this.state.students } />
      </div>
    );
  }
}



export default App;
