import React, {Component} from "react"
import UsersTable from "./UsersTableComponent";
import {connect} from "react-redux";

const mapStateToProps = state => {
    return {users: state};
}

class Main extends Component {
    render(){
        return(
            <UsersTable users={this.props.users}/>
        )
    }
}

export default connect(mapStateToProps)(Main);