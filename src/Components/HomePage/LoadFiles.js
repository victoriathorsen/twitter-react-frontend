import React, {Component} from "react";
import {connect} from 'react-redux'
import { getTweets } from '../../Redux/Actions/tweetActions'
import { getNews } from '../../Redux/Actions/newsActions'
import Home from './Home'

class LoadFiles extends Component {

    componentWillMount(){
        this.props.getTweets()
        this.props.getNews()
      }

    render(){
        return(
          <Home {...this.props}/>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    getTweets: () => dispatch(getTweets()),
    getNews: () => dispatch(getNews())
})

export default connect(null, mapDispatchToProps)(LoadFiles)