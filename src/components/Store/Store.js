import { Component } from 'react';

import CardsView from '../CardsView/CardsView'
import IconSwitch from '../IconSwitch/IconSwitch';
import productsList from '../productList'

import './Store.css';


class Store extends Component {
  constructor(props){
    super(props)
    this.products = productsList;
    this.state = {
      icon: 'view_module'
    }
  }

  onSwitch = (icon) => {
    if (icon === 'view_module') {
      this.setState({
        icon: 'view_list'})
    }
    if(icon === 'view_list'){
      this.setState({
        icon: 'view_module'})
    }
}
 
  
  render(){
    const {icon} = this.state;
    return (
      <div className="store">
        <IconSwitch icon={icon} onSwitch={this.onSwitch}/>
        <CardsView cards={this.products}/>
      </div>
    );
  }
  
}

export default Store;
