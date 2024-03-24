import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg focus:outline-slate-500"
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg focus:outline-slate-500"
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg focus:outline-slate-500"
          id="password"
        />
        <button className="border p-3 rounded-lg bg-slate-700 text-white hover:bg-slate-600">
          SING UP
        </button>
      </form>
      <div className="flex justify-center gap-2 my-2">
        <p>Have Alredy account?</p>
        <Link to='/sign-in' className="text-blue-500 hover:underline">Sign-In</Link>
      </div>
    </div>
  );
}
