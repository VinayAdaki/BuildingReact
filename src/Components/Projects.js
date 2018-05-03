import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

class Projects extends Component {
  render() {
    return (
      <div className="Projects">
        <h3>Latest Projects</h3>
        { this.props.projects.map(project => {
            return (
              <ProjectItem onDelete={this.props.onDelete} key={project.title} project={project} />
            );
          })
        }
      </div>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired
}
export default Projects;
