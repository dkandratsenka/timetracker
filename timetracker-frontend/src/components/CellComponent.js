import React, {Component} from "react";
import {Input} from "reactstrap";
import SavePanel from "./SavePanelComponent";


class Cell extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: props.value,
        };

        this.onChangeListener = this.onChangeListener.bind(this);
    }

    onChangeListener = event => {
        this.setState({value: event.target.value});
    }

    render(){

        let selected = this.props.selected;

        return(
            <div  >
                <input type="text" className="cellInput" value={this.state.value} onChange={this.onChangeListener} />
                {selected ? <SavePanel updateUser={this.props.updateUser} resetRow={this.props.resetRow }/> : ""}
            </div>
        )
    }
}

export default Cell;