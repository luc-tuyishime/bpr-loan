import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import routes from './routes';
import NotFoundPage from './pages/NotFoundPage.jsx';

function App({ isAuth }) {
  return (
    <Router>
      <Switch>
        {routes.map((route) => (
          <Route
            key={route.name}
            exact
            path={route.path}
            protected={route.protected}
            role={route.role}
            render={(props) => {
              // if (route.protected && !isAuth) return <Redirect to="/" />;
              document.title = route.name;
              return (
                <route.component
                  location={props.location}
                  history={props.history}
                  match={props.match}
                />
              );
            }}
          />
        ))}
        <Route path="*" exact component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default App;
