import { useState } from 'react';
import { Link } from "react-router-dom"
import './styles.css'

//import de bootrtrap
import Modal from 'react-bootstrap/Modal';

const EmptyCart = () => {

        const [show, setShow] = useState(true);
        const handleClose = () => setShow(false);
      
      
        return (
          <>
            <Modal className="text-white" data-bs-theme="dark" show={show} onHide={handleClose} backdrop="static" keyboard={false} centered>
              <Modal.Header>
                <Modal.Title>Upps...</Modal.Title>
              </Modal.Header>
              <Modal.Body>El carrito esta vacío...😪</Modal.Body>
              <Modal.Footer>
                <button className="custom-btn-Link" onClick={handleClose}>
                  <Link className="cust-Link" to ="/" >Volver</Link>
                </button>
              </Modal.Footer>
            </Modal>
          </>
        );
      }
      
      export default EmptyCart;