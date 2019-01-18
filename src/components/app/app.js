import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.scss';

// Components
import BottomBar from '../bottom-bar';
import NotFoundPage from '../not-found-page';
import HomePage from '../home-page';
import LoginPage from '../login-page';
import UserPage from '../user-page';
import PostsDetailPage from '../posts-detail-page';
import PhotosPage from '../photos-page';
import PhotosDetailPage from '../photos-detail-page';

const App = () => {
  return (
    <React.Fragment>
      <main className="app">
        <Router>
          <div>
            <Switch>
              <Route key="1" path="/" component={HomePage} exact/>
              <Route key="2" path="/login" component={LoginPage} exact/>
              <Route key="3" path="/users/:id" component={UserPage} exact/>
              <Route key="4" path="/posts/:id" component={PostsDetailPage} exact/>
              <Route key="5" path="/photos-list/:id" component={PhotosPage} exact/>
              <Route key="5" path="/photos-detail/:id" component={PhotosDetailPage} exact/>
              <Route key="0" component={NotFoundPage} />
            </Switch>
            { true && <BottomBar /> }
          </div>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
