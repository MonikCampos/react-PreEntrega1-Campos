import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import CardWidgetContainer from "../../common/cartWidget/CartWidgetContainer"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navContainer">
      <div className="containerBrand">
        <img src="https://res.cloudinary.com/dawadzlfe/image/upload/v1687220283/CODER-React/logo2_dhd8p2.png" alt="Joyería Luxury" />
        <h1 className="brandText">Joyería Luxury</h1>
      </div>
        
      <div className="containerCategories">
        <Button sx={{ color: "#F2CEDB" }}>Todos</Button>
        <Button sx={{ color: "#F2CEDB" }}>Anillos</Button>
        <Button sx={{ color: "#F2CEDB" }}>Dijes</Button>
        <Button sx={{ color: "#F2CEDB" }}>Aros</Button>
        <Button sx={{ color: "#F2CEDB" }}>Pulseras</Button>
      </div>
    <CardWidgetContainer />
    </div>
  )
}

export default Navbar