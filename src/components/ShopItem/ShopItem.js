import './ShopItem.css'

const ShopItem = (props) => {
    const {name, price, color, img} = props;

    return(
        <div className='shop-item'>
            <img className="shop-img" src={img} alt="item"/>
            <div className='shop-name'>{name}</div>
            <div className='shop-color'>{color}</div>
            <div className='shop-price'>${price}</div>
            <button className='shop-btn' type='button'>ADD TO CART</button>
        </div>
    )
}

export default ShopItem;
