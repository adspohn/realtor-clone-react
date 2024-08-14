import React, { useState } from "react";
import { Link } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  function onChange(e) {
    setEmail(e.target.value);
  }

  return (
    <section>
      <h1 className="text-3xl text-center mt-6 font-bold">Forgot Password</h1>
      <div className="flex justify-center flex-wrap items-center px-6 py-12 max-w-6xl mx-auto">
        <div className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6">
          <img
            src="https://media.istockphoto.com/id/1455562255/photo/encryption-your-data-unique-digital-lock-big-data-security-safe-your-data-cyber-internet.webp?b=1&s=612x612&w=0&k=20&c=Wbd4SDfhC0j1Y8kWRfs-Kc2UXepC0EQXy7-Rtac8L30="
            //src="https://media.istockphoto.com/id/1469145905/photo/light-filtering-through-a-keyhole.webp?b=1&s=612x612&w=0&k=20&c=KTStAcAUwdx43k3vxs0PvqRXiNz6_4wHng4m8R6zJME="
            //src="https://media.istockphoto.com/id/1493956475/photo/key-ring-hanging-from-a-key-on-a-door.webp?b=1&s=612x612&w=0&k=20&c=8fhVyH2xoWEGAMF5ir_oVM7Y7F8wROxkljr0A79xYWU="
            //src="https://media.istockphoto.com/id/821895542/photo/house-key-in-hand.webp?b=1&s=612x612&w=0&k=20&c=53MnIo0nf7zpw61RXPBiBD_kuFb6kMpx0Nla-6Ihduk="
            alt="keys"
            className="w-full rounded-2xl"
          />
        </div>
        <div className="w-full md:w-[67%] lg:w-[40%] lg:ml-20">
          <form>
            <input
              className="mb-6 w-full px-4 py-2 text-xl text-gray-700 bg-white border-gray-300 rounded transition ease-in-out"
              type="email"
              id="email"
              value={email}
              onChange={onChange}
              placeholder="Email address"
            />
            <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg">
              <p className="mb-6">
                Need an account?
                <Link
                  to="/sign-up"
                  className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
                >
                  {" "}
                  Register
                </Link>
              </p>
              <p>
                <Link
                  to="/sign-in"
                  className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
                >
                  Sign in instead
                </Link>
              </p>
            </div>
            <button
              className="w-full bg-blue-600 text-white px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-blue-700 transition duration-150 ease-in-out hover:shadow-lg active:bg-blue-800"
              type="submit"
            >
              Reset password
            </button>
            <div className="flex items-center my-4 before:border-t before:flex-1  before:border-gray-300 after:border-t after:flex-1  after:border-gray-300">
              <p className="text-center font-semibold mx-4">OR</p>
            </div>
            <OAuth />
          </form>
        </div>
      </div>
    </section>
  );
}
