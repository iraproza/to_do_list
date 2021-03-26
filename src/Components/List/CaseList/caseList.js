import React from "react";
// import { connect } from "react-redux";
import "./caseList.css";

class CaseList extends React.Component  {
    render(){
        return(      
                <li className = "item-list">
                    <div className="form-check"> 
                        <label className="form-check-label description"> 
                            <input className="checkbox" type="checkbox"/>  
                            <i className="input-helper"></i>
                            How to do
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

export default CaseList;