
const initialState = {
    tweets: {}
}

const tweet = (state = initialState, action) => {
    switch (action.type){
        case 'SET_TWEETS':
            return {
                ...state,
                tweets: action.tweets
            }
        case 'ADD_TWEET':
            console.log('adding ', action.tweets)
            return { 
                ...state,
                tweets: state.tweets.concat(action.tweets) 
            }
        case 'REMOVE_TWEET':
            return {
                ...state,
                tweets: state.tweets.filter(tweet => tweet.id !== action.tweetId)
            }

    default:
        return state
    }
} 
export default tweet;