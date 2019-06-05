import React, {Component} from "react";
import SavePanel from "./SavePanelComponent";
import { CELL_TEXTAREA_ID } from "../../../utility/userColumnName";
import ToolTipCell from "./ToolTipComponent";
import InputCell from "./InputCellComponent";
import PopoverCell from "./PopoverComponent";
import { CELL_ID } from "../../../utility/userColumnName";


class Cell extends Component {

    constructor(props){
        super(props);

        this.onClickHandler = this.onClickHandler.bind(this);
        this.setRef = this.setRef.bind(this);
        this.closePopover = this.closePopover.bind(this);

        this.input = React.createRef();
    }

    onClickHandler(){
        this.props.sendCellId(this.props.id);
    }

    setRef(input){
        this.input = input;
    }

    closePopover(){
        this.input.value = document.getElementById(CELL_TEXTAREA_ID+ this.props.id).value;
        document.getElementsByClassName("fade show")[0].className = "fade";
        this.props.globalOnChange(); 
    }

    render(){
        let saveButton = this.props.selected;
        let tooltips = this.props.tooltips;
        let popover = this.props.popover;

        let id = CELL_ID + this.props.id

        if(this.input.value) this.input.value = this.props.value;
        return(
            <div id={id} onClick={this.onClickHandler}>
                <InputCell  id={this.props.id}
                            index={this.props.index}
                            value={this.props.value}
                            type={this.props.type}
                            setRef={this.setRef}
                            readOnly={this.props.readOnly}
                            globalOnChange={this.props.globalOnChange}/>

                {tooltips ? <ToolTipCell id={this.props.id}
                                         value={this.props.value}/> : ""}

                {popover ? <PopoverCell  id={this.props.id}
                                         value={this.props.value}
                                         closePopover={this.closePopover}/> : ""}

                {saveButton ? <SavePanel updateUser={this.props.updateUser} 
                                         index={this.props.index}
                                         rowIndex={this.props.rowIndex} 
                                         resetButtonHandler={this.props.resetButtonHandler }
                                         saveButtonHandler={this.props.saveButtonHandler}/> : ""}
            </div>
        )
    }
}

export default Cell;