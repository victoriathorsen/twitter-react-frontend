import React, {Component} from "react";
import SignUp from '../LogInOrSignUp/SignUp'
import LogIn from '../LogInOrSignUp/LogIn'
import UserLoggedIn from './UserLoggedIn'
// import { getTweets } from '../../Redux/Actions/tweetActions'
// import { getNews } from '../../Redux/Actions/newsActions'
// import {connect} from 'react-redux'
import {BrowserRouter as Router, 
    Route,
    Switch,
    Link,
    Redirect
  } from 'react-router-dom'


class Home extends Component {
    constructor(){
        super()
        this.state = {
          isLoggedIn: false
        }
      }
    
    checkUserLoggedIn = () => {
        if (localStorage.jwt !== 'undefined') {
            this.setState({
                isLoggedIn: true
            })
        } return false
    }

    render() {
        if (this.state.isLoggedIn === false) {
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
        )} else {
            return (
                <Router>
                    {/* <Redirect to = '/'> */}
                    <Switch>
                        <Route path='/'>
                            <UserLoggedIn {...this.props} />   
                        </Route>
                    </Switch>

                    {/* </Redirect> */}
                </Router>
        )}
    }
} export default Home;