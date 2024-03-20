import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { default as AllProduct } from './Product/AllProduct';
import Product from './Product/Product';
import MainLayout from './layouts/MainLayout';
import { useEffect } from 'react';


function App() {
  //fetch single product and view
  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<AllProduct/>}/>
        <Route path='/product/:id' element={<Product/>}/>

      </Route>
    )
  )
  return (
    
      <RouterProvider router={router}/>
  );
}

export default App;
