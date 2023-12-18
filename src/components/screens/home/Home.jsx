import Header from '../../ui/header/Header'
import ProductCard from '../../ui/productCard/ProductCard'
import Sidebar from '../../ui/sidebar/Sidebar'
import './Home.scss'
import AddProductForm from './add-product-form/AddProductForm'
import {ProductService} from '../../../services/product.service'
import { useQuery } from '@tanstack/react-query'


const Home = () => {
  // Here I understood how to work a bit with react-query. It works!
  const {data, isLoading} = useQuery({
    queryKey: ['products'],  queryFn: () => ProductService.getAll()})

    if(isLoading) return <p>Loading...</p>


  return (
    <div>
      <Header/>
      <div className="container" style={{maxWidth: '1640px', padding: '0'}}>
        <div className="products__flex" style={{display: 'flex', flexwrap: 'wrap', justifyContent: 'space-between', gap: '20px'}}>
          <div className="sidepanel" style={{display: 'flex', flexDirection: 'column'}}>

            <AddProductForm/>
            <Sidebar/>
          </div>
          <div style={{maxWidth: '1270px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} className="container__cards">

            {data?.length ? 
              data.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))
            : <p>There are no products</p>
            } 
            {/* Вариан с работающим сайтом,но без базы данных */}
            {/* {data?.length ? 
              data?.map(product => (
                <ProductCard key={product.id} product={product}/>
            ))
            : <p>There are no products</p>
            }  */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
