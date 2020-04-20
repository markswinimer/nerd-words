import React, { useState } from 'react';

import Home from './components/Home/Home';
import Discover from './components/Discover/Discover';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './global';
import { theme } from './theme';

import { Burger, Menu } from './components';
import { Create } from './components';
import { Play } from './components';
import { Navbar } from './components';
import ViewLibrary from './components/ViewLibrary/ViewLibrary';


import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    currentPage: '/',
    main: ({ match }) => <Home match={match}/>
  },
  {
    path: '/play',
    currentPage: '/play',
    main: ({ match }) => <Play match={match}/>
  },
  {
    path: '/create',
    currentPage: '/create',
    main: ({ match }) => <Create match={match}/>
  },
  {
    path: '/library/:id',
    currentPage: '/create',
    main: ({ match }) => <ViewLibrary match={match}/>
  },
  {
    path: '/discover',
    currentPage: '/discover',
    main: ({ match }) => <Discover match={match}/>
  },
  {
    path: '/howto',
    currentPage: '/howto',
    main: ({ match }) => <h1>How to play</h1>
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
                      setOpen={setOpen} 
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
