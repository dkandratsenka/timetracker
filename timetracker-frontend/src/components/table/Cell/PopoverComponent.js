import React, {Component} from "react";
import { CELL_TEXTAREA_ID, CELL_TEXTAREA_CLASS, CELL_INPUT_ID, CELL_POPOVER_ID } from "../../../utility/userColumnName";
import { UncontrolledPopover , PopoverHeader, PopoverBody, Button } from 'reactstrap';

class PopoverCell extends Component{

    render(){
        return(
                <UncontrolledPopover id={CELL_POPOVER_ID + this.props.id}  placement="right"  target={CELL_INPUT_ID + this.props.id} trigger="legacy">
                    <PopoverHeader>Comment</PopoverHeader>
                    <PopoverBody>
                        <div>
                             <textarea className={CELL_TEXTAREA_CLASS} id={CELL_TEXTAREA_ID + this.props.id}  defaultValue={this.props.value} />
                             <hr />
                            <Button onClick={this.props.closePopover} color="primary">Save</Button>
                        </div>
                     </PopoverBody>
                 </UncontrolledPopover >
        )
    }
}

export default PopoverCell;