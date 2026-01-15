import React, { useState } from "react";
import DataContext from "../contexts/DataContext.js";

const DataProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

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
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
