import { useRef } from "react"
import { useNavigate } from "react-router-dom"

const Register = () => {
     /* hook para capturar el formulario en una avriable */
     const formRef = useRef(null)
     const navigate = useNavigate()
 
     const handleSubmit = async (e) => {
         e.preventDefault()
         /* consultamos por el estado actual del formulario (nos muestra el formulario html en consola)*/
         console.log(formRef.current)
         /* transformamos el html capturado en un obj */
         const dataForm = new FormData(formRef.current)
         console.log(dataForm)
         /* tambien tenemos otra opcion de transformarlo a un obj simple */
         const data = Object.fromEntries(dataForm)
         console.log(data)
         /* como ya tenemos los datos del form hacemos la conexion */
         const response = await fetch('http://localhost:4000/api/sessions/register',{
             method:'POST',
             headers:{
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
        <h2>Formulario Register</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-3">
                <label htmlFor="first_name" className="form-label">Nombre</label>
                <input type="text" name ="first_name"className="form-control"  />
            </div>
            <div className="mb-3">
                <label htmlFor="last_name" className="form-label">Apellido</label>
                <input type="text" name ="last_name"className="form-control"  />
            </div>
            <div className="mb-3">
                <label htmlFor="age" className="form-label">Edad</label>
                <input type="number" name ="age"className="form-control"  />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name ="email"className="form-control"  />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name ="password"className="form-control"  />
            </div>
            <button type="submit" className="btn btn-primary">Registrarse</button>
           
        </form>

    
    </div>
  )
}

export default Register