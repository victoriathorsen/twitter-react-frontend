import React, {Component} from "react";
import {BrowserRouter as Router, 
    Route,
    Switch,
    Link
} from 'react-router-dom'
import SignUp from '../LogInOrSignUp/SignUp'
import LogIn from '../LogInOrSignUp/LogIn'

class NoUser extends Component {
    render() {
            return (
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to = '/'> Home </Link>
                            </li>
                            <li>
                                <Link to = '/signup'> Sign Up </Link>
                            </li>
                            <li>
                                <Link to = '/login'> Log In </Link>
                            </li>
                        </ul>
                    </nav>
        
                    <Switch>
                        <Route path = '/signup'>
                            <SignUp checkUserLoggedIn={this.checkUserLoggedIn}/>
                        </Route>
                        <Route path = '/login'>
                            <LogIn {...this.props} checkUserLoggedIn={this.checkUserLoggedIn} />
                        </Route>
                    </Switch>
                </Router>

        )}
} export default NoUser