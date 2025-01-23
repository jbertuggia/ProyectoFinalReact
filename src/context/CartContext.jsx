import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
const [cart, setCart] = useState ([]);

const addProduct = (newProduct) => {
    const index = cart.findIndex( (productCart)=> productCart.id === newProduct.id )

    if (index === -1) {
        //agregar el producto como nuevo
        setCart( [ ...cart, newProduct ] )
    }else{
        //modificar solo la cantidad del producto
        const newCart = [...cart]
        newCart[index].quantity = newCart[index].quantity + newProduct.quantity
        setCart (newCart)
    }}

const totalQuantity = () => {
    const quantity = cart.reduce((total, productCart) => total + productCart.quantity , 0)
    
    return quantity
}

const totalPrice = () => {
    const price = cart.reduce((total, productCart) => total + (productCart.quantity * productCart.price ), 0 )
    return price
}


const deleteProductById = (idProduct) => {
    const filterProducts = cart.filter((productCart)=> productCart.id !== idProduct)
    setCart(filterProducts)
}

const deleteCart = () => {
    setCart([])
}

    return (
        <CartContext.Provider value={ { cart, setCart, addProduct, totalQuantity, totalPrice, deleteProductById, deleteCart } }>
            {children}
        </CartContext.Provider>
    )
}

export { CartContext, CartProvider }