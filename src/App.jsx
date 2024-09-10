// import { Card } from "./components/Card";
import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { New } from "./components/New";
import { Shoe } from "./components/Shoe";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
// import { Cart } from "./components/Cart";
import { CartList } from "./components/CartList";
import { BiMoon, BiSun } from "react-icons/bi";

const FAKE_CART_ITEMS = SHOE_LIST.map((shoe) => {
  return {
    product: shoe,
    qty: 1,
    size: 44,
  };
});

function App() {

  useEffect(() => {
  const IsDarkmode = localStorage.getItem('isDarkmode');
  if (IsDarkmode === true) {
     window.document.documentElement.classList.add('dark')
  }

  },[]);
  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");

    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark")
    );
  };

  const [isOpen, setIsopen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0])
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, qty, size)=>{
    if(qty && size){
      const updateCartItems = [...cartItems]
      const existingItemIndex = cartItems.findIndex(item =>item.product.id === product.id)
      if(existingItemIndex>-1){
       updateCartItems[existingItemIndex].qty = qty
       updateCartItems[existingItemIndex].size = size
      } else{
        updateCartItems.push({product: product, qty: qty, size: size})
      }

      setCartItems(updateCartItems)
    }

  }

  const deleteItem = (productId)=>{
    const updateCartItems = [...cartItems]
    const existingItemIndex = cartItems.findIndex(item =>item.product.id === productId);
    updateCartItems.splice(existingItemIndex,1)
    setCartItems(updateCartItems)
  }

  return (
    <div className="p-10 xl:px-24 animate-fadeIn dark:bg-night">
      <Nav onClickShoppingButton={() => setIsopen(true)} />
      <Shoe shoe={currentShoe} onAddToCart={addToCart}  />
      <New items={SHOE_LIST} onClick={setCurrentShoe}  />
      <Sidebar isOpen={isOpen} onclickClose={() => setIsopen(false)}>
        <CartList cartItems={cartItems} onRemove={deleteItem}/>
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className=" bg-night-50 px-4 py-2 rounded-full text-white dark:bg-white dark:text-night active:scale-105 shadow-lg"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}

export default App;
