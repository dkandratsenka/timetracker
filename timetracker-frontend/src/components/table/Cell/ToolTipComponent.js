import React, {Component} from "react";
import { CELL_INPUT_ID } from "../../../utility/userColumnName";
import { UncontrolledTooltip} from 'reactstrap';

class ToolTipCell extends Component{


    render(){
        return(
                <UncontrolledTooltip  placement="top" target={CELL_INPUT_ID + this.props.id}>
                    <span>
                        {this.props.value}
                    </span> 
                </UncontrolledTooltip >
        )
    }
}

export default ToolTipCell;