import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Products } from '/imports/api/products/products.js';

Meteor.publish("one_product", function (id) {
   return Products.find({_id: id});
});
