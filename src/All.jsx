import React from 'react'; 
import  Cricket from './Cricket';
import Twenty from './Twenty';
import Firstclass from './Firstclass';
 import Others from './Others';
import Navbar from './components/Navbar';
import { Redirect, Route, Switch } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const All=()=>{
    return(
        <>
        <Navbar/>
    <Switch>
           <Route exact path="/" component={Cricket}/>
           <Route exact path="/twenty" component={Twenty}/>
           <Route exact path="/firstclass" component={Firstclass}/>   
           <Route exact path="/others" component={Others}/>           
           <Redirect to="/" />
   
  </Switch>
    </>);
};
export default All;