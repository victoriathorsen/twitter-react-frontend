import React from "react";
import {connect} from'react-redux'
import { deleteTweet } from '../../Redux/Actions/tweetActions'

class Modal extends React.Component {

    deleteThisTweet = (e, tweetId) => {
        e.stopPropagation()
        this.props.deleteTweet(tweetId)
    }

  render() {
      let sameUser = Boolean(this.props.currentUser.user.username === this.props.tweetUser)
      if (!this.props.show){
          return null;
      } else {
          if (!sameUser) {
              return null
          } else {
              return(
                <div>
                    <button onClick={e => this.deleteThisTweet(e, this.props.tweetId)}>Delete</button>
                </div>
              )
          }
      }
  }
}
const mapDispatchToProps = dispatch => ({
    deleteTweet: (tweetId) => dispatch(deleteTweet(tweetId))
})

export default connect(null, mapDispatchToProps)(Modal)