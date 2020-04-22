import React, { useState } from 'react';

import Home from './components/Home/Home';
import Discover from './components/Discover/Discover';

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

function App() {
  const [open, setOpen] = useState(false);

    return(
      <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <Router>
          <div className='App'>

          <Navbar />

          <div>
            <Burger open={open} setOpen={setOpen}/>
          </div>

          <div className="Main">
              <Menu
                open={open} 
                setOpen={setOpen} 
              />
              <div className="Container">
                <Switch>
                  <Route exact key='/play' path='/play'>
                    <Play/>
                  </Route>
                  <Route exact key='/create' path='/create'>
                    <Create/>
                  </Route>
                    <Route key='/discover' path='/discover' children={<Discover/>}>
                  </Route>
                  <Route exact key='/library/:id' path='/library/:id'>
                    <ViewLibrary/>
                  </Route>
                  <Route exact key='/' path='/'>
                    <Home />
                  </Route>
                </Switch>
                </div>
              </div>
            </div>
        </Router>
      </ThemeProvider>
    )
}

export default App;
