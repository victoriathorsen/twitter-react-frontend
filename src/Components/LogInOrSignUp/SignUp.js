import React, {Component} from "react"
import logo from '../../Pictures/twitterlogo.png';
import GoogleLogin from 'react-google-login'
import { signUp } from '../../Redux/Actions/userActions'
import {connect} from 'react-redux'


class SignUp extends Component {

    signUpResponseGoogle = ( response ) => {
        let username = response.profileObj.email
        let password = response.profileObj.googleId
        let image = response.profileObj.imageUrl
        this.props.signUp(username, password, image)
        this.props.checkUserLoggedIn()
    }

    responseGoogle = ( response ) => {
        let username = response.profileObj.email
        let password = response.profileObj.googleId
        this.props.logIn(username, password)
        this.props.checkUserLoggedIn()
        
    }

    render() {
        return (
            <React.Fragment>
                <div id = 'SignIn'>
                    <div className="TwitterLogo">
                        <img src={logo} alt="My logo" />
                    </div>
                    <h1>
                        Happening
                    </h1>
                    <h1>
                        now
                    </h1>
                    <h2>
                        Join Twitter today.
                    </h2>
                    <GoogleLogin
                        clientId='538981758392-vg8if4p5uj2u9v1cnmdc5ke9tjvj1fk4.apps.googleusercontent.com'
                        buttonText='Sign up with Google' 
                        style={{marginTop: '100px'}}
                        onSuccess={this.signUpResponseGoogle}
                        onFailure={this.responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                    <div id = 'OrContainer'>
                        <div className = 'line'>
                            <p>
                                -----------------
                            </p>
                        </div>
                        <div id= 'or'>
                            <h4>
                                or
                            </h4>
                        </div>
                        <div className = 'line'>
                            <p>
                                -----------------
                            </p>
                        </div>
                    </div>
                    <p>
                        Sign up with phone or email
                    </p>
                    <p>
                        By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.
                    </p>
                    <h3>
                        Already have an account?
                    </h3>
                    <p>
                        Sign in
                    </p>
                    {/* <div>
                        <GoogleLogin
                            clientId='538981758392-vg8if4p5uj2u9v1cnmdc5ke9tjvj1fk4.apps.googleusercontent.com'
                            buttonText='Sign in with Google' 
                            style={{marginTop: '100px'}}
                            onSuccess={this.responseGoogle}
                            onFailure={this.responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                    </div> */}
                </div>
            </React.Fragment>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    signUp: (username, password, image) => dispatch(signUp(username, password, image)),
    // logIn: (username, password) => dispatch(logIn(username, password))
})

export default connect(null, mapDispatchToProps)(SignUp)

