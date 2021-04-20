import React, { Component } from 'react';

class NewBoxForm extends Component {
    constructor(props) {
        super(props);
        this.state = { height: '', width: '', color: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        const box = {height: this.state.height + 'px', width: this.state.width + 'px', color: this.state.color};

        this.props.addBox(box);
        this.setState({ height: '', width: '', color: '' });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='height'>Height</label>
                <input name='height' type="text" value={this.state.height} onChange={this.handleChange}></input>
                <label htmlFor='width'>Width</label>
                <input name='width' type='text' value={this.state.width} onChange={this.handleChange}></input>
                <label htmlFor='color'>backgroundColor:</label>
                <input name='color' type='text' value={this.state.color} onChange={this.handleChange}></input>
                <button>Add Box!</button>
            </form>
        )
    }
}

export default NewBoxForm;