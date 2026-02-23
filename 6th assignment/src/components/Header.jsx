import React, { use } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import {
  useGetCurrentUserQuery,
  useSignOutMutation,
} from "../features/auth-api";

const Header = () => {
  const navigate = useNavigate();
  const { data: user, isLoading, error } = useGetCurrentUserQuery();
  const [signOut] = useSignOutMutation();
  return (
    <div className="flex flex-row justify-between items-center p-4 shadow-2xl shadow-gray-700">
      <h2 className="text-2xl uppercase">shop,Dot</h2>
      <nav className="flex items-center gap-3">
        <Link to="/" className="shadow-gray-800 shadow-2xl px-4 py-2">
          Shop
        </Link>

        <Link to="/cart" className="shadow-gray-800 shadow-2xl px-4 py-2">
          Cart
        </Link>
        {user?.role === "admin" && (
          <Link
            to="/add-product"
            className="shadow-gray-800 shadow-2xl px-4 py-2"
          >
            Add product
          </Link>
        )}
        {user ? (
          <button
            className="rounded cursor-pointer bg-red-300 shadow-gray-800 shadow-2xl px-4 py-2"
            onClick={() => {
              signOut();
              navigate("/login");
            }}
          >
            Logout
          </button>
        ) : (
          <>
            <Link to="/login" className="shadow-gray-800 shadow-2xl px-4 py-2">
              Login
            </Link>
            <Link
              to="/register"
              className="shadow-gray-800 shadow-2xl px-4 py-2"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Header;
