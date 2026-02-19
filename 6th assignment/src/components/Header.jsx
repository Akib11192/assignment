import React from "react";
import { Link } from "react-router-dom";
import {
  useGetCurrentUserQuery,
  useSignOutMutation,
} from "../features/auth-api";
import { getAuth } from "../contexts/AuthContext";
// import { useAuth } from "../hooks/useAuth";

const Header = () => {
  // getAuth();
  const { data: user, isLoading, error } = useGetCurrentUserQuery();
  console.log(user);
  const [signOut] = useSignOutMutation();
  return (
    <div className="flex flex-row justify-between p-4 shadow-2xl shadow-gray-700">
      <h2>shopDot</h2>
      <nav className="flex gap-3">
        <Link to="/">Shop</Link>
        {user ? (
          <button className="p-2 bg-red-400" onClick={signOut}>
            Logout
          </button>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
        <Link to="/cart">Cart</Link>
        {/* <Link to="/add-product">Add product</Link> */}
      </nav>
    </div>
  );
};

export default Header;
