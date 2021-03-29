import React, { Fragment, useEffect } from "react";
import CaseList from "./CaseList/caseList";
import { connect } from "react-redux";
import { upDatabase } from "../../Services/api-servece";
import { getAllList } from "../../Actions/ListActions";
import Search from "../Search/search";


const List = ({ ToDoList, searchList, valueSearch, getAllList }) => {

    useEffect(() => {
        upDatabase().then(data => {
            getAllList(data)
        })
    }, [])

    const renderList = () => {
        if (valueSearch.length === 0){
            return ToDoList.map(item => {
                return (
                    <CaseList  key={item.Id} {...item} />
                )
            })
        }
        else if(searchList.length === 0 && valueSearch.length > 0 ){
            return <li><h2>List is empty</h2></li>;
         } 
        else if(searchList.length > 0){
            return searchList.map(item => {
                return (
                    <CaseList key={item.Id} {...item} />
                )
            })
        }
    }

    return(
        <Fragment>
            <Search/>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card px-3">
                            <div className="card-body">
                                <div className="list-wrapper">
                                    <ul className="d-flex flex-column-reverse todo-list">
                                        {renderList()}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

const mapStateToProps = ({ ListReducer }) => {
    const { ToDoList, searchList, valueSearch } = ListReducer;
    return { ToDoList, searchList, valueSearch }
}

const mapDispatchToProps = {
    getAllList
}

export default  connect (mapStateToProps, mapDispatchToProps)(List);