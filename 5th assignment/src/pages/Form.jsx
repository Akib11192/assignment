import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import Input from "../components/Input";
import useSubmitHandler from "../hooks/useSubmitHandler";
import { DataContext } from "../contexts/DataContext";

const Form = () => {
  const { id } = useParams();
  const { submitHandler } = useSubmitHandler();
  const navigation = useNavigate();
  const { contacts, editId, setEditId } = useContext(DataContext);

  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  // const onCencelHandler = (e) => {
  //   navigation("/");
  // };
  useEffect(() => {
    if (id) {
      const foundContact = contacts.find((c) => String(c.id) === String(id));
      if (foundContact) {
        setContact(foundContact);
      }
    } else {
      setContact({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        address: "",
      });
    }
  }, [id, contacts]);
  return (
    <div className=" max-w-4xl mt-5 m-auto [@media(min-width:900px)]:rounded overflow-hidden">
      <div className="p-4 bg-blue-950 flex flex-row justify-between items-center">
        <h2 className=" font-bold text-2xl text-white">
          {id ? "Edit Form" : "Add New Contact"}
        </h2>
      </div>
      <form
        action=""
        className="bg-white py-5 flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler(contact, setContact, id);
          navigation("/");
        }}
      >
        <Input
          id="first_name"
          type="text"
          name="first_name"
          label="First Name"
          value={contact.first_name}
          onChange={onChangeHandler}
        />
        <Input
          id="last_name"
          type="text"
          name="last_name"
          label="Last Name"
          value={contact.last_name}
          onChange={onChangeHandler}
        />
        <Input
          id="email"
          type="email"
          name="email"
          label="Email"
          value={contact.email}
          onChange={onChangeHandler}
        />
        <Input
          id="phone"
          type="tel"
          name="phone"
          label="Phone"
          value={contact.phone}
          onChange={onChangeHandler}
        />
        <div className="flex flex-col md:flex-row justify-between items-start px-10 gap-3">
          <label htmlFor="address" className="font-semibold text-[18px]">
            Address
          </label>
          <textarea
            name="address"
            id="address"
            rows="3"
            className="w-full md:w-3/4 p-2 border outline-none border-gray-300 rounded focus:ring-2 focus:ring-blue-400"
            value={contact.address}
            onChange={onChangeHandler}
          ></textarea>
        </div>
        <hr />
        <div className="flex flex-row gap-2 pl-10">
          <input
            type="submit"
            value={id ? "Save" : "Submit"}
            className="bg-blue-500 p-2 text-white rounded hover:bg-blue-600 transition"
          />
          <Link
            to="/"
            className="text-white flex flex-row justify-between items-center gap-1.5 bg-blue-500 py-1 px-3 rounded"
            onClick={() => {
              setEditId("");
            }}
          >
            <i className="fa-solid fa-arrow-left"></i>Back
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
