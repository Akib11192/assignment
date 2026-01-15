import React, { useState } from "react";
import { DataContext } from "../contexts/DataContext";

const DataProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
  const [editId, setEditId] = useState("");
  const [deleteId, setDeleteId] = useState("");
  const [showId, setShowId] = useState("");

  const getData = async () => {
    const res = await fetch("http://localhost:3000/contacts");
    const data = await res.json();
    setContacts(data);
  };

  return (
    <DataContext.Provider
      value={{
        contacts,
        setContacts,
        getData,
        editId,
        setEditId,
        showId,
        setShowId,
        deleteId,
        setDeleteId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
