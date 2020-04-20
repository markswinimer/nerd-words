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
  Route, Switch
} from 'react-router-dom'

const routes = [
  {
    path: '/',
    exact: true,
    currentPage: '/',
    main: () => <Home />
  },
  {
    path: '/play',
    currentPage: '/play',
    main: () => <Play />
  },
  {
    path: '/create',
    currentPage: '/create',
    main: () => <Create />
  },
  {
    path: '/library/:libraryId',
    currentPage: '/library',
    main: <ViewLibrary />
  },
  {
    path: '/discover',
    currentPage: '/discover',
    main: () => <Discover />
  },
  {
    path: '/howto',
    currentPage: '/howto',
    main: () => <h1>How to play</h1>
  },
]


function App() {
  const [open, setOpen] = useState(false);

    return(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Switch>
          <div className='App'>
          <Navbar />

          <div>
              <Burger open={open} setOpen={setOpen}/>
          </div>

          <div className="Main">
              {/* <Menu
                // currentPage={}
                open={open}
                setOpen={setOpen}
              /> */}
            <div className="Container">
              <Route exact path="/library/:id">
                  <Menu
                    // currentPage={}
                    open={open}
                    setOpen={setOpen}
                  />
                <ViewLibrary />
              </Route>

              <Route exact path="/library">
                <ViewLibrary />
              </Route>

              <Route exact path="/create">
                <Create />
              </Route>

              <Route exact path="/play">
                <Play />
              </Route>

              <Route exact path="/discover">
                <Discover />
              </Route>

              <Route exact path="/">
                <Home />
              </Route>

              {/*     path: '/library/:libraryId',
    currentPage: '/library',
    main: <ViewLibrary />
  }, */}
      </div>
          </div>
{/*           
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
                </div> */}
              </div>
        </Switch>
      </ThemeProvider>

    )
}

export default App;
