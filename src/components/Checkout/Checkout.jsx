import { useState, useContext } from "react"
import './checkout.css'
import FormCheckout from "./FormCheckout"
import { CartContext } from "../../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import BuySuccess from "../../UI/BuySuccess.jsx"
import validateForm from "../../utils/validateForms.js"
import { toast } from "react-toastify"

const Checkout = () => {
  const [dataForm, setDataForm] = useState({
    fullname: "",
    phone: "",
    email: "",
    email2: "",
    tc: "",
    cvc: ""
  })

  const [orderId, setOrderId] = useState(null)
  const { cart, deleteCart, totalPrice } = useContext(CartContext)

  const handleChangeInput = (event) => {
    setDataForm({ ...dataForm, [event.target.name]: event.target.value })
  }

  const handleSubmitForm = async (event) => {
    event.preventDefault()
    const order = {
      buyer: { ...dataForm },
      products: [...cart],
      total: totalPrice(),
      date: Timestamp.fromDate(new Date())
    }

    //validamos el formulario:
    const response = await validateForm(dataForm)
    if (response.status === "success") {
      deleteCart()
      await uploadOrder(order)
    } else {
      toast.warning(response.message);
    }
  }

  const uploadOrder = async (newOrder) => {

    try {
      const ordersRef = collection(db, "orders")
      const response = await addDoc(ordersRef, newOrder)
      setOrderId(response.id)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      {
        orderId ? (
          <div>
            <BuySuccess orderId={orderId} />
          </div>
        ) : (

          <FormCheckout
            dataForm={dataForm}
            handleChangeInput={handleChangeInput}
            handleSubmitForm={handleSubmitForm}
          />
        )
      }
    </div>
  )
}
export default Checkout


