import React from 'react'
import { useRef } from 'react'

export default function SignUp() {

   var firstNameRef = useRef()
   var lastNameRef = useRef()


   const handleSubmit = (e) =>{
    e.preventDefault()
        const data = {
            fnm: firstNameRef.current.value,
            lnm: lastNameRef.current.value
        }
        console.log(data)
   }

  return (
    <div>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
        First Name: <input type='text' ref={firstNameRef} placeholder='Enter First Name' /><br />
        Last Name: <input type='text' ref={lastNameRef} placeholder='Enter Last Name'/><br />

        <input type='submit' value='Sign Up'/>
        </form>
    </div>
  )
}
