import React, { useState } from "react";
import axios from "axios";
function  Register()
{
  const[data,setdata]=useState(
    {
      username:"",
      email:"",
      password:""
    }
  )
  const changeName=(e)=>
  {
    setdata({...data,[e.target.name]:e.target.value})

  }
  const submit=async()=>
  {
    try{
      const res = await axios.post("http://localhost:8080/reg",data)
      alert(res.data)

    }
    catch(xyz)
    {
      alert(xyz.response.data)


    }

  }
  return(
    <>
      <h1>I AM APP</h1>
      <input onChange={changeName} name ="username" placeholder="enter username"/>
      <input onChange={changeName} email ="usermail" placeholder="enter email"/>
      <input onChange={changeName} password="username" placeholder="enter password"/>
      <button onClick={submit}>Submit</button>
    </>
  )
}
export default Register;