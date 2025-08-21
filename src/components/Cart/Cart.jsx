import { useState } from 'react';
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import EmptyCart from '../../UI/EmptyCart';
import './cart.css'

//import de bootrtrap
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Cart = () => {

    const { cart, totalPrice, deleteProductById, deleteCart } = useContext(CartContext)
    //Early return (retornar algo antes)
    if (cart.length === 0) {
        return (
            <EmptyCart />
        )
    }

    //variable de estado del modal bootstrap
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    return (
        <>
            <Modal className="text-white" data-bs-theme="dark" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title className="bi bi-cart text-white fs-2"> Carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-container">
                        {
                            cart.map((productCart) => (
                                <div className="modal-box" key={productCart.id}>
                                    <div className="modal-info">
                                        <p>Producto: {productCart.name}</p>
                                        <p>Cantidad: {productCart.quantity}</p>
                                        <p>Precio: US$ {productCart.price}</p>
                                        <button onClick={() => deleteProductById(productCart.id)}>Eliminar</button>
                                    </div>
                                    <div className="modal-image">
                                        <img className='modalImageCustom' src={productCart.image[0]} alt="" />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <h3 className="modal-total">TOTAL: US$ {totalPrice()}</h3>
                </Modal.Body>
                <Modal.Footer>
                   
                        <button className="custom-button-Link">
                        <Link className="custom-Link" to="/checkout">Terminar compra</Link>
                        </button>
                    <button className="custom-button-Link custom-Link" onClick={deleteCart}>
                        Vaciar carrito
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Cart;