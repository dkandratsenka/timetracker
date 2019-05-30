import React, {Component} from "react"
import ReactTable from 'react-table'
import { COLUMN_NAME, COLUMN_NUMBER, COLUMN_CHECKBOX } from "../utility/userColumnName";
import {Input} from "reactstrap";
import CellItem from "./CellComponent";
import SavePanel from "./SavePanelComponent";

class UsersTable extends Component {

    constructor(props){
      super(props);
      this.state = {
        users: props.users,
        selectedRow: -1
      }
    }

    static getDerivedStateFromProps(nextProps,prevState){
      if(nextProps.users !== prevState.users)
        return {users: nextProps.users}

      return null;
    }

    shouldComponentUpdate(nextProps, nextState){
      if(nextState.selectedRow === this.state.selectedRow) return false;

      return true;
    }

    clickListener = (state, rowInfo, column, instance) => {
      if(!rowInfo) return {};
      return {
        onClick: (e, handleOriginal) => {
          this.setState({selectedRow: rowInfo.index});
          if (handleOriginal) {
            handleOriginal()
          }
        },
        style: {
          background: this.state.selectedRow === rowInfo.index ? "rgb(220,220,220)" : ""
        }
      }
    }

    render(){


         
      const columns = [{
        Header: COLUMN_NAME,
        accessor: COLUMN_NAME,
        Cell: props => <CellItem value={props.value}/>
      }, {
        Header: COLUMN_NUMBER,
        accessor: COLUMN_NUMBER,
        Cell: props => <CellItem value={props.value} />
      }, {
        Header: COLUMN_CHECKBOX,
        accessor: COLUMN_CHECKBOX,
        Cell: (props) => <CellItem value={props.value} selected={this.state.selectedRow === props.index} />
      }]

      return (
          <div className="container" >
            <div className="column" >
              <ReactTable columns={columns} data={this.props.users} getTdProps = {this.clickListener}/>
            </div>
          </div>
      )
    }
}

export default UsersTable;