import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './screens/home/Home'
import ProductDetail from './screens/product-detail/ProductDetail'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home/>} path={'/'}/>
            <Route element={<ProductDetail/>} path={'/product/:id'}/>
            <Route element={<div>This page is not found</div>} path='*'/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router
