import './ShopCard.css'

const ShopCard = (props) => {
    const {name, price, color, img} = props;

    return(
        <div className='shop-card'>
            <div className='card-name'>{name}</div>
            <div className='card-color'>{color}</div>
            <img className="img" src={img} alt="item"/>
            <div className='card-price-button'>
               <div className='card-price'>${price}</div>
               <button className='btn' type='button'>ADD TO CART</button>
            </div>
        </div>
    )
}

export default ShopCard