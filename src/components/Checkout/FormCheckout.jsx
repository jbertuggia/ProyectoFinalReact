const FormCheckout = ({handleChangeInput, dataForm, handleSubmitForm}) => {
    return (
        <div className="custom-container-form">
            <form onSubmit={handleSubmitForm} className="custom-form">
                <h1>Chekout</h1>
                <h3>Por favor complete con sus datos para confirmar la compra</h3>
                <label>Nombre completo</label>
                <input type="text" value={dataForm.fullname} name="fullname" onChange={handleChangeInput} />
                <label>Email</label>
                <input type="email" value={dataForm.email} name="email" onChange={handleChangeInput} />
                <label>Corroborar Email</label>
                <input type="email" value={dataForm.email2} name="email2" onChange={handleChangeInput} />
                <label>Teléfono</label>
                <input type="number" value={dataForm.phone} name="phone" onChange={handleChangeInput} />
                <label>Tarjeta de credito 💳</label>
                <input type="number" value={dataForm.tc} name="tc" onChange={handleChangeInput} />
                <label>CVC 💳</label>
                <input type="number" value={dataForm.cvc} name="cvc" onChange={handleChangeInput} />
                <div className="cust-button">
                    <button type="submit" >Enviar</button>
                </div>
            </form>
        </div>
    )
}
export default FormCheckout