import React, { useState } from "react";
import dataContext from "../contexts/dataContext.js";

const DataProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  const getData = async () => {
    const res = await fetch("http://localhost:3000/contacts");
    const data = await res.json();
    setContacts(data);
  };

  return (
    <dataContext.Provider
      value={{
        contacts,
        setContacts,
        getData,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
