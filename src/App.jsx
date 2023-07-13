import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import Cart from './components/Cart';
import Layout from './components/Layout';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

// https://fakestoreapi.com/products
// https://fakestoreapi.com/products/1

function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Products />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Route>
  ))

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
