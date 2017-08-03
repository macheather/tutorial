import React, {Component} from 'react';
import {Link} from 'react-router';


export default class WishlistGrid extends Component {

  render() {
    let {product, catalogType} = this.props
    console.log('prop', product)
    return (

      <div className="col-sm-4">
        <img className="img-responsive" src={product.image} />
        <h2 className="text-center">{product.name}</h2>
        <div className="text-center">
            <h2> <span> ${product.price} </span> </h2>
        {/* <h2>  <span> ${product.price} </span> </h2> */}
          <Link to={'/product/' + product._id}>
            <button className="btn btn-primary">Buy Now</button>
          </Link>
      </div>
      </div>

    )
  }
}
