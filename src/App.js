import './App.css';
import { default as AllProduct } from './Product/AllProduct';
import Catagory from './Product/Catagory';
import Navbar from "./component/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Catagory/>
      <AllProduct/>
      
    </div>
  );
}

export default App;
