import React from 'react';
import Home from './components/Home';
import Discover from './components/Discover';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <Sidebar currentPage='home'/>,
    main: () => <Home />
  },
  {
    path: '/play',
    sidebar: () => <Sidebar currentPage='play'/>,
    main: () => <h2>Play</h2>
  },
  {
    path: '/discover',
    sidebar: () => <Sidebar currentPage='discover'/>,
    main: () => <Discover />
  },
  {
    path: '/community',
    sidebar: () => <Sidebar currentPage='community'/>,
    main: () => <h2>Community</h2>
  },
  {
    path: '/howto',
    sidebar: () => <Sidebar currentPage='howto'/>,
    main: () => <h2>How to play</h2>
  },
]

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // state
    }
  }

  render() {
    return(
      <Router>
        <div className='App'>
        <Navbar />
          <div className='Main'>
            {routes.map((route, index) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
            <div className="Container">
            {routes.map((route, index) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
            </div>
            </div>
          </div>
      </Router>
    )
  }
}

export default App;
