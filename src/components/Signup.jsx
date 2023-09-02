import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div className="max-w-[700px] mx-auto py-16 p-4">
      <div className="text-2xl font-bold py-2">
        <h1>Sign Up for a free account</h1>
        <p className="py-2">
          Already have an account yet?
          <Link to="/" className="underline pl-1">
            Sign in
          </Link>
        </p>
        <form>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Email</label>
            <input className="border py-3" type="email" />
          </div>
          <div className="flex flex-col py-2">
            <label className="py-2 font-medium">Password</label>
            <input className="border py-3" type="password" />
          </div>
          <button className="border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default Signup