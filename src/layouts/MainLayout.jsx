import { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuAppBar from "../component/MenuAppBar";

function MainLayout() {
  const [addedItems, setAddedItem] = useState([]);
  const addQuantity = (id) => {
    const AllProduct = [...addedItems];
    AllProduct[id].quantity += 1;
    setAddedItem([...AllProduct]);
  };
  const delQuantity = (id) => {
    let AllProduct = [...addedItems];
    AllProduct[id].quantity -= 1;
    if (AllProduct[id].quantity <= 0) {
      AllProduct.splice(id, 1);
      console.log(AllProduct);
    }
    setAddedItem([...AllProduct]);
  };

  const addItem = (product) => {
    const pro = addedItems.filter((obj) => obj.id !== product.id);
    product.quantity = product.quantity ? Number(product.quantity) + 1 : 1;
    setAddedItem([...pro, product]);
  };

  return (
    <>
      <MenuAppBar items={addedItems} add={addQuantity} del={delQuantity} />
      <Outlet context={addItem} />
    </>
  );
}

export default MainLayout;
