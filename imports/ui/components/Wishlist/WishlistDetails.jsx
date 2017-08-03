import React, {Component} from 'react';
export default class WishlistDetails extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="container">
        <div className="row">
          <div className="text-center">
            <img src={product.image} />
            <h2 className="text-center"> {product.name} </h2>
            {product.description ? <div className="lead">
              <strong> Description: </strong>
              <p>
                 {product.description}
              </p>
            </div> : null}
            <h2 className="text-center"> {accounting.formatMoney(product.price)} </h2>
            <button className="btn btn-primary text-center"> Add to Cart </button>

          </div>
        </div>
      </div>
    )
  }
}
