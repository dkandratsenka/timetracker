import React, {Component} from "react"
import ReactTable from 'react-table'
import { columns } from "../../utility/columsForTable";
import {connect} from "react-redux";
import { fetchUsersSortByDate, fetchUpdateUser} from "../../redux/action/actionCreator"
import User from "../../utility/user";
import { COLUMN_CELL_CLASS } from "../../utility/userColumnName";

const mapDispatchToProps = dispatch => ({
  fetchUsersSortByDate: (start, end ) => dispatch(fetchUsersSortByDate(start, end)),
  fetchUpdateUser: (user) => dispatch(fetchUpdateUser(user))
})



class UsersTable extends Component {

    constructor(props){
      super(props);
      this.state = {
        selectedRow: -1,
        startDate: new Date().getTime(),
        endDate: new Date().getTime(),
        row: null,
        id: -1
      }

      this.saveButtonHandler = this.saveButtonHandler.bind(this);
      this.resetButtonHandler = this.resetButtonHandler.bind(this);
      this.dateListener = this.dateListener.bind(this);
      this.sendCellId = this.sendCellId.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState){
      if(nextProps.users !== this.props.users) return true;
      if(nextState.selectedRow === this.state.selectedRow) return false;

      return true;
    }

    sendCellId(id){
      this.setState({id});
    }

    componentDidUpdate(){
      let element = document.getElementById(this.state.id);
      if(element && element.className.search(COLUMN_CELL_CLASS + this.state.selectedRow)) element.focus();
    }

    resetButtonHandler(){
      let list = document.getElementsByClassName(COLUMN_CELL_CLASS + this.state.selectedRow);

      for(let i = 0; i < 6; i++)
        list[i].value = this.state.row[i];
    }

    saveButtonHandler(index){
      let list = document.getElementsByClassName(COLUMN_CELL_CLASS + this.state.selectedRow);
      let user = new User(this.state.selectedRow,
                          list[0].value,
                          list[1].value,
                          list[2].value,
                          list[3].value,
                          list[4].value, 
                          list[5].value)
      
      this.setState({selectedRow: -1, id: -1});
      this.props.users[index] = user

      this.props.fetchUpdateUser(user);
    }

    dateListener(startDate, endDate){
      this.props.fetchUsersSortByDate(startDate, endDate);
      this.setState({startDate,endDate, selectedRow: -1});
    }

    clickListener = (state, rowInfo, column, instance) => {
      if(!rowInfo) return {};
      return {
        onClick: (e, handleOriginal) => {

          if(this.state.selectedRow !== rowInfo.original.id){
            let row = Array.from(document.getElementsByClassName(COLUMN_CELL_CLASS+rowInfo.original.id)).map(item => item.value);

            this.setState({selectedRow: rowInfo.original.id,
                          row: row});
          }

          if (handleOriginal) {
            handleOriginal()
          }
        },
        style: {
          background: this.state.selectedRow === rowInfo.original.id ? "rgb(220,220,220)" : ""
        }
      }
    }

    render(){
      const columsParams = {
        dateListener: this.dateListener,
        saveButtonHandler: this.saveButtonHandler,
        resetButtonHandler: this.resetButtonHandler,
        sendCellId: this.sendCellId,
        selectedRow: this.state.selectedRow,
        startDate: this.state.startDate,
        endDate: this.state.endDate
      }

      return (
          <div className="container" >
            <div className="column" >
                <ReactTable columns={columns(columsParams)} 
                            data={this.props.users}
                            getTdProps={this.clickListener} 
                            filterable
                            defaultPageSize={20}/>
            </div>
          </div>
      )
    }
}

export default connect(null,mapDispatchToProps)(UsersTable);