import { useEffect, useState } from "react";
import { Nav } from "./components/Nav";
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { SHOE_LIST } from "./constant";
import { Cart } from "./components/Cart";
import { BiMoon, BiSun } from "react-icons/bi";

export function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[0]);
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const isDarkMode = localStorage.getItem("isDarkMode");
    if (isDarkMode === "true") {
      window.document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };
  const removeFromCart = (productId) => {
    console.log("***", productId);
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId,
    );
    updatedCartItems.splice(existingItemIndex, 1);
    setCartItems(updatedCartItems);
  };

  const addToCart = (product, qty, size) => {
    if (qty && size) {
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.findIndex(
        (item) => item.id === product.id,
      );
      if (existingItemIndex > -1) {
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      } else {
        updatedCartItems.push({
          product,
          qty,
          size,
        });
      }
      setCartItems(updatedCartItems);
    }
  };
  return (
    <div className="animate-fadeIn dark:bg-night min-h-screen bg-white p-5 text-gray-950 sm:p-8 xl:px-24 dark:text-white">
      <Nav onClickShoppingBtn={() => setIsSidebarOpen(true)} />
      <ShoeDetail shoe={currentShoe} onClickAdd={addToCart} />
      <NewArrivalsSection
        items={SHOE_LIST}
        onClickCard={setCurrentShoe}
      />
      <Sidebar
        isOpen={isSidebarOpen}
        onClickClose={() => setIsSidebarOpen(false)}
      >
        <Cart
          cartItems={cartItems}
          onClickTrash={removeFromCart}
        />
      </Sidebar>
      <div className="fixed right-4 bottom-4">
        <button
          type="button"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          className="bg-night-50 dark:text-night flex h-12 w-12 items-center justify-center rounded-full text-white shadow-lg dark:bg-white"
        >
          <BiSun size={22} className="hidden dark:block" />
          <BiMoon size={22} className="block dark:hidden" />
        </button>
      </div>
    </div>
  );
}
