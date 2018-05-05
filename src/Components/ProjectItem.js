import React from 'react';
import PropTypes from 'prop-types';

export default function ProjectItem(props) {
    const {
        title,
        category,
        id
    } = props.project;

    return (
        <li className="ProjectItem">
            <strong>{title}</strong>:{category}
            <a href="#" onClick={props.onDelete.bind(this, id)}>Delete Project</a>
        </li>
    );
}

ProjectItem.propTypes = {
    project: PropTypes.shape({
        title:PropTypes.string,
        category:PropTypes.string,
        id:PropTypes.string
    }),
    onDelete: PropTypes.func
};
