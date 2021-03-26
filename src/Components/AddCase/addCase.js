import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveData } from "../../Services/api-servece";
import { addNewItem } from "../../Actions/ListActions";


class AddCase extends React.Component {
    state = {
        "Description": "",
        "Deadline": "",
        "Do": false,
        "isRedirect": false
    }

    getDescription = (event) => {
        this.setState({
            Description: event.target.value
        })
    }

    getDeadline = (event) => {
        this.setState({
            Deadline: event.target.value
        })
    }

    addNewItems = (event) =>{
        event.preventDefault();
        const { Description, Deadline, Do } = this.state;
        const newItem = { Description, Deadline, Do };
        const { ToDoList, addNewItem } = this.props;
        addNewItem(newItem);
        ToDoList.push(newItem);
        saveData(ToDoList).then(() => {
            this.setState({
                isRedirect: true
            })
        })
    }


    render(){
        const {isRedirect} = this.state;
        const arrDate = ((new Date()).toLocaleDateString()).split(".");
        const  calendar = [arrDate[2], arrDate[1], arrDate[0]].join('-')  
        if(isRedirect){
            return(
                <Redirect to = "/"/>
            )
        }

        return(
            <Fragment>
                 <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-7">
                            <div className="card px-3">
                                <div className="card-body">
                                    <div className="list-wrapper">
                                        <form onSubmit = {this.addNewItems} className="d-flex flex-column todo-list">
                                            <label htmlFor="to-do-item"> What are you planning?
                                                <input type="text" id="to-do-item" onChange = { this.getDescription }></input>
                                            </label>
                                            <label > Deadline
                                                <input type="date"  onChange = { this.getDeadline } min = {calendar} ></input>
                                            </label>
                                            <button className="col-7 col-md-7 col-lg-7" type="submit"> Add </button>
                                        </form>
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

const mapStateToProps = ({ ListReducer }) => {
    const { ToDoList } = ListReducer;
    return { ToDoList }
}

const mapDispatchToProps = {
    addNewItem
}


export default connect( mapStateToProps,mapDispatchToProps) (AddCase);