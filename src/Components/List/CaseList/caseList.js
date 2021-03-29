import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { saveData } from "../../../Services/api-servece";
import {Redirect} from "react-router-dom";
import { updateItem, deleteItem } from "../../../Actions/ListActions";
import "./caseList.css";

class CaseList extends React.Component  {

    onChecked= () => {
        const item = {...this.props};
        const { ToDoList, updateItem } = this.props;
        const newList = ToDoList.slice();
        const index = ToDoList.findIndex((elem) => elem.Id === item.Id);

        if (newList[index].Do === false){
            newList[index].Do = true
        }
        else{
            newList[index].Do = false
        }
        updateItem(newList);
        saveData(newList).then(() => {
            this.setState({
                ToDoList: newList
            })
        }) 
    }
    
    onDeleteItem = () => {
        const { ToDoList, deleteItem } = this.props;
        const list_item = this.props;
        const newList = ToDoList.filter((item) => {
            return item.Id !== list_item.Id;
        });
        deleteItem(list_item.Id);
        saveData(newList).then(() => {
            this.setState({
                ToDoList: newList,
                isRedirect: true
            })
        }) 
    }
    
    onEditClick = (Id) => {
        const editId = this.state.ToDoList.find((elem) => elem.Id === Id);
        this.setState(() => {
            return {
                currentItem: editId
            }
        })
    }

    render(){
        const {Description, Deadline, Do} = this.props;
        let statusStyle = "form-check-label description";
        let checked = "checked";
        if( Do == true){
            statusStyle = "form-check-label description line-through";
        }
        else{
            statusStyle = "form-check-label description";
            checked =""
        }

        return(      
                <li className = "item-list">
                    <div className="form-check"> 
                        <label className= {statusStyle}> 
                            <div>
                                <input className="checkbox" type="checkbox" checked={checked} onChange={this.onChecked}/>  
                                <i className="input-helper"></i>
                                {Description}
                                </div>
                            <label className= "deadline">{Deadline}</label>
                        </label> 
                    </div>
                    <div>
                    <Link to="/edit" className="table-link" > 
                        <i className="fas fa-pencil-alt icon-edit edit" ></i>
                    </Link>
                        <i className="fas fa-trash-alt icon-edit trash" onClick = {this.onDeleteItem}></i>
                    </div>
                </li>                   
        )
    }
}

const mapStateToProps = ({ListReducer}) =>{
    const { ToDoList } = ListReducer;
    return {ToDoList}
}
const mapDispatchToProps = {
    updateItem,
    deleteItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CaseList);