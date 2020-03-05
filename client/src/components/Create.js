import React from 'react';
import CreateCard from './CreateCard';
import WordField from './WordField';
import './Create.css';


class Create extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // State
            activeForm: "new",
            maxLibrarySize: 20
        }
        this.expandOption = this.expandOption.bind(this);
        this.postNewLibrary = this.postNewLibrary.bind(this);
    }

    expandOption(option) {
        console.log(option)
        this.setState({ activeForm: option })
    }

    postNewLibrary() {
        let url = "/libraries"
        let payload = {
            libraryName: "My dogs",
            authorName: "Mark Swinimer",
            creationDate: "03/5/2020",
            wordCount: 7,
            playCount: 0,
            wordList: [
                "Layla",
                "Rosco",
                "Ellie May",
                "Brady",
                "Buddy",
                "Helo",
                "Shadow",
                "Rosie"
            ]
        }

        let test = JSON.stringify(payload)
        console.log(test)
        fetch(url, { 
            method: 'post',
            body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log("Unable to create new library, error log: " + err)
        })
    }

    render() {


        return(
            <div className="Create">
                <h1>Create</h1>
                {/* <button onClick={this.postNewLibrary}>
                    TEST POST
                </button> */}
                <CreateCard
                    id="new"
                    name="New Library"
                    onClick={this.expandOption}

                />
                {this.state.activeForm === "new" ? <CreateForm librarySize={this.state.maxLibrarySize}/> : null}
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

class CreateForm extends React.Component {
    render() {
        let words = []
        for(let i = 0; i < this.props.librarySize; i++ ) {
            words.push(
                <WordField
                    id="Library Name"
                    name="libraryName"
                    type="text"
                    value="ok"
                />
            )
        }
        return(
            <div className="CreateForm">
                <InputField 
                    id="Library Name"
                    name="libraryName"
                    type="text"
                    value="ok"
                    // onChange
                />
                <InputField 
                    id="Author"
                    name="authorName"
                    type="text"
                    value="Mark Swinimer"
                    // onChange
                />
                <DropDownField
                    id="Library Size"
                    name="librarySize"
                    type="text"
                    value="Mark Swinimer"
                />
                <h1>Words</h1>
                {words}
            </div>
        )
    }
}

class InputField extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { props } = this
        return(
            <label>{props.id}
                <input
                    id={props.id}
                    name={props.name}
                    type='text'
                    // value={props.value}
                    // onChange={props.handleChange}
                />
            </label>
        )
    }
}

class DropDownField extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { props } = this
        return(
            <label>{props.id}
                <select id={props.id}
                    id={props.id}
                    name={props.name}
                    type='text'
                    // value={props.value}
                    // onChange={props.handleChange}
                >
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                </select>
            </label>
        )
    }
}
export default Create;