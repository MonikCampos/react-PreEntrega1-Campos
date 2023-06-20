import "./ItemList.css" 

const ItemList = ( {apellido, saludo} ) => {
    return (
        <div><h1>{saludo} {apellido}</h1></div>
    )
}

export default ItemList