import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Erreur from '../pages/Error/Error';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';

const LaRoute = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/Home" component={Home} />
          <Route exact path="/Error" component={Erreur} />
        </Switch>
      </div>
    );
}

export default LaRoute
