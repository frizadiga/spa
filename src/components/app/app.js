import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.scss';

// Components
import BottomBar from '../bottom-bar';
import HomePage from '../home-page';
import LoginPage from '../login-page';
import UserPage from '../user-page';
import PostPage from '../post-page';

const App = () => {
  // const [ loading, setLoading ] = useState(true);
  
  // setTimeout(() => setLoading(false), 0);
  // if (loading) return null;

  // const fnCheckAuth = () => {
  //   console.log('fnCheckAuth');
  //   const pathname = window.location.pathname;
  //   if (pathname === '/login') return

  //   const isLogin = JSON.parse(localStorage.isLogin) || false;
  //   if (!isLogin) window.location.assign('/login');
  // }

  // useEffect(() => { fnCheckAuth() }, [])
  
  return (
    <React.Fragment>
      <main className="app">
        <Router>
          <div>
            <Switch>
              <Route path="/" component={HomePage} exact/>
              <Route path="/login" component={LoginPage} exact/>
              <Route path="/users/:id" component={UserPage} exact/>
              <Route path="/posts/:id" component={PostPage} exact/>
            </Switch>
            { false && <BottomBar /> }
          </div>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
