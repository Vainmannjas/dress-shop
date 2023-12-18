import styles from './AddProductForm.module.scss'
import {useForm} from 'react-hook-form'

const AddProductForm = () => {
  const {register, reset, handleSubmit, formState: {errors}} = useForm({
    mode: 'onChange'
  })

  const createProduct = data => {
    // setProducts(prev => [{id: prev.length + 1, ...data}, ...prev ])

    reset()
  }

  return (
    <form onSubmit={handleSubmit(createProduct)}>
      <input 
        className={styles.input} 
        {...register('name', {required: 'error message'})} 
        type="text" 
        placeholder="Type product's name"
      />
      {errors?.name?.message && <p style={{color: 'red', fontWeight: 'bold'}}>Name is required!</p>}

      <input 
        className={styles.input} 
        {...register('img', {required: 'error message'})} 
        type="text" 
        placeholder="Put image's link"
      />
      {errors?.img?.message && <p style={{color: 'red', fontWeight: 'bold'}}>Image is required!</p>}

      <input 
        className={styles.input} 
        {...register('price', {required: 'error message'})} 
        type="text" 
        placeholder="Type product's price"
      />
      {errors?.price?.message && <p style={{color: 'red', fontWeight: 'bold'}}>Price is required!</p>}

      <input 
        className={styles.input} 
        {...register('category', {required: 'error message'})} 
        type="text" 
        placeholder="Type product's category"
      />
      {errors?.category?.message && <p style={{color: 'red', fontWeight: 'bold'}}>Category is required!</p>}

      <button className={styles.btn}>Добавить новый продукт</button>
      {/* <AddToCard onClick={e => createCar(e)}/>(Add new product) */}
    </form>
  )
}

export default AddProductForm


















