import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate, Link } from 'react-router-dom';

function Signup(prop) {

    const navigate=useNavigate();
    const [values, setValues]=useState({name:"", username:"", password:""});
    const [submitted, setSubmmited]=useState(false)
    const [error, setError]=useState(" ")

    function handleChange(e){ // handle changes in the inputs
        const name=e.target.name;
        const value=e.target.value;
        if(!(name==="name" && value.length>15 ) || !(name==='username' || value.length>15 || value.length<8 )){
          setValues(
            {
                ...values,
                [name]:value
            }
          )
        }   
    }
    
    function submit(e){ // submit the data
        setSubmmited(true)
          e.preventDefault();
    }

      useEffect(()=>{  // upload data to backend
        if(values.username!=="" && submitted){
          setSubmmited(false)
          axios.post("https://chat-app-backend-production-bd09.up.railway.app/signup", {name:values.name, username:values.username, password:values.password})
          .then((response)=>{
            if(response.data.status==="valid"){
              console.log(response.data.status)
              // setting data to username
              localStorage.setItem("username", response.data.username);
              localStorage.setItem('isLoggedIn', true)
              localStorage.setItem("token",response.data.token);
              localStorage.setItem('name', values.name);
              setLoading(false) //stopped loading
              setError("") // reving all errors
            }
            else{
                setError(response.data)
              }
        })
        .catch((err)=>{
            setLoading(false)
            console.log(err.message)
        })
    }    
      }, [submitted])


  return (
    <div className="login signup enter-page">
      <form onSubmit={submit} className="detail-form">
        <h1>SIGNUP!</h1>
        <input type="text" name="name" onChange={(e)=>{handleChange(e)}} value={values.name} placeholder='name'/>
        <input type="text" name="username" onChange={(e)=>{handleChange(e)}} value={values.username} placeholder='Username'/>
        <input type="password" name="password" onChange={(e)=>{handleChange(e)}} value={values.password} placeholder='Password'/>
        <p className='error'>{error}</p>
        <p>Already have an Account? <Link to="/login">Login</Link></p>
        <button type='submit'>Create  →</button>
      </form> 
    </div>
  )
}

export default Signup
