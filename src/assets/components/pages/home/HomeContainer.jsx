
import ItemList from "../itemList/ItemList"
import "./Home.css"

const HomeContainer = ({usuario,saludo}) => {
    return (
        <div>
            <h2>Hola {usuario}</h2>
            <ItemList saludo={saludo}/>
        </div>
    )
}

export default HomeContainer