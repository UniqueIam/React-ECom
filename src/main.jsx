import React,{Children} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Cart from './components/Cart/Cart';
import Layout from './components/Layout';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import Home from './components/Home/Home';
import Product from './components/Product/Product'
import SignUp from './components/SignUp/SignUp'
import Error from './components/Error/Error'
import { RouterProvider, createBrowserRouter,Route,createRoutesFromElements} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='home' element={<Home />}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact />} />
      <Route path='product' element={<Product/>}/>
      <Route path='product/:productid' element={<Product />} />
      <Route path='cart' element={<Cart />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='*' element={<Error/>}/>
    </Route>
    
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
