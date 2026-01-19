import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { DataContext } from "../contexts/DataContext";
import Modal from "../components/Modal";

const Contacts = () => {
  const {
    contacts,
    getData,
    deleteId,
    setDeleteId,
    newContact,
    isEdit,
    setIsEdit,
  } = useContext(DataContext);
  const [appliedSearch, setAppliedSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("default");
  // console.log(sortBy);
  const searchedData = contacts.filter((contact) => {
    const searchLower = appliedSearch.toLowerCase();
    return (
      contact.first_name.toLowerCase().includes(searchLower) ||
      contact.last_name.toLowerCase().includes(searchLower) ||
      contact.email.toLowerCase().includes(searchLower) ||
      contact.phone.includes(searchLower)
    );
  });

  const finalDisplayContacts = [...searchedData].sort((a, b) => {
    if (sortBy === "first_name") {
      return a.first_name.localeCompare(b.first_name);
    }
    if (sortBy === "last_name") {
      return a.last_name.localeCompare(b.last_name);
    }
    if (sortBy === "old_on_first") {
      return Number(a.id) - Number(b.id);
    }
    return Number(b.id) - Number(a.id);
  });

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setAppliedSearch(searchTerm);
  };

  useEffect(() => {
    getData();
  }, [newContact, isEdit]);

  return (
    <div className="max-w-6xl m-auto mt-6 [@media(min-width:1050px)]:rounded overflow-hidden bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center bg-blue-950 py-3 px-2 gap-5">
        <h2 className="font-bold text-3xl text-white">All Contacts</h2>
        <form className="flex flex-row w-2/3" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Search by name, email or phone..."
            className="w-full bg-white text-gray-700 outline-none px-3 py-2 rounded-l-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          {!appliedSearch ? (
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 rounded-r-md text-white font-bold hover:bg-green-600 transition"
            >
              Search
            </button>
          ) : (
            <button
              // type="submit"
              className="px-4 py-2 bg-green-500 rounded-r-md text-white font-bold hover:bg-green-600 transition"
              onClick={() => {
                setAppliedSearch("");
                setSearchTerm("");
              }}
            >
              Clear
            </button>
          )}
        </form>
        <Link
          to="/form"
          className="flex flex-row items-center gap-1.5 py-2.5 px-2  bg-green-500 rounded text-white font-bold"
        >
          <i className="fa-slab fa-regular fa-plus"></i>
          <span className="text-sm line-clamp-1">Add new</span>
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
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="p-2 bg-white border-2 border-green-500 rounded outline-none"
        >
          <option value="default">Default (Recent)</option>
          <option value="first_name">First Name (A - Z)</option>
          <option value="last_name">Last Name (A - Z)</option>
          <option value="old_on_first">Old on First</option>
        </select>
      </div>
      <hr className="bg-gray-700" />
      <div id="contact-list" className="">
        {contacts.length === 0 ? (
          <h2 className="text-gray-600 my-10 uppercase text-center">
            no contacts available
          </h2>
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
                {finalDisplayContacts.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className="text-center py-20 text-gray-400 font-medium"
                    >
                      {searchTerm
                        ? `No results found for "${searchTerm}"`
                        : "No contacts available."}
                    </td>
                  </tr>
                ) : (
                  finalDisplayContacts.map((contact, index) => (
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
                      <td className="px-4 py-3 text-gray-600">
                        {contact.email}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {contact.phone}
                      </td>

                      <td className="px-4 py-3">
                        <div className="flex justify-center gap-2">
                          <Link
                            to={`/show/${contact.id}`}
                            title="Show"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-blue-400 text-blue-500 hover:bg-blue-500 hover:text-white transition"
                            // onClick={() => {
                            //   setShowId(contact.id);
                            // }}
                          >
                            <i className="fa fa-eye text-xs"></i>
                          </Link>

                          <Link
                            to={`/edit/${contact.id}`}
                            title="Edit"
                            className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-400 text-gray-600 hover:bg-gray-600 hover:text-white transition"
                            // onClick={() => {
                            //   setEditId(contact.id);
                            // }}
                          >
                            <i className="fa fa-edit text-xs"></i>
                          </Link>

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
                  ))
                )}
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
