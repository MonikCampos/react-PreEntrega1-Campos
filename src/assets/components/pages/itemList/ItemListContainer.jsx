import ItemList from "./ItemList"

const ItemListContainer = () => {
    let saludo = "Bienvenida a Nuestra Joyería"

    return (
        <ItemList saludo={saludo} />
    )
}

export default ItemListContainer