import React from 'react';
import CreateCard from './CreateCard';
import CreateForm from './CreateForm';
import axios from 'axios'
import './Create.css';


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // State
            activeForm: "new",
            maxLibrarySize: 20,
            newLibrary: {
                libraryName: undefined,
                authorName: undefined,
                wordLibrary: []
            }
        }
        this.expandOption = this.expandOption.bind(this);
    }

    expandOption(option) {
        console.log(option)
        this.setState({ activeForm: option })
    }

    render() {
        return(
            <div className="Create">
                <h1>Create</h1>
                <p>Creating new word libraries is easy. Follow these steps to start making one right now!</p>
{/* 
                <div className="Create-options">
                    <div>Create New Library</div>
                    <div className="unselected">Edit Existing Library</div>
                </div> */}

                {/* <CreateCard
                    id="new"
                    name="New Library"
                    onClick={this.expandOption}

                /> */}
                {this.state.activeForm === "new" ? <CreateForm/> : null}
                {/* <CreateCard
                    id="manage"
                    name="Edit and Manage My Libraries"
                    onClick={this.expandOption}

                />
                {this.state.activeForm === "manage" ? <CreateForm /> : null}
                <CreateCard
                    id="favorites"
                    name="View My Favorites"
                    onClick={this.expandOption}

                />
                {this.state.activeForm === "favorites" ? <CreateForm /> : null} */}

                
            </div>
        )
    }
}

export default Create;