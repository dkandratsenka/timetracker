import React, {Component} from "react"
import UsersTable from "./table/UsersTableComponent";
import {connect} from "react-redux";
import LoadingIndicator from "react-loading-indicator";
import { fetchUsers } from "../redux/action/actionCreator";

const mapStateToProps = state => {
    return {users: state};
}

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsers())
})

class Main extends Component {

    componentDidMount(){
        this.props.fetchUsers();
    }

    render(){
        if(this.props.users.error)
            return (
                <div>
                    <p>{this.props.users.error + ""}</p>
                </div>
            )

        if (this.props.users.isLoading)
            return <LoadingIndicator style={{position: "absolute", top: "35%", left: "50%"}}/>

        return(
            <UsersTable users={this.props.users.users}/>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Main);
