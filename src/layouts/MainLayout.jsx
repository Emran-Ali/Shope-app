import { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuAppBar from "../component/MenuAppBar";

function MainLayout() {
  const [addedItems, setAddedItem] = useState([]);
  const addItem = (product) => {
    product.addNumber = 1;
    const itemArr = addedItems;
    setAddedItem([...itemArr, product]);
  };

  return (
    <>
      <MenuAppBar items={addedItems} />
      <Outlet context={addItem} />
    </>
  );
}

export default MainLayout;
