import { Link } from "react-router-dom"
import './footer.css'
const Footer = () => {

    return (

        <div className="flex-footer-container">
            <Link to="/" className="custom-footer-logo">
                <img src="/img/logo.png" alt="" />
            </Link>
            <div className="custom-gif">
                <img src="./img/nvidia.gif" alt="" />
                <img src="./img/corsair.gif" alt="" />
                <img src="./img/radeon.gif" alt="" />
            </div>

            <div className="custom-info-container">
                <div className="custom-info">
                    <i className="bi text-white bi-instagram fs-5"></i>
                    <p>Pc Lux</p>
                </div>
                
                <div className="custom-info">
                    <i className="bi text-white bi-envelope-at fs-5"></i>
                    <p>pclux@gmail.com</p>
                </div>
                <div className="custom-info">
                    <i className="bi text-white bi-whatsapp fs-5"></i>
                    <p>+541111112222</p>
                </div>
                <div className="custom-info">
                    <i className="bi text-white bi-globe-americas fs-5"></i>
                    <p>Buenos Aires, Argentina 🇦🇷</p>
                </div>
            </div>
        </div>
    )

}
export default Footer