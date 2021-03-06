import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import { saveData } from "../../../Services/api-servece";
import { updateItem, deleteItem, editItem } from "../../../Actions/ListActions";
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
    
    onEditClick = () => {
        const newCase = this.props;
        const { editItem } = this.props;
        editItem(newCase);
    }

    render(){
        const {Description, Deadline, Do} = this.props;
        let statusStyle = "form-check-label description";
        let checked = "checked";
        if( Do === true){
            statusStyle = "form-check-label description line-through";
        }
        else{
            statusStyle = "form-check-label description";
            checked =""
        }
        const arrDate = ((new Date()).toLocaleDateString()).split(".");
        const  calendar = [arrDate[2], arrDate[1], arrDate[0]].join('-');
        let dateClass = "deadline";
        if(Deadline === calendar){
            dateClass = "deadline-end deadline"
        }
        else{
            dateClass = "deadline"
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
                            <label className= {dateClass}>{Deadline}</label>
                        </label> 
                    </div>
                    <div>
                    <Link to="/edit" className="table-link" > 
                        <i className="fas fa-pencil-alt icon-edit edit" onClick = {this.onEditClick}></i>
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
    deleteItem,
    editItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CaseList);