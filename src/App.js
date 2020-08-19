import React, { Fragment, useRef } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ContextProvider } from './context/Context'
import util from './components/util';

//--------------- Layout imports --------------------
import Dashboard from './components/layout/Dashboard';
import AccountList from './components/layout/AccountList';
import Profile from './components/layout/Profile';

//--------------- Auth imports --------------------
import Login from './components/auth/Login';
import Register from './components/auth/Register';

import './App.css';

const PublicRoute = ({
  component: Component,
  restricted,
  reference,
  ...rest
}) => {
  return (
    <>
      
      <Route
        {...rest}
        render={(props) =>
          util.isLogin() ? (
            <Redirect to="/dashboard" />
          ) : (
            // <Redirect to="/" />
            <Component {...props} reference={reference} />
          )
        }
      />
    </>
  )
}

const AuthRoute = ({
  component: Component,
  restricted,
  reference,
  ...rest
}) => {
  return (
    <>
      
      <Route
        {...rest}
        render={(props) => 
          !util.isLogin() && restricted ? ( // false && true
            <Redirect to={'/'} />
          ) : (
            // <Redirect to={'/'} />
            <Component {...props} reference={reference} />
          )
        }
      />
    </>
  )
}

const App = () => 
  {
    const appRef = useRef(null);
    return(
      <Router>
        <ContextProvider>
          <Switch>
            <Fragment>
              <PublicRoute
                restricted={false}
                component={Login}
                path="/"
                reference={appRef}
                exact
              />
              <PublicRoute
                restricted={false}
                component={Register}
                path="/register"
                reference={appRef}
                exact
              />

              <AuthRoute
                restricted={true}
                component={Dashboard}
                path="/dashboard"
                exact
              />
              <AuthRoute
                restricted={true}
                component={AccountList}
                path="/account-list"
                exact
              />
              <AuthRoute
                restricted={true}
                component={Profile}
                path="/profile"
                exact
              />
              {/* <Route exact path="/" component={ Login } /> */}
              {/* <Route exact path="/register" component={ Register } /> */}
              {/* <Route exact path="/dashboard" component={ Dashboard } />
              <Route exact path="/account-list" component={ AccountList } />
              <Route exact path="/profile" component={ Profile } /> */}
            </Fragment>
            </Switch>
        </ContextProvider>
      </Router>
    )
    
  }
    


export default App;
