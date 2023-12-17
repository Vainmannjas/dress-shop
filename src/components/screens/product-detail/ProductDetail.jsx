import { useParams} from 'react-router-dom'
import {useEffect} from 'react'
import { ProductService } from '../../../services/product.service'
import {useState} from 'react'
import ProductCard from '../../ui/productCard/ProductCard'
import {Link} from 'react-router-dom'
import styles from './ProductDetail.module.scss'

const ProductDetail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})

    useEffect(() => {
        if(!id) return
        
        const fetchData = async () => {
          const data = await ProductService.getById(id)
    
          setProduct(data)
        } 
    
        fetchData()
      }, [id])

      if(!product?.name) return <p>Product is not found</p>

  return (
    <div>
      <Link className={styles.btn} to="/">Вернуться назад</Link>
        <ProductCard product={product}/>
    </div>
  )
}

export default ProductDetail
