const Price = ({price}) => {
  return (
    <div>
        <div style={{paddingLeft: '10px'}} className="card__price">
            {new Intl.NumberFormat('ru-RU', {
            style: 'currency', 
            currency: 'RUB'
            }).format(price)}
        </div>
    </div>
  )
}

export default Price
