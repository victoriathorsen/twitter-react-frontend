import React, {Component} from "react";
import AllTweets from './AllTweets'
import ComposeTweet from './Compose'
// import { getStepLabelUtilityClass } from "@mui/material";

const TweetsContainer = (props) => (
    <React.Fragment>
        <div className = 'MiddleDiv'>
            <div id= "TweetsContainer">
                <div className= "TweetColumn1" id='1'>
                    <ComposeTweet {...props} />
                </div>
                <div className= "TweetColumn3" id='3'>
                    <AllTweets allTweets = {props.tweets} user = {props.user} />
                </div>
            </div>
        </div>
    </React.Fragment>
)
export default TweetsContainer