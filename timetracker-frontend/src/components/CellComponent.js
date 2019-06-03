import React, {Component} from "react";
import {Input} from "reactstrap";
import SavePanel from "./SavePanelComponent";
import { COLUMN_CELL_CLASS, COLUMN_STYLE } from "../../utility/userColumnName";


class Cell extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: props.value
        };

        this.onChangeListener = this.onChangeListener.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onChangeListener = event => {
        this.setState({value: event.target.value});
    }

    onClickHandler(){
        this.props.sendCellId(this.props.id);
    }

    render(){

        let selected = this.props.selected;
        return(
            <div  >
                <input  type={this.props.type} id={this.props.id} 
                        onClick={this.onClickHandler}  
                        className={`${COLUMN_STYLE} ${COLUMN_CELL_CLASS}${this.props.index}`}  
                        value={this.state.value} 
                        onChange={this.onChangeListener}
                        min={this.props.min}
                        max={this.props.max} />

                {selected ? <SavePanel  updateUser={this.props.updateUser} 
                                        index = {this.props.index} 
                                        resetButtonHandler={this.props.resetButtonHandler }
                                        saveButtonHandler={this.props.saveButtonHandler}/> : ""}
            </div>
        )
    }
}

export default Cell;