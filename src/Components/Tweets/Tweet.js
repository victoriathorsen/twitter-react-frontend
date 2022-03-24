import React, {Component} from "react";
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';
import LoopIcon from '@mui/icons-material/Loop';
import DropdownBtn from './DropdownBtn'

class Tweet extends Component {

    render(){
        let username = this.props.info.username.split('@')[0]
        return (
            <React.Fragment>
                <div className="EachTweet">
                    <div id='tweetContainer'>
                        <div className='rightTweetDiv' id='R1'>
                            <div className='picDiv'>
                                <img src= {this.props.info.image} alt='profile' className='profilePicture'/>
                            </div>
                        </div>
                        <div className='leftTweetDiv' id='L1'>
                            <div className='topLeftDiv'>
                                <div className="usernameInfo">
                                    <h5 className='usernameTyped'>
                                        {username}
                                    </h5>
                                </div>
                                <div className= 'deleteModal'>
                                    <DropdownBtn tweetId={this.props.info.id} tweetUser = {this.props.info.username} currentUser = {this.props.loggedInUser} />
                                </div>
                            </div>
                            <div className='bottomLeftDiv'>
                                <div className='tweetInfo'>
                                    <h5>
                                        {this.props.info.post}
                                    </h5>
                                </div>
                            </div>
                            <div className='interactiveContainer'>
                                <div className='iconContainer'>
                                    <div className='interactBtn'>
                                        <ChatBubbleOutlineIcon />
                                    </div>
                                    <div className='interactBtn'>
                                        <LoopIcon />
                                    </div>
                                    <div className='interactBtn'>
                                        <FavoriteBorderIcon />
                                    </div>
                                    <div className='interactBtn'>
                                        <IosShareIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
} export default Tweet