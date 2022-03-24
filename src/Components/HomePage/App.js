import React, {Component} from "react";
import './App.css';
import {connect} from 'react-redux'
import LoadFiles from './LoadFiles'


class App extends Component {
  
  render(){
    return (
      <LoadFiles {...this.props} />        
    )
  }

}; 
        
const mapStateToProps = (state) => {
  return { 
    user: state.users,
    tweets: state.tweets,
    news: state.news
  }
}

export default connect(mapStateToProps, null)(App);



