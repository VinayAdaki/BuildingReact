import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

export default class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titleValue: '',
            selectedCategory: props.categories.length > 0 ? props.categories[2] : ''
        };
    }

    static defaultProps = {
        categories: ['Web Design', 'Web Development', 'Mobile Development']
    }

    handleSubmit(event) {
        const newProject = {
            id: uuid.v4(),
            title: this.state.titleValue,
            category: this.state.selectedCategory
        };

        if (event.target.title.value === '') {
            alert('Title is required');
        } else {
            this.props.addProject(newProject);
            this.setState({
                titleValue: '',
                selectedCategory: this.props.categories[2]
            });
        }
        event.preventDefault();
    }

    titleChange(event) {
        this.setState({
            titleValue: event.target.value
        });
    }

    categoryChange(event) {
        this.setState({
            selectedCategory: event.target.value
        });
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
                        <input type="text" onChange={this.titleChange.bind(this)} value={this.state.titleValue}/>
                    </div>
                    <div>
                        <label>Category</label>
                        <select value={this.state.selectedCategory} onChange={this.categoryChange.bind(this)}>
                            {categoryOptions}
                        </select>
                    </div>
                    <br/>
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
