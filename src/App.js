import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import LoginForm from "./component/LoginForm";
import NotFound from "./component/NotFound";
import Product from "./component/Product";
import RegisterForm from "./component/RegisterForm";
import MainLayout from "./component/layouts/MainLayout";
import { AuthContextProvider } from "./context/AuthContext";
import { ProductContextProvider } from "./context/CartContext";
import { DataProvider } from "./context/DataFetchContext";
import AllProduct from "./pages/AllProduct";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<AllProduct />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/product/:id" element={<Product />} />

        <Route path="/*" element={<NotFound />} />
      </Route>
    )
  );
  return (
    <DataProvider>
      <AuthContextProvider>
        <ProductContextProvider>
          <RouterProvider router={router} />
        </ProductContextProvider>
      </AuthContextProvider>
    </DataProvider>
  );
}

export default App;
