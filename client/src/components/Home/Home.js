import React from 'react';
import './Home.css';

class Home extends React.Component {
    render() {
        return(
            <div className="Home">
                {/* <div className="popout-container">
                    <div className="popout">

                    </div>
                </div> */}

                <div className="text-container">
                    <h1>Welcome to Nerd Words</h1>
                    <p>Welcome to <strong>Nerd Words</strong>, the 'pictionary' and other word game deck builder.</p>
                    <p>This application was designed with nerds and genre enthusiasts in mind. Have you and your friends ever spent hours discussing which game of thrones character was the most devisive? Which final fantasy character has the pointiest hair? 
                    </p>
                    <p>...do your friends also like word games like pictionary, taboo, and  other similar games?</p>

                    <p><strong>Nerd Words</strong> is <strong>the </strong><strike>only</strike> word library creation and sharing platform for you.</p>
                    <hr />
                    <h2>Top Libraries of the month: February</h2>
                    <h4>February 29, 2020</h4>
                    <p>Here you will find a brief write-up of the best libraries of the mont. This could include site favorite and curated libraries. It will also highlight the top uses and/or top favorited libraries.</p>
                    <p>The following information is filler/example text. Information here could be generated from a function call to the api. It can also be manually input.</p>
                    <ul>
                        <li>Game of Thrones</li>
                        <li>Democratic Primary Candidates</li>
                        <li>Films of 2019</li>
                        <li>Final Fantasy VII appreciation</li>
                        <li>My favorite dog breeds</li>
                    </ul>

                    <p>Continue to create and use your favorite libraries and they may end up here.</p>
                    <hr />
                    <h2>Top Libraries of the month: January</h2>
                    <h4>February 3, 2020</h4>
                    <p>Here you will find a brief write-up of the best libraries of the mont. This could include site favorite and curated libraries. It will also highlight the top uses and/or top favorited libraries.</p>
                    <p>The following information is filler/example text. Information here could be generated from a function call to the api. It can also be manually input.</p>
                    <ul>
                        <li>Game of Thrones</li>
                        <li>Democratic Primary Candidates</li>
                        <li>Films of 2019</li>
                        <li>Final Fantasy VII appreciation</li>
                        <li>My favorite dog breeds</li>
                    </ul>

                    <p>Continue to create and use your favorite libraries and they may end up here.</p>
                </div>
            </div>
        )
    }
}

export default Home;