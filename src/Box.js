import React, { Component } from 'react';

class Box extends Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        this.props.delete(this.props.id);
    }
    
    render() {
        return (
            <div style={{
                backgroundColor: this.props.color,
                width: this.props.width,
                height: this.props.height
            }}>
            <button onClick={this.handleClick}>Delete</button>
            </div>
        )
    }
}

export default Box;