import React, { Fragment, useEffect } from "react";
import CaseList from "./CaseList/caseList";
import { connect } from "react-redux";

const List = ({}) => {
    return(
        <Fragment>
            <div class="row container d-flex justify-content-center">
                <div class="col-md-12">
                    <div class="card px-3">
                        <div class="card-body">
                            <div class="list-wrapper">
                                <ul class="d-flex flex-column-reverse todo-list">
                                    <CaseList/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default List;