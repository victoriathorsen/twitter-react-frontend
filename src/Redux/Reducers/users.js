
const initialState = {
    isLoggedIn: false,
    user: []
}

export default function users(state = initialState, action){
    switch(action.type){
        case 'SIGN_UP':
            return {                
                ...state,
                isLoggedIn: true,
                user: action.user
            }
        case 'LOG_IN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.user
            }
        default:
            return state
    }
} 