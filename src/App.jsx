import { BrowserRouter , Route, Routes } from "react-router-dom"
import Register from "./components/Register"
import Login from "./components/Login"
import Products from "./components/Products"
import NewProducts from "./components/NewProducts"
import SendDocument from "./components/SendDocument"
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/new-products" element={<NewProducts/>}/>
          <Route path="/send" element={<SendDocument/>}/>
        </Routes>
      </BrowserRouter>
    
    
    
    </>
  )
}

export default App