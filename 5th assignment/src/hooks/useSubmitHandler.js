const useSubmitHandler = () => {
  const submitHandler = async (contact, setContact, editId, setEditId) => {
    if (editId) {
      await fetch(`http://localhost:3000/contacts/${editId}`, {
        method: "PATCH",
        body: JSON.stringify({ ...contact }),
        headers: {
          "content-type": "application/json",
        },
      });
      setEditId("");
      return;
    }

    await fetch("http://localhost:3000/contacts", {
      method: "POST",
      body: JSON.stringify(contact),
      headers: {
        "content-type": "application/json",
      },
    });
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
