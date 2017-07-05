import React, {Component} from 'react';
import DropDetail from '/imports/ui/components/Drops/DropDetail.jsx';


export default class OneDropPage extends Component {
  render() {
      if (this.props.loading) {
        return <h1> loading... </h1>
      }
      else {
        let product = this.props.product;
      return (
        <div>
          <div className="container">
            <DropDetail key={product._id} product={product}/>
          </div>
        </div>
      )
    }
  }
}
