import React from 'react';
import styled from 'styled-components';

import LibraryPreview from './LibraryPreview';

const StyledGameScreen = styled.div`

`

const DeckInfo = styled.div`
    display: flex;
    flex-direction: row;
`

const Indicator = styled.div`

`

export default class GameScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        //  BINDINGS
    }

    render() {
        return(
            <StyledGameScreen>
                <LibraryPreview library={this.props.gameData.library} />
                <DeckInfo>
                    <Indicator>Remaining</Indicator>
                    <Indicator>Discarded</Indicator>
                    <Indicator>View</Indicator>
                </DeckInfo>
            </StyledGameScreen>
        )
    }
}