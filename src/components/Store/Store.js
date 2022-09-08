import { Component } from 'react';

import CardsView from '../CardsView/CardsView'
import productsList from '../productList'

import './Store.css';


class Store extends Component {
  constructor(props){
    super(props)
    this.products = productsList;
  }
  
  render(){
    return (
      <div className="store">
        <CardsView cards={this.products}/>
      </div>
    );
  }
  
}

export default Store;
