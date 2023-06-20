// import { FaShoppingCart } from "react-icons/fa";
import "./CartWidget.css"
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CardWidgetContainer = () => {
    return (
        // <div>
        //     <FaShoppingCart className="cartProperties"/>
        // </div>
        <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon sx={{ color: "#F2CEDB" }}/>
        </Badge>
    )
}

export default CardWidgetContainer