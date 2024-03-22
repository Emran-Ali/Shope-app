import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.css';
import { default as AllProduct } from './Product/AllProduct';
import Product from './Product/Product';
import NotFound from './component/NotFound';
import { DataProvider } from './context/DataFetchContext';
import MainLayout from './layouts/MainLayout';


function App() {
  //fetch single product and view
  

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
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
