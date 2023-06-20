import Home from "./Home"

const HomeContainer = () => {
    // logica
    //le mandamos al home lo que necesite como props
    let nombre = "Mónica"
    return (
        <Home nombre={nombre}/>
    )
}

export default HomeContainer