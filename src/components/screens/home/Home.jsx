import {useEffect} from 'react'
import {useState} from 'react'
// import {useMemo} from 'react'
import Header from '../../ui/header/Header'
import ProductCard from '../../ui/productCard/ProductCard'
import Sidebar from '../../ui/sidebar/Sidebar'
import './Home.scss'
import AddProductForm from './add-product-form/AddProductForm'
import {ProductService} from '../../../services/product.service'
import {useContext} from 'react'
import {AuthContext} from '../../../providers/AuthProvider'




const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await ProductService.getAll()

      setProducts(data)
    } 

    fetchData()
  }, [])


  const {user, setUser} = useContext(AuthContext)


  // const filteredProducts = useMemo(() => products.filter(product => product.allProducts === 'all'), [])
  return (
    <div>
      <Header/>
      <div className="container" style={{maxWidth: '1640px', padding: '0'}}>
        <div className="products__flex" style={{display: 'flex', flexwrap: 'wrap', justifyContent: 'space-between', gap: '20px'}}>
          <div className="sidepanel" style={{display: 'flex', flexDirection: 'column'}}>

            {
              user ? 
              <>
                <h2>
                  Welcome, {user.name}!
                </h2>
                <button onClick={() => setUser(null)}>Logout</button>
              </>
              : <button onClick={() => setUser({
              name: 'Max'
              })}>Login</button>
            }

            <AddProductForm setProducts={setProducts}/>
            <Sidebar/>
          </div>
          <div style={{maxWidth: '1270px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between'}} className="container__cards">
            {products.length ? products.map(product => (
              <ProductCard key={product.id} product={product}/>
            ))
            : <p>There are no products</p>
            } 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
