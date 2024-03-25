import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

export default function SignIN() {
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
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
      setLoading(false);
      return;
    }
    const res = await fetch('/api/auth/signin',{
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
    navigate('/')
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
          {loading? 'Loading...':'SIGNIN'}
        </button>
      </form>
      <div className="flex justify-center gap-2 my-2">
        <p>Have Alredy account?</p>
        <Link to='/sign-up' className="text-blue-500 hover:underline">Sign-Up</Link>
      </div>
      {error &&<p className="text-red-500">{error}</p>}
    </div>
  );
}
