import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import MainLayout from '../layouts/MainLayout.jsx';


//this just checks if we have a current user logged in and sends it to main layout
export default createContainer(() => {
  const currentUser = Meteor.user();
  return {
    isLoggedIn: !!Meteor.userId(),
    currentUser: Meteor.user(),
  };
}, MainLayout);
