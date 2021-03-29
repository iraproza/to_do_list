import React, {Fragment, useEffect} from "react";
import {connect} from "react-redux";
import "./search.css";
import {searchItem} from "../../Actions/ListActions"

const Search = ({ searchItem }) => {
    useEffect(()=>{
        return () => {
            searchItem('')
        }
    }, []);

    const onSearch = (event) => {
        searchItem(event.target.value)
    }
    
    return (
        <Fragment>
            <div className="container search-container">
                <br/>
                <div className="row justify-content-center">
                    <div className="col-7 col-md-7 col-lg-7">
                        <div className="card card-sm">
                            <div className="card-body row no-gutters align-items-center">
                                <input className="search-input form-control form-control-lg form-control-borderless" type="search" placeholder="Search..." onChange = { onSearch }/>
                                <i className="fas fa-search icon-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Fragment>
    )
}

const mapDispatchToProps = {
    searchItem
}
export default connect(null, mapDispatchToProps)(Search);