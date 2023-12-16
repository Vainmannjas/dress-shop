import AddToCard from '../../../ui/addtocard/AddToCard'
import styles from './AddProductForm.module.scss'

const AddProductForm = () => {
  return (
    <form>
      <input className={styles.input} type="text" placeholder="Type product's name"/>
      <input className={styles.input} type="text" placeholder="Put image's link"/>
      <input className={styles.input} type="text" placeholder="Type product's price"/>
      <input className={styles.input} type="text" placeholder="Type product's category"/>
      <AddToCard/>(Add new product)
    </form>
  )
}

export default AddProductForm


















