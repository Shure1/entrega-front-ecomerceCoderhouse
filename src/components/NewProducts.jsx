import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { getCookiesByName } from "../utils/getCookies"

const NewProducts = () => {
    /* hook para capturar el formulario en una avriable */
    const formRef = useRef(null)
    const navigate = useNavigate()

    const handleSumbit= async(e) => {
        e.preventDefault()
        /* consultamos por el estado actual del formulario (nos muestra el formulario html en consola)*/
        console.log(formRef.current)
        /* transformamos el html capturado en un obj */
        const dataForm = new FormData(formRef.current)
        console.log(dataForm)
        /* tambien tenemos otra opcion de transformarlo a un obj simple */
        const data = Object.fromEntries(dataForm)
        /* buscamos el token */
        const token = getCookiesByName('jwtCookie')
        console.log(token)
        /* como ya tenemos los datos del form hacemos la conexion */
        const response = await fetch('http://localhost:4000/api/products',{
            method:'POST',
            headers:{
                'Authorization':`${token}`,
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
            
        })
        if(response.status == 200){
            const datos = await response.json()
            console.log(datos)
            navigate('/login')

        }else{
            console.log(response)
        }
    }
  return (
  <div className="container">
        <h2>Creacion de nuevo Producto</h2>
        <form onSubmit={handleSumbit} ref={formRef}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Nombre: </label>
                <input type="text" name="title" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Descripcion: </label>
                <input type="text" name="description" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Categoria: </label>
                <input type="text" name="category" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="code" className="form-label">Codigo: </label>
                <input type="text" name="code" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="price" className="form-label">Precio: </label>
                <input type="number" name="price" className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="stock" className="form-label">Stock: </label>
                <input type="number" name="stock" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Crear Producto</button>
        </form>

    </div>
  )
}

export default NewProducts