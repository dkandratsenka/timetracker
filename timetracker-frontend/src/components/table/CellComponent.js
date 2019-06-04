import React, {Component} from "react";
import SavePanel from "./SavePanelComponent";
import { COLUMN_CELL_CLASS, COLUMN_STYLE } from "../../utility/userColumnName";


class Cell extends Component {

    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);

        this.input = React.createRef();
    }

    onClickHandler(){
        this.props.sendCellId(this.props.id);
    }

    render(){
        let selected = this.props.selected;
        if(this.input.value) this.input.value = this.props.value;
        return(
            <div  >
                <input  type={this.props.type} id={this.props.id} 
                        onClick={this.onClickHandler}  
                        className={`${COLUMN_STYLE} ${COLUMN_CELL_CLASS}${this.props.index}`}  
                        ref={input => this.input = input}
                        defaultValue={this.props.value}
                        min={this.props.min}
                        max={this.props.max} />

                {selected ? <SavePanel  updateUser={this.props.updateUser} 
                                        index={this.props.index}
                                        rowIndex={this.props.rowIndex} 
                                        resetButtonHandler={this.props.resetButtonHandler }
                                        saveButtonHandler={this.props.saveButtonHandler}/> : ""}
            </div>
        )
    }
}

export default Cell;