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
        this.postNewLibrary = this.postNewLibrary.bind(this);
    }

    expandOption(option) {
        console.log(option)
        this.setState({ activeForm: option })
    }

    postNewLibrary () {


        // let url = "/libraries"
        let url = "/libraries"
        let payload = {
            "libraryName": "My dogs",
            "authorName": "Mark Swinimer",
            "creationDate": "03/4/2020",
            "wordCount": 444,
            "playCount": 0,
            "words": [
                "buddy",
                "layla",
                "rosco",
                "shadow",
                "ellie may",
            ]
        }

        const options = {
            url: url,
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            },
            data: payload
        };

        axios(options)
            .then(response => {
                console.log(response.status);
            })
        }
    render() {
        return(
            <div className="Create">
                <h1>Create</h1>
                <button onClick={this.postNewLibrary}>
                    TEST POST
                </button>
                <CreateCard
                    id="new"
                    name="New Library"
                    onClick={this.expandOption}

                />
                {this.state.activeForm === "new" ? <CreateForm/> : null}
                <CreateCard
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
                {this.state.activeForm === "favorites" ? <CreateForm /> : null}

                
            </div>
        )
    }
}

export default Create;