import styled from 'styled-components'
import { Label } from '../../global';

export const StyledViewLibrary = styled.div`
    display: flex;
    flex-direction: column;
`
export const AddWordsButton = styled.button`
    min-width: 200px;
    height: 40px;
    margin-left: 2em;
    cursor: pointer;
    margin-left: auto;
    font-weight: 400;
`
export const AddLabel = styled(Label)`
    flex-direction: row;
    height: 70px;
    align-items: center;
`
export const Container = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 0em 1em 2em;
    border-bottom: 1px solid silver;

    h1 {
        margin-top: .5em;
        /* border: 1px solid white; */
    }
    h2 {
        margin-top: 1em;
    }

`

export const DescriptionField = styled(Container)`
    flex-direction: column;

    div {
        display: flex;
        flex-direction: row;
    }
`

export const Indicator = styled.div`
    height: 30px;
    width: 30px;
    margin-left: 1.25em;
    /* background-color: ${props => props.active ? "green" : "gray"}; */
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: .95em 1em;
    color: ${props => props.active ? "green" : "gray"};
    border: 4px solid ${props => props.active ? "green" : "gray"};
    border-radius: 10px;
`

export const DetailsField = styled(Container)`
    flex-direction: column;
    border-bottom: none;
    padding: 0 0em 1em 2em;
    
    /* display: ${props => props.active ? "none" : "inherit"}; */
    
    transition: visibility .1s, opacity .1s linear;
    transition: .1s ease-in ;
    
    height: ${props => props.active ? "0" : "100%"};
    padding-bottom: ${props => props.active ? "0" : "1em"};
    visibility: ${props => props.active ? "hidden" : "visible"};
    opacity: ${props => props.active ? 0 : 1};
}
    div {
        display: flex;
        flex-direction: row;
    }
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    .column { 
        display: flex;
        flex-direction: column;
        flex: 1;
    }
    .authorName {
        align-items: baseline;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`

export const Detail = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 1em;

    h4 {
        color: ${({ theme }) => theme.primaryDark};
        margin-right: 1em;
        /* font-size: 1em; */
        margin: none;
    }

    .icon {
        color: ${({ theme }) => theme.primaryDark};
        font-size: 1.5em;
        margin-right: 1em;
    }
`

export const LibraryInformation = styled.div`
    border: 1px solid silver;
`
export const StyledAddWordsForm = styled.div`
    margin-top: 2em;
   
`

export const WordInput = styled.input`
    border: 1px solid silver;
    padding: 1em;
`
export const WordForm = styled.form`
    padding-top: 1em;
    border-left: 1px solid #f5f5f5;
    margin-left: 4em;
    padding: 1em;
    background-color: #f3f3f3;
    display: ${props => !props.hidden ? "none" : "flex"};
    flex-direction: row;
    align-items: center;

    h3 { 
        margin-right: 1em;
    }
`
export const NameLabel = styled(Label)`
    flex-direction: row;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;

    .icon {
        height: 100%;
        font-size: 2em;
        color: ${({ theme }) => theme.primaryDark};
    }
    h2 {
        margin-top: 0;
        margin-right: 1em;
    }

    :hover {
            color: white;
            background-color: ${({ theme }) => theme.primaryDark};
        .icon {
                color: white;
            }
    }

`

export const WordListContainer = styled.div`
    margin-top: 2em;
    border: 1px solid silver;
    max-height: 30em;
`
export const StyledWordList = styled.div`
    margin-top: 2em;
    border: 1px solid silver;
    max-height: 30em;
`

export const Toggle = styled.div`
    display: ${props => props.active ? "flex" : "none" };
    cursor: pointer;
`  
export const WordContainer = styled.form`
    border-bottom: 1px solid silver;
    display: flex;
    flex-direction: row;
    align-items: center;
    
    h2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 1.25em;
        font-weight: normal;
        width: 300px;
        min-height: 2em;
        padding: 0 1.5em;
    }   

    .icon { 
        margin-left: 1em;
    }
`

export const WordList = styled.div`
    display: flex;
    flex-direction: column;
    overflow: scroll;
    max-height: 15em;
`
export const StyledWordField = styled.input`
    min-height: 2em;
    padding: 0 1.5em;
    border: none;
    width: 300px;
    border: ${props => props.editable ? "1px solid red" : "none" };

    :last-child {
        border-bottom: none;
    }
`
export const ScrollBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 2.5em;
    border-bottom: 1px solid silver;

    :last-child {
        border: none;
        border-top: 1px solid silver
    }
`

export const StyledEditableInput = styled.input`
        margin-top: .5em;
        font-size: 2em;
        font-weight: bold;
        font-family: "Roboto";
        height: auto;
        border-bottom: 2px solid red;
`
export const EditableParagraph = styled(StyledEditableInput)`
        font-size: 1em;
        font-weight: normal;
        font-family: "Roboto";
        height: auto;
        border-bottom: 2px solid red;
`

export const StyledEditToggle = styled.div`
        font-size: 1.3em;
        color: ${({ theme }) => theme.primaryTextColor};
        margin-left: auto;
        cursor: pointer;
        position: relative;
        right: -.5em;

        .save {
         font-size: 1.2em;
         color: #32cd32;
        }
`


export const StartLabel = styled(Label)`
    flex-direction: row;
    align-items: center;
`

export const StartButton = styled.button`
    flex: 1;
    display: flex;
    justify-content: center;
    /* border-radius: 5px; */
    color: white;
    background-color: #c73636; 
    padding: .2em 0;
    font-family: "Roboto Condensed";
    font-weight: 300;
    width: 100%;
    margin: 0;
    margin-left: 2em;
    text-align: center;

`

export const Error = styled.div`
    margin-left: 1em;
    color: red;
`
