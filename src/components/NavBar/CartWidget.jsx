import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    let quantity = totalQuantity()

    return (

        <Link to="/carrito" className="text-decoration-none cartLink">
            <i className="bi bi-cart text-white fs-2"></i>
            <span className="bi text-decoration-none fw-bold cartWidgetNumber">{quantity !== 0 && quantity}</span>
        </Link>
    )
}
export default CartWidget;