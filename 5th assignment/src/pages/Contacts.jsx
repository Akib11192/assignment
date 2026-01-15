import React, { useContext, useEffect } from "react";
import { Link } from "react-router";
import { DataContext } from "../contexts/DataContext";
import Modal from "../components/Modal";

const Contacts = () => {
  const {
    contacts,
    getData,
    setEditId,
    showId,
    setShowId,
    deleteId,
    setDeleteId,
  } = useContext(DataContext);
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="max-w-6xl m-auto mt-6 rounded overflow-hidden bg-white">
      <div className="flex flex-row justify-between items-center bg-blue-950 py-3 px-2 gap-5">
        <h2 className="font-bold text-3xl text-white">All Contacts</h2>
        <form action="" className="flex flex-row w-2/3">
          <input
            type="text"
            placeholder="Search Contact"
            className="w-full  bg-white text-gray-700 outline-none  px-3 py-2 rounded-l-md"
          />
          <input
            type="submit"
            value="Search"
            className="px-4 py-2 bg-green-500 rounded-r-md text-white font-bold"
          />
        </form>
        <Link
          to="/form"
          className="flex flex-row items-center gap-1.5 p-2 bg-green-500 rounded text-white font-bold"
        >
          <i className="fa-slab fa-regular fa-plus"></i>
          <span className="hidden lg:block">Add new</span>
        </Link>
      </div>
      <div
        id="fillter-section"
        className="flex flex-row items-center justify-between px-5 my-5"
      >
        <div className="flex flex-row items-center justify-between font-bold text-2xl gap-3">
          <i className="fa-solid fa-filter text-green-500"></i>
          <p className="">Fillter</p>
        </div>
        <select
          name=""
          id=""
          className="p-2 bg-white border-2 border-green-500"
        >
          <option value="default">Default</option>
          <option value="first_name">First Name ( A - Z )</option>
          <option value="last_name">Last Name ( A - Z )</option>
          <option value="old_on_first">Old on First</option>
        </select>
      </div>
      <hr className="bg-gray-700" />
      <div id="contact-list" className="">
        {contacts.length === 0 ? (
          <h2>no data</h2>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">
                    #
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">
                    First Name
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">
                    Last Name
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">
                    Email
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-gray-600">
                    Phone
                  </th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 bg-white">
                {contacts.map((contact, index) => (
                  <tr
                    key={contact.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-4 py-3 text-gray-700">{index + 1}</td>
                    <td className="px-4 py-3 text-gray-700">
                      {contact.first_name}
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {contact.last_name}
                    </td>
                    <td className="px-4 py-3 text-gray-600">{contact.email}</td>
                    <td className="px-4 py-3 text-gray-600">{contact.phone}</td>

                    <td className="px-4 py-3">
                      <div className="flex justify-center gap-2">
                        {/* Show */}
                        <Link
                          to="/show"
                          title="Show"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white transition"
                          onClick={() => {
                            setShowId(contact.id);
                          }}
                        >
                          <i className="fa fa-eye text-xs"></i>
                        </Link>

                        {/* Edit */}
                        <Link
                          to="/form"
                          title="Edit"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white transition"
                          onClick={() => {
                            setEditId(contact.id);
                          }}
                        >
                          <i className="fa fa-edit text-xs"></i>
                        </Link>

                        {/* Delete */}
                        <button
                          title="Delete"
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-red-400 text-red-500 hover:bg-red-500 hover:text-white transition"
                          onClick={() => setDeleteId(contact.id)}
                        >
                          <i className="fa fa-times text-xs"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {deleteId ? <Modal deleteId={deleteId} setDeleteId={setDeleteId} /> : ""}
    </div>
  );
};

export default Contacts;
