//import de componentes
import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import Cart from "./components/Cart/Cart"
import Error from "./UI/Error"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import Checkout from "./components/Checkout/Checkout"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import { ToastContainer, Zoom } from "react-toastify"
import './app.css'


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <ToastContainer theme="dark" transition={Zoom} />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:idCategory" element={<ItemListContainer />} />
            <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
