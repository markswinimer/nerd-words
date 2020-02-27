import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar'
import Leftbar from './components/Leftbar'
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
    sidebar: () => <Leftbar currentPage='home'/>,
    main: () => <Home />
  },
  {
    path: '/play',
    sidebar: () => <Leftbar currentPage='play'/>,
    main: () => <h2>Play</h2>
  },
  {
    path: '/discover',
    sidebar: () => <Leftbar currentPage='discover'/>,
    main: () => <h2>Discover</h2>
  },
  {
    path: '/community',
    sidebar: () => <Leftbar currentPage='community'/>,
    main: () => <h2>Community</h2>
  },
  {
    path: '/howto',
    sidebar: () => <Leftbar currentPage='howto'/>,
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
      </Router>
    )
  }
}

export default App;
