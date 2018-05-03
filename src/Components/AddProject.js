import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

class AddProject extends Component {

  static defaultProps = {
    categories: ['Web Design', 'Web Development', 'Mobile Development']
  }

  handleSubmit(e){
      if(this.refs.title.value === ''){
          alert('Title is required');
      } else {
          this.setState({newProject: {
            id: uuid.v4(),
            title: this.refs.title.value,
            category: this.refs.category.value
          }
        }, function(){
          this.props.addProject(this.state.newProject);
        })
      }
      e.preventDefault();
  }

  render() {
    const categoryOptions = this.props.categories.map(category => {
      return <option key={category} value={category}> {category} </option>
    });
    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label>
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label>
            <select ref="category">
              {categoryOptions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit"/>
          <br/>
        </form>
      </div>
    );
  }
}

AddProject.propTypes = {
  categories: PropTypes.array.isRequired,
  addProject: PropTypes.func.isRequired
}

export default AddProject;
