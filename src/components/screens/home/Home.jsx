import {useMemo} from 'react'
import Header from '../../ui/header/Header'
import ProductCard from '../../ui/productCard/ProductCard'
import {products} from '../home/cars.data'
import Sidebar from '../../ui/sidebar/Sidebar'

import './Home.scss'
import AddProductForm from './add-product-form/AddProductForm'

const Home = () => {

  const filteredProducts = useMemo(() => products.filter(product => product.allProducts === 'all'), [])
  return (
    <div>
      <Header/>
      <div className="container" style={{maxWidth: '1640px', padding: '0'}}>
        <div className="products__flex" style={{display: 'flex', flexwrap: 'wrap', justifyContent: 'space-between', gap: '20px'}}>
          <div className="sidepanel" style={{display: 'flex', flexDirection: 'column'}}>
            <AddProductForm/>
            <Sidebar/>
          </div>
          {filteredProducts.length ? filteredProducts.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))
          : <p>There are no products</p>
          } 
        </div>
      </div>
    </div>
  )
}

export default Home
