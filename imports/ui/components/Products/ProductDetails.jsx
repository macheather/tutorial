import React, {Component} from 'react';
import accounting from 'accounting';
import AddReview from '../Reviews/AddReview.jsx';
import ProductReviews from '../Reviews/ProductReviews.jsx';
import AddWishlist from '../Wishlist/AddWishlist.jsx';

export default class ProductDetails extends Component {
  render() {
    let {product, reviews} = this.props;

    let flavors = [];
    if(product.flavors){
      flavors = product.flavors;
    }
    let flavorList = flavors.map(function(flavor, i){
        return <span key={i}>{flavor} </span>
    });

    let listReviews = () => {

    }
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img src={product.image} />
            <h2 className="text-center">{product.name}</h2>
            {product.description ? <p className="lead">
              <strong>Description: </strong>
              {product.description}
            </p> : <p>no description available</p>}
            <p className="lead">
              <strong>Flavors: </strong>
              {flavorList}
            </p>

            <h2 className="text-center">{accounting.formatMoney(product.price)}</h2>
            <button className="btn btn-primary">Add To Cart</button>
            <AddWishlist product={product}/>
          </div>
        </div>
        <div className= "text-center">
        <AddReview product = {product} />
        <ProductReviews reviews={reviews} />
      </div>
      </div>
    )
  }
}
