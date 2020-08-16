import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ContextProvider } from './context/Context'

//--------------- Layout imports --------------------
import Navbar from './components/layout/Navbar';
import Dashboard from './components/layout/Dashboard';
import AccountList from './components/layout/AccountList';
import Profile from './components/layout/Profile';

//--------------- Auth imports --------------------
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './App.css';

const App = () => 
    <Router>
      <ContextProvider>
        <Fragment>
          <Navbar />

          <Route exact path="/" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/dashboard" component={ Dashboard } />
          <Route exact path="/account-list" component={ AccountList } />
          <Route exact path="/profile" component={ Profile } />
        </Fragment>
      </ContextProvider>
    </Router>


export default App;
