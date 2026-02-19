import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router";
import { DataContext } from "../contexts/DataContext";
import Modal from "../components/Modal";

const Show = () => {
  const { id } = useParams();
  const { contacts, getData, deleteId, setDeleteId } = useContext(DataContext);
  const contact = contacts.find((contact) => String(contact.id) === String(id));
  useEffect(() => {
    if (contacts.length === 0) {
      getData();
    }
  }, [contacts]);
  return (
    <div className="max-w-4xl mt-5 m-auto [@media(min-width:900px)]:rounded overflow-hidden bg-white">
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
        <div className="flex flex-col md:flex-row items-start">
          <label
            htmlFor="first_name"
            className="md:w-1/4 font-bold text-2xl  p-1"
          >
            First name
          </label>
          <p className="text-gray-800 text-xl md:w-3/4 p-2">
            {contact.first_name}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <label
            htmlFor="first_name"
            className="md:w-1/4 font-bold text-2xl  p-1"
          >
            Last name
          </label>
          <p className="text-gray-800 text-xl md:w-3/4 p-2">
            {contact.last_name}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <label
            htmlFor="first_name"
            className="md:w-1/4 font-bold text-2xl  p-1"
          >
            Email
          </label>
          <p className="text-gray-800 text-xl md:w-3/4 p-2">{contact.email}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <label
            htmlFor="first_name"
            className="md:w-1/4 font-bold text-2xl  p-1"
          >
            Phone
          </label>
          <p className="text-gray-800 text-xl md:w-3/4 p-2">{contact.phone}</p>
        </div>
        <div className="flex flex-col md:flex-row items-start">
          <label
            htmlFor="first_name"
            className="md:w-1/4 font-bold text-2xl  p-1"
          >
            Address
          </label>
          <p className="text-gray-800 text-xl md:w-3/4 p-2 line-clamp-2">
            {contact.address}
          </p>
        </div>
      </div>
      <div className="my-10 mx-3 flex gap-3">
        <Link
          to={`/edit/${contact.id}`}
          title="Edit"
          className="bg-blue-500 p-2 px-4 text-white rounded hover:bg-blue-600 transition"
        >
          Edit
        </Link>

        <button
          title="Delete"
          className="bg-red-500 p-2 text-white rounded hover:bg-red-600 transition"
          onClick={() => setDeleteId(contact.id)}
        >
          Delete
        </button>
      </div>
      {deleteId ? <Modal deleteId={deleteId} setDeleteId={setDeleteId} /> : ""}
    </div>
  );
};

export default Show;
