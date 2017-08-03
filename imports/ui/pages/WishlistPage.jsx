import React, {Component} from 'react';
import WishlistDetails from '/imports/ui/components/Wishlist/WishlistDetails.jsx';
import WishlistGrid from '/imports/ui/components/Wishlist/WishlistGrid.jsx';

export default class WishlistPage extends Component {
  render() {
      if (this.props.loading) {
        return <h1> loading... </h1>
      }
      else {
        let products = this.props.products;
        let productsList = products.map(function(product, i){
          return <WishlistGrid key={i} product={product}/>
        //return <h1 key={i}> {product.name} </h1>
        })
      return (
        <div>
          <div className="container">
               {productsList}
          </div>
        </div>
      )
    }
  }
}
