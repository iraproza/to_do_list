import React, { Fragment} from "react";

class AddCase extends React.Component {
    render(){
        return(
            <Fragment>
                 <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7">
                            <div className="card px-3">
                                <div className="card-body">
                                    <div className="list-wrapper">
                                        <ul className="d-flex flex-column-reverse todo-list">
                                            <label for="to-do-item"> What are you planning?
                                                <input type="text" id="to-do-item"></input>
                                            </label>
                                            <label for="to-do-item"> Deadline
                                                <input type="date" id="to-do-item"></input>
                                            </label>

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
}

export default AddCase;