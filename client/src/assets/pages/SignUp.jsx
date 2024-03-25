import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function SignUp() {
  let [formData, setFormData] = useState({})
  let [error,setError] = useState(null)
  let [loading,setLoading] = useState(false)
  let navigate = useNavigate();
  let handleChange= (e)=>{
         setFormData({
          ...formData,
          [e.target.id]:e.target.value,
         })
  }
  

  let handleSubmite=async(e)=>{
   try{
    e.preventDefault();
    setLoading(true)
    if (!formData.username || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    const res = await fetch('/api/auth/signup',{
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(formData),
    })
    let data =await res.json();
    if(data.sucess===false){
      setError(data.message);
      setLoading(false)
      return;
    }
    setLoading(false)
    setError(null)
    navigate('/sign-in')
   }catch(error){
    setError(error.message);
    setLoading(false)
   }
    
  }
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmite}>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg focus:outline-slate-500"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg focus:outline-slate-500"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg focus:outline-slate-500"
          id="password"
          onChange={handleChange}
        />
        <button disabled={loading} className="border p-3 rounded-lg bg-slate-700 text-white hover:bg-slate-600">
          {loading? 'Loading...':'SIGNUP'}
        </button>
      </form>
      <div className="flex justify-center gap-2 my-2">
        <p>Have Alredy account?</p>
        <Link to='/sign-in' className="text-blue-500 hover:underline">Sign-In</Link>
      </div>
      {error &&<p className="text-red-500">{error}</p>}
    </div>
  );
}
