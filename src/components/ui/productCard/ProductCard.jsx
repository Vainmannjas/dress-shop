import AddToCard from '../addtocard/AddToCard'
import {Link} from 'react-router-dom'
import Price from './Price'

import './ProductCard.scss'

const ProductCard = ({product}) => {

  return (
    <>
      <div className="card" key={product.id}>
        <div className="card__width">
            <Link to={`/product/${product.id}`} className="card__img">
                <img src={product.img} alt="" />
            </Link>
            <div style={{paddingLeft: '10px'}} className="card__name">{product.name}</div>
            <Price price={product.price}/>
            <AddToCard/>
        </div>
      </div>
    </>
  )
}

export default ProductCard
