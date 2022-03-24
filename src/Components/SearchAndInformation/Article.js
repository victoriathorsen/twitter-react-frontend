import React, {Component} from 'react'

class Article extends Component {

    render(){
        return(
            <div className = 'pictureColumn'>
                <div className='ColumnTitle'>
                    <h4>
                        {this.props.info.title}
                    </h4>
                </div>
                <div className='ColumnPicture'>
                    <img src={this.props.info.urlToImage} alt='news' className='newsPicture' />
                </div>
            </div>
        )
    }
} export default Article