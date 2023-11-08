import logo from './logo.svg'

import Home from "./Pantallas/Home"
import Creations from "./Pantallas/Creations"
import Info from "./Pantallas/Info"
import Favoritos from "./Pantallas/Favorites"
import Layout from './Pantallas/Layout'
import { BrowserRouter, Routes, Route,Link  } from "react-router-dom"


function App() {
  return (
    <BrowserRouter initialRoute="/home">
      
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/creations" element={<Creations/>}/>
        <Route path="/info" element={<Info/>}/>
        <Route path="/favs" element={<Favoritos/>}/>
        </Route>
      </Routes>
      
    </BrowserRouter>
  )
}





export default App;
