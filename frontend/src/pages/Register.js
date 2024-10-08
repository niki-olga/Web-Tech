import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const Register = () => {
  let {registerUser} = useContext(AuthContext)

  return (
    <div>
      <h1 className='logintitle'>Register</h1>
      <div className='loginform'>
        <form className='form' onSubmit={registerUser}>
          <div>
            <label className='labelform'>Email</label>
            <input type='email' name='email' className='inputarea'></input>
          </div>
          <div>
            <label className='labelform'>Username</label>
            <input type='text' name='username' className='inputarea'></input>
          </div>
          <div>
            <label className='labelform'>Password</label>
            <input type='password' name='password' className='inputarea'></input>
          </div>
          <div>
            <label className='labelform'>Confirm Password</label>
            <input type='password' name='password2' className='inputarea'></input>
          </div>
          <button className='buttonsubmit' type='submit'>Register</button>
        </form>
      </div>  
    </div>
  )
}

export default Register
