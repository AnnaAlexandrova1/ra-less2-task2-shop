import { Component } from 'react';

import CardsView from '../CardsView/CardsView'
import IconSwitch from '../IconSwitch/IconSwitch';
import ListView from '../ListView/ListView';
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

drowList = (icon) => {
  if (icon === 'view_module') {
    return(
      <CardsView cards={this.products} />
    )
  }
  if (icon === 'view_list') {
    return (
      <ListView cards={this.products} />
    )
  }
}
 
  
  render(){
    const {icon} = this.state;
    return (
      <div className="store">
        <span className="store-header">Домашнее задание "Расположение товаров"</span>
        <IconSwitch icon={icon} onSwitch={this.onSwitch}/>
        {this.drowList(icon)}
      </div>
    );
  }
  
}

export default Store;
