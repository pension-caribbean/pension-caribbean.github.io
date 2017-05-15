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
      <Route path="/about" component={About} />
      <Route path="/blog" component={Blog} />
      <Route path="/facility" component={Facility} />
      <Route path="/service" component={Service} />
      <Route path="/reservation" component={Reservation} />
      <Route path="/tour" component={Tour} />
    </div>
  );
};

export default Routes;