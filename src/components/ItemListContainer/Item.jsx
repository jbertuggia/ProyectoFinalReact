import { Link } from "react-router-dom"
import './item.css';

const Item = ({ product }) => {
    return (
        <>
            <div className="flex">
                <div className="custom-card">
                    <img src={product.image[0]} />
                    <h3>{product.name}</h3>
                    <p>Stock: {product.stock}</p>
                    <h5>Precio: US$ {product.price}</h5>
                    <div className="LinkContainer">
                        <Link to={"/detail/" + product.id} className="custom-card-Link">Ver detalle</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Item