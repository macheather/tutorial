import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';

Meteor.publish("all_products", function () {
  let selector = {};
  let options = {sort: {rank: 1}};

  return Products.find(selector, options);
});
