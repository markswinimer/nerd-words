import React from 'react';
import Home from './components/Home';
import Discover from './components/Discover';
import Create from './components/Create';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router,
  Route
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
    main: () => <h1>Play</h1>
  },
  {
    path: '/create',
    sidebar: () => <Sidebar currentPage='create'/>,
    main: () => <Create />
  },
  {
    path: '/discover',
    sidebar: () => <Sidebar currentPage='discover'/>,
    main: () => <Discover />
  },
  {
    path: '/community',
    sidebar: () => <Sidebar currentPage='community'/>,
    main: () => <h1>Community</h1>
  },
  {
    path: '/howto',
    sidebar: () => <Sidebar currentPage='howto'/>,
    main: () => <h1>How to play</h1>
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
