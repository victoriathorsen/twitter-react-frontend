
export function postTweet(tweet, user) {
    return dispatch => {
        fetch('http://127.0.0.1:3000/tweets', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tweet: {
                    post: `${tweet.composedTweet}`,
                    user_id: `${user.user.id}`,
                    username: `${user.user.username}`,
                    image: `${user.user.image}`,
                }
            }, {withCredentials: true})
        })
        .then(resp => resp.json())
        .then(data => {
            dispatch({
                type: "ADD_TWEET",
                tweets: data
            })
        })
        .catch(error => {
            console.log(error)
        })
    }
}

export function getTweets() {
    return dispatch => {
        fetch(`http://127.0.0.1:3000/tweets`)
        .then(response => {
            return response.json()
        }).then(data => {
            dispatch({
                type: 'SET_TWEETS', 
                tweets: data
            })
        })
    }
}

export function deleteTweet(tweetId) {
    return dispatch => {
        fetch(`http://127.0.0.1:3000/tweets/${tweetId}`, {
            method: 'DELETE'
        })
        .then(() => {
            dispatch({
                type: 'REMOVE_TWEET',
                tweetId: tweetId
            })
            alert('tweet deleted')
        })
    }
}