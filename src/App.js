import React, { Component } from 'react';
import uuid from 'uuid';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'Ecommarce shopping Cart',
          category: 'Web Development'
        }
      ]
    }
  }

  handleAddProject(project){
      let projects = this.state.projects;
      projects.push(project);
      this.setState({projects});
  }

  handleDeleteProject(id){
      let projects = this.state.projects;
      const index = projects.findIndex(project => project.id === id);
      projects.splice(index, 1);
      this.setState({projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
