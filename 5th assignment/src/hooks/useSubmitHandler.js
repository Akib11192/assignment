const useSubmitHandler = () => {
  const submitHandler = async (
    contact,
    setContact,
    id,
    newContact,
    setNewContact
  ) => {
    if (id) {
      await fetch(`http://localhost:3000/contacts/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ ...contact }),
        headers: {
          "content-type": "application/json",
        },
      });
      // setEditId("");
      return;
    }

    await fetch("http://localhost:3000/contacts", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "content-type": "application/json",
      },
    });
    setNewContact([]);
    setContact({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      address: "",
    });
  };

  return { submitHandler };
};

export default useSubmitHandler;
