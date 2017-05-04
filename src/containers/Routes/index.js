import React from 'react';
import { Route } from 'react-router-dom';

import Home from '../../components/home';
import About from '../../components/about';
import Blog from '../../components/blog';
import Facility from '../../components/facility';
import Service from '../../components/service';
import Reservation from '../../components/reservation';
import Tour from '../../components/tour';

const Routes = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/facility" component={Facility} />
      <Route exact path="/service" component={Service} />
      <Route exact path="/reservation" component={Reservation} />
      <Route exact path="/tour" component={Tour} />
    </div>
  );
};

export default Routes;