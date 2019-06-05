import React, {Component} from "react";
import { CELL_INPUT_ID,COLUMN_STYLE,COLUMN_CELL_CLASS } from "../../../utility/userColumnName";

class InputCell extends Component{


    render(){
        return(
                <input  type={this.props.type} 
                        id={CELL_INPUT_ID  + this.props.id} 
                        className={`${COLUMN_STYLE} ${COLUMN_CELL_CLASS}${this.props.index}`}  
                        ref={input => this.props.setRef(input)}
                        defaultValue={this.props.value}
                        readOnly={this.props.readOnly}
                        min={0}
                        max={100} 
                        onChange={this.props.globalOnChange} />
        )
    }
}

export default InputCell;