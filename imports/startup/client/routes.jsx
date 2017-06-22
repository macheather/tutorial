import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import MainLayout from '/imports/ui/layouts/MainLayout.jsx';
import HomeContainer from '/imports/ui/containers/HomeContainer.jsx';
import Secondpage from '/imports/ui/pages/SecondPage.jsx';
import Thirdpage from '/imports/ui/pages/ThirdPage.jsx';



//we're using react router
export default () => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
    <Route path="/" component={HomeContainer}/>
    <Route path="/cali_yogo-strawberry" component={Secondpage}/>
    <Route path="/third" component={Thirdpage}/>
  </Route>
  </Router>
);
