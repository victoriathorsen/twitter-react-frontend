import React, {Component} from "react";
import MainContainer from './MainContainer'
import {BrowserRouter as Router, 
    Route,
    Switch,
  } from 'react-router-dom'

const UserLoggedIn = (props) => (
            <Router>
                <Switch>
                    <Route path='/'>
                        <MainContainer {...props} />  
                    </Route>
                </Switch>
            </Router>
)
export default UserLoggedIn
