import axios from "axios";
import { useEffect, useState } from "react";
function Catagory() {
  const client = axios.create({
    baseURL: "https://fakestoreapi.com/products",
  });
  const [Catagory, setCatagory] = useState([]);

  useEffect(() => {
    client.get("").then((res) => {
      setCatagory(res.data);
    });
    console.log(Catagory);
  });

  return <div>Hello</div>;
}

export default Catagory;
