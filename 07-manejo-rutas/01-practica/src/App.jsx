import { Route, Routes } from "react-router-dom"
import { NavBar } from "./components/NavBar"
import { Home } from "./pages/Home"
import { AboutUs } from "./pages/AboutUs"
import { Store } from "./pages/Store"
import { Cart } from "./pages/Cart"
import { NotFound } from "./pages/NotFound"


export const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home/>}/> {/* Home */}
        <Route path="/about" element={<AboutUs/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/carrito" element={<Cart/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>

  )
}