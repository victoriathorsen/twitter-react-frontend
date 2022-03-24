const initialState = {
    articles: []
}

export default function news(state = initialState, action){
    switch(action.type){
        case 'GET_NEWS':
            return {                
                ...state,
                articles: action.articles
            }
        default:
            return state
    }
} 