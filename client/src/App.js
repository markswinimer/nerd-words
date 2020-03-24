import React, { useState } from 'react';

import Home from './components/Home';
import Discover from './components/Discover';
import Create from './components/Create';
import Navbar from './components/Navbar'
// import Menu from './components/Menu/Menu'
import Play from './components/Play';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

import { Burger, Menu } from './components';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'


import './App.css';


const routes = [
  {
    path: '/',
    exact: true,
    currentPage: 'home',
    main: () => <Home />
  },
  {
    path: '/play',
    currentPage: 'play',
    main: () => <Play />
  },
  {
    path: '/create',
    currentPage: 'create',
    main: () => <Create />
  },
  {
    path: '/discover',
    currentPage: 'discover',
    main: () => <Discover />
  },
  {
    path: '/howto',
    currentPage: 'howto',
    main: () => <h1>How to play</h1>
  },
]

function App() {
  const [open, setOpen] = useState(false);

    return(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <div className='App'>
          <Navbar />

          <div>
              <Burger open={open} setOpen={setOpen}/>
          </div>

            <div className='Main'>
              {routes.map((route, index) => (
                <Route
                  key={route.path}
                  path={route.path}
                  exact={route.exact}
                  component={() => <Menu 
                      currentPage={route.currentPage} 
                      open={open} 
                    />}
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
      </ThemeProvider>

    )
}

export default App;
