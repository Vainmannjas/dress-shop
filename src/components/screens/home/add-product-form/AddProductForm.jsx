import { useState } from 'react'
// import AddToCard from '../../../ui/addtocard/AddToCard'
import styles from './AddProductForm.module.scss'


const clearData = {
  name: '',
  img: '',
  price: '',
  category: ''
}

const AddProductForm = ({setProducts}) => {
  const [data, setData] = useState(clearData)

  const createProduct = e => {
    e.preventDefault()
    console.log({data})

    setProducts(prev => [{id: prev.length + 1, ...data}, ...prev ])

    setData(clearData)
  }

  return (
    <form>
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Type product's name" 
        onChange={e => setData(prev => ({...prev, name: e.target.value}))} value={data.name}
      />
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Put image's link" 
        onChange={e => setData(prev => ({...prev, img: e.target.value}))} 
        value={data.img}
      />
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Type product's price" 
        onChange={e => setData(prev => ({...prev, price: e.target.value}))} 
        value={data.price}
      />
      <input 
        className={styles.input} 
        type="text" 
        placeholder="Type product's category" 
        onChange={e => setData(prev => ({...prev, category: e.target.value}))} 
        value={data.category}
      />
      <button className={styles.btn} onClick={e => createProduct(e)}>Добавить новый продукт</button>
      {/* <AddToCard onClick={e => createCar(e)}/>(Add new product) */}
    </form>
  )
}

export default AddProductForm


















