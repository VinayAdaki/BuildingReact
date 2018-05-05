import React from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';

export default function Projects(props) {
    return (
        <div className="Projects">
            <h3>Latest Projects</h3>
            {props.projects.map(project => {
                return (
                    <ProjectItem onDelete={props.onDelete} key={project.title} project={project}/>
                );
            })
            }
        </div>
    );
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired
};
