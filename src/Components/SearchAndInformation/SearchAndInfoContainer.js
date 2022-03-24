import React, {Component} from "react";
import NewsContainer from './NewsContainer'

class SearchAndInfoContainer extends Component {
    render(){
        // debugger
        return(
            <React.Fragment>
                <div className = 'RightDiv'>
                    <NewsContainer {...this.props} />
                </div>
            </React.Fragment>
        )

    }
} export default SearchAndInfoContainer