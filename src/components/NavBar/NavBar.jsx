import CartWidget from "./CartWidget"
import { Link, } from "react-router-dom";
import './navbar.css'
import 'animate.css'

const NavBar = () => {
    return (
        <div>

            <nav className="navbar bg-dark customnavbar">
                <div className="container-fluid customcontainer">
                <Link to="/" className="customlogo">
                <img src="/img/logo.png" alt="" />
                </Link>
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/category/Cpu" className="nav-link text-light fs-2">Procesadores</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/category/Gpu"className="nav-link text-light fs-2" href="#">Placas de video</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/category/Ram" className="nav-link text-light fs-2" href="#">Memoria RAM</Link>
                        </li>
                        <li className="nav-item">
                            <Link to= "/category/Periferico" className="nav-link text-light fs-2" href="#">Periféricos</Link>
                        </li>
                    </ul>
                    <CartWidget />
                </div>
            </nav>

        </div>
    )
}
export default NavBar;


