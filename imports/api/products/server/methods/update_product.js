import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Products } from '/imports/api/products/products.js';

Meteor.methods({
    updateProduct: function(id, product) {
    let productUpdate = Products.update({_id: id}, {$set: product});

    if(productUpdate) {
        return "success";
    } else {
        return "error";
    }

  },

});
