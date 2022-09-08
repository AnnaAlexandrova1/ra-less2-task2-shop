import ShopCard from '../ShopCard/ShopCard'
import './CardsView.css'

const CardsView = (props) => {
    const {cards} = props;
    const items = cards.map(item => {
        const {name, price, color, img} = item;
        return(
            <ShopCard name={name} price={price} color={color} img={img} />
        )
    })
    

    return (
        <div className='cardsView'>
             {items}
        </div>
    )
 

}

export default CardsView