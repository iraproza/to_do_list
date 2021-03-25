import React from "react";
// import { connect } from "react-redux";
import "./caseList.css";

class CaseList extends React.Component  {
    render(){
        return(      
                <li>
                    <div className="form-check"> 
                        <label className="form-check-label"> 
                            <input className="checkbox" type="checkbox"/>  
                            <i className="input-helper"></i>
                            <label >How to do</label>
                        </label> 
                    </div>
                    <i className="fas fa-pencil-alt"></i>
                    <i className="fas fa-trash-alt"></i>
                </li>                   
        )
    }
}

export default CaseList;