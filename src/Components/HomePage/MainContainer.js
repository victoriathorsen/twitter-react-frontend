import React, {Component} from "react";
import NavigationContainer from '../Navigation/NavigationContainer'
import TweetsContainer from '../Tweets/TweetsContainer'
import SearchAndInfoContainer from '../SearchAndInformation/SearchAndInfoContainer'


const MainContainer = (props) => (
            <React.Fragment>
                <div id="AppContainer" >
                    <div className="Column" id='1'>
                        <NavigationContainer />
                    </div>
                    <div className="Column" id='2'>
                        <TweetsContainer {...props} />
                    </div>
                    <div className="Column" id='3'>
                        <SearchAndInfoContainer {...props} />
                    </div>
                </div>
            </React.Fragment>
);

export default MainContainer