import Tweet from './Tweet'
import React, {Component} from 'react'
// import { TwoMpTwoTone } from '@mui/icons-material'

class AllTweets extends Component {

    allTweetsMade = (allTweets, user) => {
        return allTweets.reverse().map( tweet => <Tweet key={tweet.id} info={tweet} loggedInUser={user}/> )
    }
    
    render(){
        return(
            <React.Fragment>
                <div>
                    {this.allTweetsMade(this.props.allTweets.tweets, this.props.user)}
                </div>
            </React.Fragment>
        )
    }
} 
export default AllTweets