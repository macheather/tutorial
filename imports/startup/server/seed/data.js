import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {Products} from '/imports/api/products/products.js';

let data = [{
  name: 'Cali Yogo',
  image: 'https://swchllc.s3.amazonaws.com/photos/cali_yogo-strawberry.jpg',
  price: 15.99,description: 'Strawberries have been blended with the popular Japanese yogurt drink to bring you a refreshing all day vape.',
  flavors: ['strawberry', 'cream']
},
{
  name: 'Mango',
  image: 'https://swchllc.s3.amazonaws.com/products/salt/mango/0.png',
  price: 19.99,
  description: 'This product is not meant for use in devices that reach sub-ohm resistance. We recommend this liquid to be used in pod-based, closed systems devices and low-output atomizers/mods.',
  flavors: ['mango', 'spicy']
},
{
  name: 'Apple Shake',
  image: 'https://swchllc.s3.amazonaws.com/eliquids/milkshake_liquids-apple_shake.png',
  price: 9.99,
  description: 'Pie crust filled with diced apples, topped with vanilla ice cream. All blended together to make a delicious apple pie milkshake.',
  flavors: ['caramel, chocolate']
},
{
  name: 'Modzilla',
  image: 'https://swchllc.s3.amazonaws.com/eliquids/modzilla-_nuclear_fruit_punch.png',
  price: 29.99,
  description: 'Get a kick out of the Nuclear Fruit Punch! The Nuclear Fruit Punch is bursting with flavor and has a refreshing and invigorating fruity taste. One taste of this brew will knock your socks off!',
  flavors: ['peppermint, chocolate']
},
{
  name: 'Pop Deez',
  image: 'https://swchllc.s3.amazonaws.com/eliquids/steep_vapors-pop_deez.png',
  price: 19.99,
  description: 'Watch a Movie and enjoy this caramel flavored popcorn! This is a very unique flavor that will bring back a blast from your childhood.',
  flavors: ['popcorn, cinammon']
},
{
  name: 'POW',
  image: 'https://swchllc.s3.amazonaws.com/photos/Binary_E_Liquid-Pow.jpg',
  price: 14.99,
  description: 'Pow is a refreshing blend of pomegranate watermelon a hint of marshmallow and a final secret ingredient to give you a fruity yet fluffy flavor.',
  flavors: ['vanilla, dark chocolate, milk chocolate']
}
];

console.log('inserting data');

//let checkProducts = Products.find({}).count();

for(i = 0; i < data.length; i++){
  let selector = {name: data[i].name};
Products.upsert(selector, {$set: data[i]});
}

//console.warn('checkProducts ', checkProducts);


//if(checkProducts == 0){
//  for(i = 0; i < data.length; i++){
//  Products.insert(data[i]);
//  }
//}
