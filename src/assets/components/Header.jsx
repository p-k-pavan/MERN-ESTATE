import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-slate-200 shadow">
      <div className="flex justify-between items-center max-w-6xl mx-auto ">
        <Link to="/">
          <h1 className="text text-sm sm:text-xl font-bold flex flex-wrap p-3">
            <span className="text-slate-500">PK</span>
            <span className="text-slate-700">ESTATE</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-0 sm:p-2 rounded-full flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent mx-2 focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-800 sm:ml-10" />
        </form>

        <ul className="flex gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/sign-in">
            <li className="text-slate-700 hover:underline cursor-pointer">
              SignIn
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
