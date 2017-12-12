import React, { Component } from 'react';
import './App.css';
import {
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'
import StudentList from './components/StudentList'
import NoMatch from './components/NoMatch'
import ListItem from './components/ListItem'

class App extends Component {

state = {
  students: [
    { id: 1, name: "Jim James", photo: "https://randomuser.me/api/portraits/women/10.jpg", bio: "Coder with no home" },
    { id: 2, name: "Jim Jomes", photo: "https://randomuser.me/api/portraits/women/14.jpg", bio: "Coder with two homes" },
    { id: 3, name: "Jim Jumes", photo: "https://randomuser.me/api/portraits/women/11.jpg", bio: "Coder with cardboard box" },
    { id: 4, name: "Jim Jemes", photo: "https://randomuser.me/api/portraits/women/33.jpg", bio: "Coder with a pet snail" }
  ]
}

findStudent = (id) => {
  return this.state.students.find((student) => {
    return student.id === parseInt(id, 10)
  })
}

handleDelete = (id) => {
  this.setState({
    students: this.state.students.filter((student) => {
      return student.id !== id
    })
  })
}

  render() {
    return (
        <div className="App">
          <Switch>
            <Route exact path="/" component={
              () => <StudentList
                      handleDelete={ this.handleDelete }
                      students={ this.state.students }
                    />
            } />
            <Route path="/students/:id"
                   component={ ({match}) => <ListItem { ...this.findStudent(match.params.id) }
                                            />
            } />
            <Route component={ NoMatch } />
          </Switch>
        </div>
    );
  }
}

export default App;
