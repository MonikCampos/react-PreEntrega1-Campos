import ItemList from "./ItemList"

function ItemListContainer({ saludo }) {

    let apellido = "Usuario"

    return (
        <ItemList apellido={apellido} saludo={saludo} />
    )
}

export default ItemListContainer