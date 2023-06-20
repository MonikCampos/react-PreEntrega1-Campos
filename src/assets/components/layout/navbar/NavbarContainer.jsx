import CardWidgetContainer from "../../common/cartWidget/CartWidgetContainer"
import "./Navbar.css"

const NavbarContainer = () => {
    return (
        <div className="navContainer">
            <img src="https://res.cloudinary.com/dawadzlfe/image/upload/v1687220283/CODER-React/logo2_dhd8p2.png" alt="" />
            <ul className="containerCategories">
                <li><a href="#">Todos</a></li>
                <li><a href="#">Anillos</a></li>
                <li><a href="#">Dijes</a></li>
                <li><a href="#">Aros</a></li>
                <li><a href="#">Pulceras</a></li>
            </ul>
            <CardWidgetContainer />
        </div>
    )
}

export default NavbarContainer