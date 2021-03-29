import React, { Fragment} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveData } from "../../Services/api-servece";
import { updateItem } from "../../Actions/ListActions";

class EditList extends React.Component { 
    state =  {
        "Description": this.props.currentItem.Description,
        "Deadline": this.props.currentItem.Deadline,
        "Do": this.props.currentItem.Do,
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

    onEditItem = (Id) =>{
        const { ToDoList, updateItem, currentItem } = this.props;
        if(currentItem !== null){
            const newList = ToDoList.map((item) => item.Id === currentItem.Id ? {
                "Id": currentItem.Id,
                "Description": this.state.Description,
                "Do": this.state.Do,
                "Deadline": this.state.Deadline
            } : item);
            updateItem(newList);
            saveData(newList).then(() => 
                this.setState({
                    isRedirect: true
                })
            )
        }
    }

    editList = (event) =>{
        event.preventDefault();
        const {Do, Description, Deadline, Id} =  this.props;
        const item = { Id, Do, Description, Deadline};
        this.onEditItem(item);
    }

    render(){
        const {Description, Deadline, isRedirect} = this.state; 
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
                                        <h2> Edit plan</h2>
                                        <ul className="d-flex flex-column todo-list">
                                            <label htmlFor="to-do-item"> What are you planning?
                                                <input type="text" id="to-do-item" value={Description} onChange ={this.getDescription}></input>
                                            </label>
                                            <label htmlFor="to-do-deadline"> Deadline
                                                <input type="date" id="to-do-deadline" value = { Deadline} onChange = {this.getDeadline}></input>
                                            </label>
                                            <button className="col-7 col-md-7 col-lg-7" onClick = {this.editList}> Edit </button>
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

const mapStateToProps = ({ ListReducer }) => {
    const { ToDoList, currentItem,  valueSearch, searchList } = ListReducer;
    return { ToDoList, currentItem,  valueSearch, searchList }
}

const mapDispatchToProps = {
    updateItem,
    saveData
}

export default connect (mapStateToProps, mapDispatchToProps)(EditList);