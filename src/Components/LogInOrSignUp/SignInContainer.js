import React, {Component} from 'react'
import SignUp from './SignUp'
import LogIn from './LogIn'
import {BrowserRouter as Router, 
    Route,
    Switch,
    Link
  } from 'react-router-dom'

class SignInContainer extends Component {

    logInUser = () => {
        debugger
    }

    render(){
        return (
            <Router>
                <nav>
                    <ul>
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
        )
    }
} export default SignInContainer