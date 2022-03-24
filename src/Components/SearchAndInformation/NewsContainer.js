import React, {Component} from 'react'
import Article from './Article'


class NewsContainer extends Component {

    allArticles = () => {
        let articles = this.props.news.articles.slice(0,5)
        return articles.map((article, index) => <Article key={index+1} info={article} />)
    }

    // showFour = () => {
    //      let all = this.props.news.articles.map(article, index) 
    // }


    render(){
        if (this.props.news.articles.length < 1) {
            return (
                <React.Fragment>
                    <div className='AllNewsContainer'>
                        No News
                    </div>
                </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                    <div className='AllNewsContainer'>
                        <div className='newsContainer'>
                            <div className='newsRow'>
                                <div className= 'columnHeader'>
                                    <h2>
                                        What's happening
                                    </h2>
                                </div>
                            </div>
                            <div className ='newsRow'>
                                <div className='columnArticles'>
                                    {this.allArticles()} 
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            )
        }
    }
} export default NewsContainer