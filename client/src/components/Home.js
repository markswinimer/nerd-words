import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faPencilAlt, faSearch, faCommentAlt, faQuestionCircle } from '@fortawesome/free-solid-svg-icons'


class Home extends React.Component {
    render() {
        return(
            <div className="Home">
                <div className="popout-container">
                    <div className="popout">

                    </div>
                </div>
                
                <div className="text-container">
                    The Component Lifecycle
                    Each component has several “lifecycle methods” that you can override to run code at particular times in the process. You can use this lifecycle diagram as a cheat sheet. In the list below, commonly used lifecycle methods are marked as bold. The rest of them exist for relatively rare use cases.Mounting These methods are called in the following order when an instance of a component is being created and inserted into the DOM:  
                </div>
            </div>
        )
    }
}

export default Home;