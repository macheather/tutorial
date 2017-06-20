import React, {Component} from 'react';
import ProductGrid from './ProductGrid.jsx';
import {browserHistory, Link} from 'react-router';
import DragSortableList from 'react-drag-sortable';

export default class Products extends Component {

 render() {
   let {products} = this.props;

   let productsList = products.map(function(product, i){
       return {content: <ProductGrid key={product._id} product={product}/>}
     });


   const goAddProduct = () => {
     browserHistory.push('/add');
   }

   const onSort = (sortedList) => {
   	console.log("sortedList", sortedList);
    let sortItems = [];
    sortedList.map(function(item, i){
      sortItems.push({id: item.content.key, rank: item.rank})
    });
    console.warn('sortItems', sortItems);

    Meteor.call('sortProducts', sortItems,function(){

    });

   }

   return (
     <div>
        <DragSortableList
          items={productsList}
          onSort={onSort}
          dropBackTransitionDuration={0.3}
          type="vertical"/>
     </div>
   )
 }
}
