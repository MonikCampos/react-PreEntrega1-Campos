import Navbar from './assets/components/layout/navbar/Navbar'
import HomeContainer from './assets/components/pages/home/HomeContainer'
import ItemListContainer from './assets/components/pages/itemList/itemListContainer'


function App() {
  let nombre = "Mónica"
  const saludo = "Bienvenido a Nuestra Joyería "
  return (
    <div>
      <Navbar />
      <HomeContainer nombre={nombre} />
      <ItemListContainer saludo={saludo} />
    </div>
        
  )
}

export default App
