// Login.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useSignInWithEmailPasswordMutation } from "../features/auth-api";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  // RTK Query hooks
  const [SignIn, { isLoading: isEmailLoading, error: emailError }] =
    useSignInWithEmailPasswordMutation();

  const isLoading = isEmailLoading;
  const error = emailError;

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const result = await SignIn(user).unwrap();
      if (result) {
        navigate("/");
      }
    } catch (err) {
      // Error is already in error state
      console.error("Login failed:", err);
    }
  };

  // const handleSocialLogin = async (provider, providerName) => {
  //   try {
  //     const result = await socialLogin({ provider, providerName }).unwrap();
  //     if (result) {
  //       navigate("/");
  //     }
  //   } catch (err) {
  //     console.error("Social login failed:", err);
  //   }
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={onSubmitHandler}>
          <div>
            <label className="block text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              name="email"
              type="email"
              value={user.email}
              placeholder="Enter your email"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={onChangeHandler}
              disabled={isLoading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              name="password"
              value={user.password}
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={onChangeHandler}
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full px-4 py-2 rounded text-white transition-colors ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {isEmailLoading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* <div className="mt-4 space-y-2">
          <button
            onClick={() => handleSocialLogin(googleProvider, "google")}
            disabled={isLoading}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors disabled:bg-gray-400"
          >
            {isSocialLoading ? "Processing..." : "Sign in with Google"}
          </button>
          <button
            onClick={() => handleSocialLogin(githubProvider, "github")}
            disabled={isLoading}
            className="w-full px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900 transition-colors disabled:bg-gray-400"
          >
            {isSocialLoading ? "Processing..." : "Sign in with GitHub"}
          </button>
        </div> */}

        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:underline">
            Sign up
          </Link>
        </p>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-center">{error.message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
