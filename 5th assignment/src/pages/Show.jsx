import React, { useContext } from "react";
import { Link } from "react-router";
import { DataContext } from "../contexts/DataContext";

const Show = () => {
  const { contacts, showId, setShowId } = useContext(DataContext);
  const contact = contacts.filter((contact) => contact.id === showId);
  console.log(contact);
  return (
    <div className="max-w-4xl mt-5 m-auto rounded overflow-hidden bg-white">
      <div className="p-4 bg-blue-950 flex flex-row justify-between items-center">
        <h2 className=" font-bold text-2xl text-white">Contact Details</h2>
        <Link
          to="/"
          className="text-white flex flex-row justify-between items-center gap-1.5 bg-blue-500 py-1 px-3 rounded"
        >
          <i className="fa-solid fa-arrow-left"></i>Back
        </Link>
      </div>
      <div className="m-4 flex flex-col gap-4 ">
        <div className="flex flex-row items-start">
          <label htmlFor="first_name" className="w-1/4 font-bold text-2xl  p-1">
            First name
          </label>
          <p className="text-gray-800 text-xl w-3/4 p-2">
            {contact[0].first_name}
          </p>
        </div>
        <div className="flex flex-row items-start">
          <label htmlFor="first_name" className="w-1/4 font-bold text-2xl  p-1">
            Last name
          </label>
          <p className="text-gray-800 text-xl w-3/4 p-2">
            {contact[0].last_name}
          </p>
        </div>
        <div className="flex flex-row items-start">
          <label htmlFor="first_name" className="w-1/4 font-bold text-2xl  p-1">
            Email
          </label>
          <p className="text-gray-800 text-xl w-3/4 p-2">{contact[0].email}</p>
        </div>
        <div className="flex flex-row items-start">
          <label htmlFor="first_name" className="w-1/4 font-bold text-2xl  p-1">
            Phone
          </label>
          <p className="text-gray-800 text-xl w-3/4 p-2">{contact[0].phone}</p>
        </div>
        <div className="flex flex-row items-start">
          <label htmlFor="first_name" className="w-1/4 font-bold text-2xl  p-1">
            Address
          </label>
          <p className="text-gray-800 text-xl w-3/4 p-2 line-clamp-2">
            {contact[0].address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Show;
