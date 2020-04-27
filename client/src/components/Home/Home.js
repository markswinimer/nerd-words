import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown, faGlasses } from '@fortawesome/free-solid-svg-icons'

import { StyledHome, Header, Logo, Section, BoxSection } from './Home.styled';

class Home extends React.Component {
    render() {
        return(
            <StyledHome>
                {/* <div className="popout-container">
                    <div className="popout">

                    </div>
                </div> */}
                <Header>
                    Nerd
                    <FontAwesomeIcon className="icon" icon={faGlasses} />
                    Words
                </Header>
                <Section>
                    <h1>Welcome to Nerd Words</h1>
                    <p>This application is designed to replace a physical deck of cards in games like pictionary and taboo.
                    </p>
                    <p>...do your friends also like word games like pictionary, taboo, and  other similar games?</p>
                    <p><strong>Nerd Words</strong> is <strong>the </strong><strike>only</strike> word library creation and sharing platform for you.</p>
                </Section>

                <BoxSection>
                    <h3>Getting Started</h3>
                    <p>This application is designed to replace a physical deck of cards in games like pictionary and taboo. You can create your own word libraries or use others. You can then edit and play games with them. Use the navigation on the left to utilize the different features.
                    </p>
                    <p><strong>Discover: </strong>Search and check out other word libraries to see what you might like and how other people used the application.</p>
                    <p><strong>Create: </strong> Make your own word libraries and edit them to add more words.</p>
                    <p><strong>Play: </strong>Use word Libraries you've created or favorited to create a deck of cards to draw from.</p>
                </BoxSection>
               
                <Section>
                    <h2>Top Libraries of the month: January</h2>
                    <h3>February 3, 2020</h3>
                    <p>Here you will find a brief write-up of the best libraries of the mont. This could include site favorite and curated libraries. It will also highlight the top uses and/or top favorited libraries.</p>
                    <p>The following information is filler/example text. Information here could be generated from a function call to the api. It can also be manually input.</p>
                    <ul>
                        <li>Game of Thrones</li>
                        <li>Democratic Primary Candidates</li>
                        <li>Films of 2019</li>
                        <li>Final Fantasy VII appreciation</li>
                        <li>My favorite dog breeds</li>
                    </ul>
                </Section>
            </StyledHome>
        )
    }
}

export default Home;