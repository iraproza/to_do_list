import React, { Fragment, useEffect } from "react";
import CaseList from "./CaseList/caseList";
// import { connect } from "react-redux";

const List = () => {
    return(
        <Fragment>
            <div className="container">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-7">
                        <div className="card px-3">
                            <div className="card-body">
                                <div className="list-wrapper">
                                    <ul className="d-flex flex-column-reverse todo-list">
                                        <CaseList/>
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

export default List;