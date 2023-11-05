import logo from './logo.svg'

import Home from "./Pantallas/Home"
import Creations from "./Pantallas/Creations"
import Info from "./Pantallas/Info"
import Favoritos from "./Pantallas/Favorites"
import { BrowserRouter, Routes, Route,Link  } from "react-router-dom"


function App() {
  return (
    <BrowserRouter initialRoute="/Home">
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/creations" element={<Creations/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/favs" element={<Favoritos/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}


const Layout = () => {
 return (
   <>
<nav>
<Link to="/home">Home</Link>
<Link to="/creations">Creaciones</Link>
<Link to="/info">Quien Soy</Link>
<Link to="/favs">Favoritos</Link>
</nav>

   </>
 );
};

export default App;
