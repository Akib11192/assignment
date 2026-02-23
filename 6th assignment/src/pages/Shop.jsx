import React from "react";
import { useGetCurrentUserQuery } from "../features/auth-api";

const Shop = () => {
  const { data: user, isLoading, error } = useGetCurrentUserQuery();
  console.log(user);
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className="p-6 rounded shadow-2xl shadow-gray-500 flex gap-8 flex-col items-center capitalize hover:scale-105 transition-all">
        <h2 className="text-3xl text-amber-600"> welcome to the shop page</h2>
        <p className="text-indigo-600 font-bold">
          {user ? user?.displayName : "Rendom user"}
        </p>
      </div>
    </div>
  );
};

export default Shop;
