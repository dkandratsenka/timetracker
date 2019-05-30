import React, {Component} from "react";
import {Button} from "reactstrap";


class SavePanel extends Component {

    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            style: {}
        };

        this.container = React.createRef();
    }


    componentDidMount(){
        let pos = this.container.current.getBoundingClientRect();
        this.setState({
            style: {
                position: "absolute",
                left: pos.x,
                top: pos.y - 33

            }
        })
    }

    render(){
        return(
            <div style={this.state.style} ref={this.container}>
                <Button color="primary" className="panelButton" onClick={this.props.updateUser}>Save</Button>
                <Button color="primary" className="panelButton" onClick={(event) => {this.props.resetRow(); console.log(1);}}>Reset</Button>
            </div>
        )
    }
}

export default SavePanel;