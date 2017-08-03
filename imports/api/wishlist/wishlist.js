import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
export const Wishlist = new Mongo.Collection("wishlist");
// WishlistSchema = new SimpleSchema({
  //
  // id : {
  //   type: String,
  //   label: "id",
  // },
  // user_id: {
  //   type: String,
  //   label: "user id"
  // },
  // name: {
  //   type: String,
  //   label: "product name"
  // },
  // description: {
  //   type: String,
  //   label: "product description",
  //   max: 128,
  //   optional: true
  // },
  // image: {
  //   type: String,
  //   label: "product image link",
  //   max: 128
  // },
  // price: {
  //   type: Number,
  //   label: "product price",
  //   max: 128,
  //   decimal: true,
  //   defaultValue: 0,
  //   optional: true
  // },
// });
// Wishlist.attachSchema(WishlistSchema);
