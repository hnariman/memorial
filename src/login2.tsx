import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login2() {
  const navigate = useNavigate();
  const [showPasswordReset, setShowPasswordReset] = React.useState(false);
  return (
    <section className="h-screen bg-gray-900 text-white p-4" >
      <div className="md:w-1/2 mx-auto">
        <span onClick={() => navigate(-1)}>
          &larr;
        </span>

        <h1 className="text-center text-lg font-bold my-6">
          Login to your account
        </h1>

        <form action="" className="grid gap-2 w-full my-4">

          <input
            type="email"
            name="email"
            id="email"
            className="p-2 bg-gray-700 rounded-lg"
            placeholder="Email"
          />

          <input
            type="password"
            name="password"
            id="password"
            className="p-2 bg-gray-700 rounded-lg"
            placeholder="Password"
          />

        </form>

        <span
          onClick={() => setShowPasswordReset(true)}
          className="underline text-gray-500 text-sm">
          Forgot password?
        </span>
        {showPasswordReset && (
          <form action="" className="absolute left-0 z-100 p-4 border-gray-500 border rounded-xl bg-gray-900">
            <div className="flex items-baseline gap-2 justify-between">
              <h3 className="text-center my-3 text">
                Send reset link to email
              </h3>
              <span
                onClick={() => setShowPasswordReset(false)}
                className="text-xl">&#10005;</span>
            </div>
            <input type="email" name="email" id="email" placeholder="Email" className="p-3 rounded-lg bg-gray-800 w-full" />
            <input type="submit" value="Send" className="bg-blue-500 text-white p-2 px-3 rounded-lg mt-3 w-full" />
          </form>
        )}

        <button className="rounded-lg bg-blue-500 block p-1 px-4 w-full my-4 hover:opacity-70">
          Log In
        </button>

        <a href="/signin" className="underline text-gray-500 text-sm">
          New User? Sign Up
        </a>

        <p className="text-gray-500 text-center mt-10">
          2022 Memory Lane Inc.
        </p>
      </div>
    </section>
  )
}
