import React, {Component} from "react";
import { postTweet } from '../../Redux/Actions/tweetActions';
import {connect} from'react-redux';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

class ComposeTweet extends Component {
    constructor(props){
        super(props)

        this.state = {
            composedTweet: ""
        }
    }

    onChangeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    clickHandler = (e) => {
        e.preventDefault()
        this.setState({
            composedTweet: document.getElementById('composedTweet').value
        })
        document.getElementById('composedTweet').value = ''
        this.props.postTweet(this.state, this.props.user)
    }

    render(){
        return (
            <React.Fragment>
                <div id='HomeAndInputContainer'>
                    <div className='topDiv'>
                        <div className='homeDiv'>
                            <h3 >
                                Home
                            </h3>
                        </div>
                    </div>
                    <div className='middleDiv'>
                        <div className = 'picDivCompose'>
                            <img className='profilePicture' alt='profile' src={this.props.user.user.image}/>
                        </div>
                        <div id= 'tweetInput'>
                            <div id='tweetBoxForm'>
                                <input type="tweetText" id="composedTweet" placeholder="What's happening?" onChange={this.onChangeHandler} autoComplete="off"></input>
                            </div>
                            <div id='btnIconsDiv'>
                                <div className='iconDiv'>
                                    <InsertPhotoOutlinedIcon/>
                                    <GifBoxOutlinedIcon/>
                                    <SentimentSatisfiedOutlinedIcon/>
                                    <LocationOnOutlinedIcon/>
                                </div>
                                <div id='btnDiv'>
                                    <button disabled={!this.state.composedTweet} type='submit' value="tweet" id ='submitTweetBtn' onClick = {this.clickHandler}>Tweet</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    postTweet: (newState, props) => dispatch(postTweet(newState, props))
})

export default connect(null, mapDispatchToProps)(ComposeTweet)