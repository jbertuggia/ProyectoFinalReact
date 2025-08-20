import CartWidget from "./CartWidget"
import { Link, } from "react-router-dom";
import './navbar.css'
import 'animate.css'

const NavBar = () => {
    return (
        <div>
            <nav className=" customnavbar navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="container-fluid container-fluid d-flex justify-content-between align-items-center">
                    <Link to="/" className="customlogo">
                        <img src="/img/logo.png" alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/category/Cpu" className="nav-link text-light fs-2">Procesadores</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/Gpu" className="nav-link text-light fs-2" >Placas de video</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/Ram" className="nav-link text-light fs-2" >Memoria RAM</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/category/Periferico" className="nav-link text-light fs-2" >Periféricos</Link>
                            </li>
                        </ul>
                    </div>
                        <CartWidget />
                </div>

            </nav>

        </div>
    )
}
export default NavBar;


