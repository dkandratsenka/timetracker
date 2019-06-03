import React from "react";
import CellItem from "../components/table/CellComponent"
import * as CONST from "./userColumnName";

export const columns = (params) =>  {
                                    let counter = 0;

                                    return [{
                                        columns: [{
                                            Header: CONST.COLUMN_HEADER_FIRST,
                                            accessor: CONST.COLUMN_ACCESSOR_FIRST,
                                            Cell: props => <CellItem id={counter++} 
                                                                     type="text"
                                                                     rowIdex={props.index}
                                                                     index={props.original.id} 
                                                                     sendCellId={params.sendCellId}  
                                                                     value={props.value}/>,

                                            filterMethod: (filter, row) =>
                                                new String(row[filter.id]).startsWith(filter.value) 
                                        }]
                                    }, {
                                        columns: [{
                                            Header: CONST.COLUMN_HEADER_SECOND,
                                            accessor: CONST.COLUMN_ACCESSOR_SECOND,
                                            Cell: props => <CellItem id={counter++}
                                                                     type="date"
                                                                     rowIdex={props.index}  
                                                                     index={props.original.id} 
                                                                     sendCellId={params.sendCellId}  
                                                                     value={new Date(props.value).toISOString().slice(0,10)}/>,

                                            Filter: ({ filter, onChange }) => <input type="date" 
                                                                                     value={new Date(params.startDate).toISOString().slice(0,10)} 
                                                                                     onChange={ event => params.dateListener(event.target.valueAsNumber,params.endDate)}/>
                                        }]
                                    }, {
                                        columns: [{
                                            Header: CONST.COLUMN_HEADER_THIRD,
                                            accessor: CONST.COLUMN_ACCESSOR_THIRD,
                                            Cell: (props) => <CellItem  id={counter++}
                                                                        type="date"
                                                                        rowIdex={props.index}  
                                                                        index={props.original.id} 
                                                                        sendCellId={params.sendCellId}  
                                                                        value={new Date(props.value).toISOString().slice(0,10)}/>,

                                            Filter: ({ filter, onChange }) => <input type="date" 
                                                                                     value={new Date(params.endDate).toISOString().slice(0,10)} 
                                                                                     onChange={ event => params.dateListener(params.startDate,event.target.valueAsNumber)}/>
                                        }]
                                    }
                                    , {
                                        columns: [{
                                            Header: CONST.COLUMN_HEADER_FOURTH,
                                            accessor: CONST.COLUMN_ACCESSOR_FOURTH,
                                            Cell: (props) => <CellItem  id={counter++}
                                                                        type="number"
                                                                        rowIdex={props.index}
                                                                        min={0}  
                                                                        index={props.original.id} 
                                                                        sendCellId={params.sendCellId}  
                                                                        value={props.value}/>,

                                            filterMethod: (filter, row) =>
                                                new String(row[filter.id]).startsWith(filter.value) 
                                        }]
                                        
                                    
                                    }, {
                                        columns: [{
                                            Header: CONST.COLUMN_HEADER_FIFTH,
                                            accessor: CONST.COLUMN_ACCESSOR_FIFTH,
                                            Cell: (props) => <CellItem  id={counter++}  
                                                                        type="number"
                                                                        rowIndex={props.index}
                                                                        min={0}
                                                                        max={6}
                                                                        index={props.original.id} 
                                                                        sendCellId={params.sendCellId}  
                                                                        value={props.value}/>,

                                            filterMethod: (filter, row) =>
                                                new String(row[filter.id]).startsWith(filter.value) 
                                        }]
                                    
                                    }, {
                                        columns: [{
                                            Header: CONST.COLUMN_HEADER_SIXTH,
                                            accessor: CONST.COLUMN_ACCESSOR_SIXTH,
                                            Cell: (props) => <CellItem  id={counter++}   
                                                                        type="text"
                                                                        index={props.original.id}
                                                                        rowIndex={props.index} 
                                                                        value={props.value}
                                                                        sendCellId={params.sendCellId} 
                                                                        saveButtonHandler={params.saveButtonHandler} 
                                                                        resetButtonHandler={params.resetButtonHandler} 
                                                                        selected={params.selectedRow === props.original.id} />,

                                            filterMethod: (filter, row) =>
                                                new String(row[filter.id]).startsWith(filter.value) 
                                        }]
                                    
                                    }]
                                }