import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import UpdateProduct from '/imports/ui/components/Products/UpdateProduct.jsx';
import {Products} from '/imports/api/products/products.js';

export default createContainer((props) => {

  const id = props.params.id;
  console.log("id", id);
  const productSub = Meteor.subscribe('one_product', id);
  const product = Products.findOne({_id: id});
  return {
    product: product,
    loading: !productSub.ready()
  };
}, UpdateProduct);
