import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import "./header.css";

const Header = () =>{
    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 ">
                        <ul className="nav nav-pills justify-content-between">
                            <li className="nav-item">
                                <Link className="nav-link" to="/"><i className="fas fa-house-user home-icon"></i></Link>
                            </li>
                            <li className="nav-item logo nav-link">
                                To Do List
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/add"><i className="fas fa-plus add-icon"></i></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header;