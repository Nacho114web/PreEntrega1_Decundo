import './NavBar.css'
import logo from './assets/logo.png'
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () =>{
    return (
        <nav className="navBarContainer">
            <img src= {logo} alt="logo de LeoMás" />
            <button className="navBarButton">Libros Nuevos</button>
            <button className="navBarButton">E-books</button>
            <button className="navBarButton">Libros Usados</button>
            <CartWidget></CartWidget>
        </nav>
    );
}
export default NavBar;