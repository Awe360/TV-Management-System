import React, { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../config//firebaseConfig";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/home"); 
    } catch (err) {
      setError(err.message); 
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/home"); 
    } catch (err) {
      setError(err.message); 
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-700">Login</h1>
        {error && <p className="text-sm text-red-500 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-200 rounded focus:outline-none focus:ring focus:ring-indigo-300"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-indigo-600 rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-600 hover:underline"
          >
            Sign Up
          </a>
        </p>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Or login with</p>
          <div className="mt-4 space-y-3">
            <button
              onClick={handleGoogleLogin}
              className="w-full px-4 py-2 text-white bg-red-500 rounded hover:bg-red-400 focus:outline-none focus:bg-red-600"
            >
              Google
            </button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
