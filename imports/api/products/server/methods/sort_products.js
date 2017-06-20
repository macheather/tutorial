import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Products } from '/imports/api/products/products.js';

Meteor.methods({
  sortProducts: function(sortItems) {
    sortItems.map(function(item, i){
      Products.update({_id: item.id}, {$set: {rank: item.rank}});
    })
  },

});
