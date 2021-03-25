import React from "react";
import { connect } from "react-redux";

class CaseList extends React.Component  {
    render(){
        return(      
                <li>
                    <div class="form-check"> <label class="form-check-label"> <input class="checkbox" type="checkbox"> For what reason would it be advisable.</input>  <i class="input-helper"></i></label> </div> <i class="remove mdi mdi-close-circle-outline"></i>
                </li>                   
        )
    }
}

export default CaseList;