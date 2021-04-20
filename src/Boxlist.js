import React, {Component} from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';

class Boxlist extends Component {
    constructor(props){
        super(props);
        this.state = {boxes: []};
        this.addBox = this.addBox.bind(this);
        // this.renderBox = this.renderBox.bind(this);
        this.delete = this.delete.bind(this);
    }

    addBox(box){
        //creates a new box
        let newBox = {...box, id:uuidv4()};

        this.setState(st => ({
            boxes : [...st.boxes, newBox]
        }))
    }

    delete(id){
        const newArr = this.state.boxes.filter(e => e.id !== id);
        
        this.setState({boxes: newArr});
    }

    // renderBox(){
    //     return this.state.boxes.map( e => (
    //         <Box height={e.height} width={e.width} color={e.color} id={e.id} delete={this.delete}/>
    //     ))
    // }

    render(){
        const boxes = this.state.boxes.map(e => (
            <Box height={e.height} width={e.width} color={e.color} key={e.id} id={e.id} delete={this.delete}/>
        ))
        return(
            <div>
                <NewBoxForm addBox={this.addBox}/>
                {boxes}
            </div>
        )
    }
}

export default Boxlist;