import React from "react";
import { connect } from "react-redux";
import { saveData } from "../../../Services/api-servece";
import {Redirect} from "react-router-dom";
import { updateItem } from "../../../Actions/ListActions";
import "./caseList.css";

class CaseList extends React.Component  {
    onChecked= () => {
        const item = {...this.props};
        const { ToDoList, updateItem } = this.props;
        console.log(ToDoList)
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
                        <i className="fas fa-pencil-alt icon-edit"></i>
                        <i className="fas fa-trash-alt icon-edit"></i>
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
    updateItem
}

export default connect(mapStateToProps, mapDispatchToProps)(CaseList);