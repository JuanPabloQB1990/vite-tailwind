import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserProvider';
import {useNavigate} from 'react-router-dom'

const Register = () => {

const {registerUser } = useContext(UserContext)

const navegate = useNavigate()

const [email, setEmail] = useState("juanpablo@gmail.com");
const [password, setPassword] = useState("123456");

const handleSubmit = async(e) => { 
    e.preventDefault();
    console.log("procesando formulario: ", email, password)

    try {
        await registerUser(email, password)
        console.log("usuario creado");
        navegate("/")
    } catch (error) {
        console.log(error)
    }
 }

  return (
    <div>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder="ingrese Email" value={email} onChange={e => setEmail(e.target.value)}/>
            <input type="password" placeholder="ingrese password" value={password} onChange={e => setPassword(e.target.value)}/>
            <button type="submit">Registrar</button>
        </form>
    </div>
  )
}

export default Register