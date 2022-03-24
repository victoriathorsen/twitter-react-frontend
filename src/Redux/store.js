import { createStore, applyMiddleware } from 'redux';
import rootReducer from './Reducers/rootReducer';
import thunk from 'redux-thunk'

// import { getTweets } from './Actions/tweetActions'

const store = createStore (
        rootReducer, 
        applyMiddleware(thunk)
); 

export default store

    // store.dispatch(getTweets())