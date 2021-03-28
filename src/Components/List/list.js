import React, { Fragment, useEffect } from "react";
import CaseList from "./CaseList/caseList";
import { connect } from "react-redux";
import { upDatabase } from "../../Services/api-servece";
import { getAllList } from "../../Actions/ListActions"

const List = ({ ToDoList, getAllList }) => {

    useEffect(() => {
        upDatabase().then(data => {
            getAllList(data)
        })
    }, [])

    const renderList = () =>{
        return ToDoList.map(item => {
            return (
                <CaseList  key={item.Id} {...item} />
            )
        })
    }

    return(
        <Fragment>
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
    const { ToDoList } = ListReducer;
    return { ToDoList }
}

const mapDispatchToProps = {
    getAllList
}

export default  connect (mapStateToProps, mapDispatchToProps)(List);