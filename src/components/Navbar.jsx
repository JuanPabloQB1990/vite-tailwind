import React from 'react'
import {NavLink} from 'react-router-dom'
import {useContext} from 'react'
import { UserContext } from '../context/UserProvider'

const Navbar = () => {

    const {user, cerrarSesion} = useContext(UserContext)

    const handleCerrar = async() => { 
        try {
            await cerrarSesion()
        } catch (error) {
            //console.log(error);
        }
        
     }

  return (
    <div>
        {user ? (
            <>
                <NavLink to='/'>Home</NavLink>
                <button onClick={handleCerrar}>Cerrar</button>
            </>

        ): (
            <>
                <NavLink to='/login'>Login</NavLink>
                <NavLink to='/register'>Register</NavLink>
            </>
        )}
    </div>
  )
}

export default Navbar