import React from "react";

const UnAuth = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="shadow-2xl shadow-gray-600 rounded p-4">
        <h2 className="text-2xl capitalize">this page is only for admins</h2>
      </div>
    </div>
  );
};

export default UnAuth;
