import { useState } from "react";
import { Link } from "react-router-dom";
import './styles.css'

//import de bootrtrap
import Modal from 'react-bootstrap/Modal';


const BuySuccess = ({orderId}) => {

    const [show, setShow] = useState(true);
            const handleClose = () => setShow(false);


  return (
    <>
    <Modal className="text-white"  data-bs-theme="dark" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
      <Modal.Header>
        <Modal.Title>Gracias por comprar en PC Lux 😁</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Su número de seguimiento es: {orderId} 
        </Modal.Body>
      <Modal.Footer>
        <button className="custom-btn-Link" onClick={handleClose}>
          <Link className="cust-Link" to ="/" >Volver</Link>
        </button>
      </Modal.Footer>
    </Modal>
  </>
  )
}
export default BuySuccess