import React, {Component} from "react"
import ReactTable from 'react-table'
import { COLUMN_NAME, COLUMN_NUMBER, COLUMN_CHECKBOX } from "../utility/constant";
import {Input} from "reactstrap";

class UsersTable extends Component {

    render(){
         
          const columns = [{
            Header: COLUMN_NAME,
            accessor: COLUMN_NAME
          }, {
            Header: COLUMN_NUMBER,
            accessor: COLUMN_NUMBER
          }, {
            Header: COLUMN_CHECKBOX,
            accessor: COLUMN_CHECKBOX,
            Cell: props => <Input type="checkbox" defaultChecked={props.value}></Input>
          }]

        return (
            <ReactTable columns={columns} />
        )
    }
}

export default UsersTable;