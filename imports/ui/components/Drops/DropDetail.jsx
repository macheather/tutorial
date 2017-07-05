import React, {Component} from 'react';
import {Link} from 'react-router';
import DropProgressBar from './DropProgressBar.jsx';
import DropProgressCircle from './DropProgressCircle.jsx';

export default class DropDetail extends Component {

  render() {
    //find our current tier
    //get needed participants from tier participants - current participants
    //display needed participants and next tier price
    let product = this.props.product;
    let curTier = product.cur_tier;
    let curParticipants = product.participants
    let tiers = product.tiers;
    let nextTier = null;
    let neededParticipants = 0;
    let nextPrice = null;
    if (curTier.id < tiers.length - 1){
      nextTier = tiers[curTier.id + 1];
      neededParticipants = nextTier.participants - product.participants;
      nextPrice = nextTier.price;
    }
    let addParticipants = () => {
      Meteor.call("addParticipants", product._id);
}
      var Countdown = require('react-cntdwn');
      var handleFinish = function () {
        console.log('Skynet has become self-aware!');
}


    return (
      <div className="col-sm-12">
        <h1 className="text-center"> {product.product_name}</h1>
        <div className="row">
        <div className="col-sm-8">
        <img className="img-responsive"   src={product.images[0]}/>
        <span> <DropProgressBar /> </span>
        <span> <DropProgressCircle /> </span>
      </div>
      <div className="col-sm-4">
          <div className="text-center">
          {product.cur_tier.price < product.org_price ? <span><s>${product.org_price}</s><span> ${product.cur_tier.price}</span></span>
                    :<span > ${product.org_price} </span> }
          <div>
            {nextTier ? <span> {neededParticipants} more people needed for ${nextPrice}
             </span>
            : <span> </span>}</div>

              <button onClick={addParticipants} className="btn btn-primary text-center"> Participate Now! </button>
              <Countdown targetDate={new Date('July 7, 2017')}
               startDelay={0}
               interval={1000}
               timeSeparator={' : '}
               leadingZero
               onFinished={handleFinish}
                format={{
                  day:'DD',
                  hour: 'hh',
                  minute: 'mm',
                  second: 'ss'
                  }}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
