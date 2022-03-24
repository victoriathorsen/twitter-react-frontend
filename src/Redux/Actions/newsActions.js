

    export function getNews(){
        return dispatch => {
            fetch('https://newsapi.org/v2/everything?q=keyword&apiKey=987c9a607ca74d8d8204f2616ee5dba0')
              .then(response => response.json())
              .then((data) => {
                dispatch({
                    type: 'GET_NEWS', 
                    articles: data.articles
                })
            })  
        }
    }