import React, { useState } from "react";
import "../TabMenu/tab.css";
import CateMenu from "./CateMenu";
import Menu from "./menu";
import MenuItems from "./MenuItems";
const allCatValues = [
  ...new Set(Menu.map((curElem) => curElem.category)),
  "all",
];
const GalleryReact = () => {
  const [items, setItems] = useState(Menu);
  const [catItems, setCatItems] = useState(allCatValues);
  const filterItem = (categItem) => {
    if (categItem === "all") {
      setItems(Menu);
      return;
    }
    const updatedItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updatedItems);
  };

  return (
    <>
      <h1 className="mt-5 text-center main-heading">
        Order Your Favourite Dish
      </h1>
      <hr />

      <CateMenu filterItem={filterItem} catItems={catItems} />
      <MenuItems items={items} />
    </>
  );
};

export default GalleryReact;
