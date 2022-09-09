import ShopItem from '../ShopItem/ShopItem'
import './ListView.css'


const ListView = (props) => {
  const {cards} = props
  const items = cards.map(item => {
    const {name, price, color, img} = item;
    return (
        <ShopItem name={name} price={price} color={color} img={img}/>
    )
  })

 return (
    <div className='list-view'>
         {items}
    </div>
 )

}

export default ListView