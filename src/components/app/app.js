import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './app.scss';

// Components
import Loading from '../loading';
import BottomBar from '../bottom-bar';
const Menu = React.lazy(() => import('../menu'));
const NotFoundPage = React.lazy(() => import('../not-found-page'));
const HomePage = React.lazy(() => import('../home-page'));
const LoginPage = React.lazy(() => import('../login-page'));
const UserPage = React.lazy(() => import('../user-page'));
const PostsDetailPage = React.lazy(() => import('../posts-detail-page'));
const PhotosPage = React.lazy(() => import('../photos-page'));
const PhotosDetailPage = React.lazy(() => import('../photos-detail-page'));

const App = () => {
  return (
    <React.Fragment>
      <main className="app">
        <Router basename={process.env.PUBLIC_URL}>
          <div className="app__router-view">
            <React.Suspense fallback={Loading}>
              <Switch>
                <Route key="1" path="/" component={HomePage} exact/>
                <Route key="2" path="/menu" component={Menu} exact/>
                <Route key="3" path="/login" component={LoginPage} exact/>
                <Route key="4" path="/users/:id" component={UserPage} exact/>
                <Route key="5" path="/posts/:id" component={PostsDetailPage} exact/>
                <Route key="6" path="/photos-list/:id" component={PhotosPage} exact/>
                <Route key="7" path="/photos-detail/:id" component={PhotosDetailPage} exact/>
                <Route key="100" path="/loading" component={Loading} exact/>
                <Route key="0" component={NotFoundPage} />
              </Switch>
            </React.Suspense>
            <BottomBar />
          </div>
        </Router>
      </main>
    </React.Fragment>
  );
}

export default App;
