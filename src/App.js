import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import NotFound from './component/NotFound';
import Product from './component/Product';
import MainLayout from './component/layouts/MainLayout';
import { ProductContextProvider } from './context/CartContext';
import { DataProvider } from './context/DataFetchContext';
import AllProduct from './pages/AllProduct';


function App() {  

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<AllProduct/>}/>
        <Route path='/product/:id' element={<Product />}/>

        <Route path='/*' element={<NotFound/>}/>
      </Route>
      
    )
  )
  return (
    <DataProvider>
     < ProductContextProvider >
      <RouterProvider router={router} />
      </ ProductContextProvider>
    </DataProvider>
  );
}

export default App;
