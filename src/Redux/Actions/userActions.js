

export function signUp(username, password, image) {
    return dispatch => {
        fetch('http://127.0.0.1:3000/registrations', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: `${username}`,
                    password: `${password}`,
                    image: `${image}`
                }
            }, { withCredentials: true})
        })
        .then(response => response.json())
        .then(data => {
            debugger
            localStorage.setItem("jwt", data.jwt);
            dispatch({
                type: 'SIGN_UP',
                isLoggedIn: data.isLoggedIn,
                user: data.user
            })
        })
        .catch(error => {
        console.log(error)
        })
    }
}

export function logIn(username, password) {
    return dispatch => {
        fetch('http://127.0.0.1:3000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: `${username}`,
                    password: `${password}`
                }
            }, { withCredentials: true})
        })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem("jwt", data.jwt);
            dispatch({
                type: 'LOG_IN',
                isLoggedIn: data.isLoggedIn,
                user: data.user
            })
        })
        .catch(error => {
        console.log(error)
        })
    }
}