import React, {Component} from 'react';
import Modal from './Modal'

class DropdownBtn extends Component {
    state = {
        show: false
    }

    toggleList = (e) => {
       this.setState(prevState => ({
           show: !prevState.show
       }))
    }

    render(){
        return (
            <React.Fragment>
                <div className= 'dots' onClick = {e => {this.toggleList(e)}}>...</div>
                <Modal tweetId={this.props.tweetId} currentUser = {this.props.currentUser} tweetUser = {this.props.tweetUser} show={this.state.show} />
            </React.Fragment>
        )
    }

} export default DropdownBtn