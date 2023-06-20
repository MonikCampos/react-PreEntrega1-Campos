import HomeContainer from "./HomeContainer"

const Home = () => {
    let usuario = "Mónica"
    let saludo = "Bienvenida a Nuestra Joyería"
    return <HomeContainer usuario={usuario} saludo={saludo}/>
};

export default Home;
