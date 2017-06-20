import { Meteor } from 'meteor/meteor';
import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import MainLayout from '/imports/ui/layouts/MainLayout.jsx';
import Homepage from '/imports/ui/pages/HomePage.jsx'
import Secondpage from '/imports/ui/pages/SecondPage.jsx'
import Thirdpage from '/imports/ui/pages/ThirdPage.jsx'

//we're using react router
export default () => (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
    <Route path="/" component={Homepage}/>
    <Route path="/second" component={Secondpage}/>
    <Route path="/third" component={Thirdpage}/>
  </Route>
  </Router>
);
