import { useRef } from "react"
import { useNavigate } from "react-router-dom"



const Login = () => {

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
        const response = await fetch('http://localhost:4000/api/sessions/login',{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
            
        })
        if(response.status == 200){
            console.log('logeado')
            const datos = await response.json()
            /* iniciamos las coockies */
            document.cookie = `jwtCookie=${datos.token}; expires${new Date(Date.now() +1 *24*60*60*1000).toUTCString()};path=/`
            navigate('/products')

        }else{
            console.log('no logeado')
            console.log(response)
        }


    }
  return (
    <div className="container">
        <h2>Formulario login</h2>
        <form onSubmit={handleSubmit} ref={formRef}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name ="email"className="form-control"  />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name ="password"className="form-control"  />
            </div>
            <button type="submit" className="btn btn-primary">Iniciar sesion</button>
           
        </form>

    
    </div>
  )
}

export default Login