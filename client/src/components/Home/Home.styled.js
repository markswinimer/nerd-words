import styled from 'styled-components';

export const StyledHome = styled.div`

`

export const Header = styled.div`
    max-width: 100%;
    height: 75px;
    background-color: ${({ theme }) => theme.primaryDark};
    color: white;
    font-family: "Roboto Condensed";
    font-size: 40px;
    font-weight: 300;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 5px;
    margin-bottom: .5em;

    .icon {
        margin: 0 .35em;
    }

    div {

    }
`

export const Section = styled.section`
    margin-bottom: 1.5em;

    p {
        margin-top: .5em;    
        font-family: "Roboto Condensed";
    }
`

export const BoxSection = styled(Section)`
    border: 1px solid silver;
    border-radius: 5px;
    padding: 1em 1em;

    background-color: #F5f5f5;
`