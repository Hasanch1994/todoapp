import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router';
import About from './Components/Commons/About';

import Header from './Components/Commons/Header';
import Main from './Components/Commons/Main';

const App = () => {


  return (
    <Fragment>
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
      </Switch>
    </Fragment>

  );
}

export default App;
