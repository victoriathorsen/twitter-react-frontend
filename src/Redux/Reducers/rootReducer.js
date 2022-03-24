import users from './users'
import tweets from './tweets'
import news from './news'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    users,
    tweets,
    news
})

export default rootReducer