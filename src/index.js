import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store";

import {
  BrowserRouter as Router, 
  Switch, 
  Route
} from "react-router-dom"
import "./index.css";

import Header from "./Components/Header/header";
import AddCase from "./Components/AddCase/addCase";
import List from "./Components/List/list";
import Search from "./Components/Search/search";
import NotFound from "./Components/NotFound/notFound";
import EditList from "./Components/EditList/editList";

class App extends Component{
  render(){
    return(
      <Provider store = {store}> 
        <Router>
          <Header/>
          <Search/>
          <Switch> 
            <Route path = "/" exact component = {List} />
            <Route path = "/add" exact component = {AddCase} />
            <Route path = "/edit" exact component = {EditList} />
            <Route path = "" exact component = {NotFound} /> 
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById("root"));


