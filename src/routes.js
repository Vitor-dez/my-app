import React from 'react';
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Home from './Container/Home'
import Users from './Container/Users';


function Routes(){
    return (
        <Router>
            <Route  path="/" Component={Home}/>
            <Route  path="/usuarios" Component={Users}/>
        </Router>

    )
}


export default Routes