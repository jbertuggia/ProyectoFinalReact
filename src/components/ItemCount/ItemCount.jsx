import { useState } from "react"
import './itemCount.css'

const ItemCount = ({ stock, addProductInCart }) => {
  const [count, setCount] = useState(1)

  const handleClickRemove = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  const handleClikAdd = () => {
    if (count < stock)
      setCount(count + 1)
  }

  return (
    <div className="flex-itemcount">
      <div className="flex-buttons">
        <div className="flex-countNumber">
          <p>{count}</p>
        </div>
        <div className="flex-buttons-addRemove">
          <button onClick={handleClickRemove}>-</button>
          <button onClick={handleClikAdd}>+</button>
        </div>
      </div>
      <div className="button-addProduct">
        <button className="custom-button" onClick={() => addProductInCart(count)}>
          <span className="textWeb">Agregar Producto</span>
          <span className="textMobile">Agregar</span>
          
          </button>
      </div>
    </div>
  )
}
export default ItemCount