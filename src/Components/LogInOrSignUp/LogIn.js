import React, {Component} from "react"
import GoogleLogin from 'react-google-login'
import {connect} from 'react-redux'
import { logIn } from '../../Redux/Actions/userActions'


class LogIn extends Component {
    successfulGoogle = ( response ) => {
        let username = response.profileObj.email
        let password = response.profileObj.googleId
        this.props.logIn(username, password)
        this.props.checkUserLoggedIn()
    }

    failureGoogle = ( response ) => {
        debugger
    }

    render(){
        return(
            <React.Fragment>
                <h1>
                    Sign in to Twitter
                </h1>
                <GoogleLogin
                    clientId='538981758392-vg8if4p5uj2u9v1cnmdc5ke9tjvj1fk4.apps.googleusercontent.com'
                    buttonText='Sign in with Google' 
                    style={{marginTop: '100px'}}
                    onSuccess={this.successfulGoogle}
                    onFailure={this.failureGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </React.Fragment>
        )
    }
} 
const mapDispatchToProps = dispatch => ({
    logIn: (username, password) => dispatch(logIn(username, password))
})

export default connect(null, mapDispatchToProps)(LogIn)