import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";
import './itemdetail.css'

const ItemDetail = ({ product }) => {

  const [showItemCount, setShowItemCount] = useState(true)
  const [currentImage, setCurrentImage] = useState(product.image[0]);
  const { addProduct } = useContext(CartContext)
  const images = product.image.filter((image) => image !== currentImage)
  const addProductInCart = (count) => {
    const productCart = { ...product, quantity: count }
    addProduct(productCart)
    setShowItemCount(false)
  }

  return (
    <>
      <div className="flex-detail">
        <div className="custom-card-detail">
          <div className="custom-secondary-images">
            {
              images.map((image) => (
                <img src={image} key={image} onClick={() => setCurrentImage(image)} />
              ))
            }
          </div>
          <img src={currentImage} />
          <div className="flex-detail-text">
            <h3>{product.name}</h3>
            <p className="productDescription">{product.description}</p>
            <p>Stock: {product.stock}</p>
            <h5>Precio: US$ {product.price}</h5>
            {
              showItemCount === true ? (
                <ItemCount stock={product.stock} addProductInCart={addProductInCart} />
              ) : (
                <>
                  <button className="custom-button-Link">
                    <Link className="custom-Link" to="/carrito" >Ver carrito</Link>
                  </button>
                  <button className="custom-button-Link">
                    <Link className="custom-Link" to="/" >Seguir comprando</Link>
                  </button>
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;