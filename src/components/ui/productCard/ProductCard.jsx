import AddToCard from '../addtocard/AddToCard'

import './ProductCard.scss'

const ProductCard = ({product}) => {
  return (
    <>
      <div className="card" key={product.id}>
        <div className="card__width">
            <div className="card__img">
                <img src={product.img} alt="" />
            </div>
            <div className="card__name">{product.name}</div>
            <div className="card__price">
              {new Intl.NumberFormat('ru-RU', {
                style: 'currency', 
                currency: 'RUB'
              }).format(product.price)}
            </div>
            <AddToCard/>
        </div>
      </div>
    </>
  )
}

export default ProductCard
