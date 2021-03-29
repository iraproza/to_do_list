import React, { Fragment} from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { saveData } from "../../Services/api-servece";
import { editItem } from "../../Actions/ListActions";

class EditList extends React.Component { 
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

    onEditContact = (li) =>{
        const newList = this.state.ToDoList.map((item) => item.Id === li.Id ? li : item);
        const {saveData, ToDoList} = this.props;
        this.setState(()=>{
            return{
            ToDoList: newList
            }
        })
        saveData(newList)
    }

    editList = (event) =>{
        event.preventDefault();
        const {Do, Description, Deadline, Id} =  this.props;
        const item = { Id, Do, Description, Deadline};
        this.onEditContact(item);
        this.setState({
            isRedirect: true
        })
    }

    render(){
        const {Description, Deadline, isRedirect} = this.props; 
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
                                        <ul className="d-flex flex-column-reverse todo-list">
                                            <label for="to-do-item"> What are you planning?
                                                <input type="text" id="to-do-item" value={Description} onChange ={this.getDescription}></input>
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

const mapStateToProps = ({ ListReducer }) => {
    const { ToDoList, currentItem } = ListReducer;
    return { ToDoList, currentItem }
}

const mapDispatchToProps = {
    editItem
}

export default connect (mapStateToProps, mapDispatchToProps)(EditList);