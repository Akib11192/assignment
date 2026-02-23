// SignUp.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSignUpWithEmailPasswordMutation } from "../features/auth-api";

const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [signUp, { isLoading, isError, error }] =
    useSignUpWithEmailPasswordMutation();
  console.log(error);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await signUp(user).unwrap();
      if (result) {
        navigate("/"); // Auto-login after signup
      }
    } catch (err) {
      console.error("Signup failed:", err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>

        <form className="space-y-4" onSubmit={onSubmitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              name="name"
              value={user.name}
              type="text"
              placeholder="Enter your full name"
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              onChange={onChangeHandler}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="Enter your email"
              onChange={onChangeHandler}
              required
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              name="password"
              value={user.password}
              type="password"
              placeholder="Create a password (min. 6 characters)"
              onChange={onChangeHandler}
              required
              minLength="6"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 rounded-lg text-white font-medium transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isLoading ? "Creating account..." : "Sign Up"}
          </button>
        </form>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
