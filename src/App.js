import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Product from './';
import './App.css';
import NotFound from './component/NotFound';
import { DataProvider } from './context/DataFetchContext';
import MainLayout from './layouts/MainLayout';
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
      <RouterProvider router={router} />
    </DataProvider>
  );
}

export default App;
