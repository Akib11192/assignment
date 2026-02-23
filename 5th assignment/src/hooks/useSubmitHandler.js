const useSubmitHandler = () => {
  const submitHandler = async (
    contact,
    setContact,
    id,
    setNewContact,
    getData,
  ) => {
    if (id) {
      await fetch(`https://fiveth-assignment.onrender.com/contacts/${id}`, {
        method: "PATCH",
        body: JSON.stringify({ ...contact }),
        headers: {
          "content-type": "application/json",
        },
      });
      // setEditId("");
      return;
    }

    await fetch("https://fiveth-assignment.onrender.com/contacts", {
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
    getData();
  };
  return { submitHandler };
};

export default useSubmitHandler;
