

import React from 'react';
import { Container, Grid } from '@material-ui/core';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Resume from './Pages/Resume/Resume';
import Portfolio from './Pages/Portfolio/Portfolio';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';

function App() {
  return (
   
      <Container className='top_60'>
       <Grid container spacing={7}>
         <Grid item 
         xs={12} 
         sm={12}
         md={4} 
         lg={3}>
         <Profile /> 
         </Grid>
         <Grid item xs >
          
          <Router>
          <Header />
          <div className='main_content'>
          <Switch>
            <Route path='/Portfolio'>  <Portfolio /> </Route>
            <Route path='/'> <Resume /> </Route>
            </Switch>
          </div>
          </Router>
          <Footer />
         </Grid>
       </Grid>
      </Container>
 
  );
}

export default App;
