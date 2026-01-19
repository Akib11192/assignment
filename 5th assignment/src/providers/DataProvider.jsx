import React, { useEffect, useState } from "react";
import { DataContext } from "../contexts/DataContext";

const DataProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [newContact, setNewContact] = useState([]);
  const [isEdit, setIsEdit] = useState(!false);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/contacts");
    const data = await res.json();
    setContacts(data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <DataContext.Provider
      value={{
        contacts,
        setContacts,
        getData,
        editId,
        setEditId,
        deleteId,
        setDeleteId,
        newContact,
        setNewContact,
        isEdit,
        setIsEdit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
