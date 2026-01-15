import { useContext } from "react";
import { DataContext } from "../contexts/DataContext";
import { useNavigate } from "react-router";

const useDeleleHandler = () => {
  const navigate = useNavigate();
  const { getData } = useContext(DataContext);
  const deleteHandler = async (isId) => {
    console.log(typeof isId);
    await fetch(`http://localhost:3000/contacts/${isId}`, {
      method: "DELETE",
    });

    getData();
    navigate("/");
  };

  return { deleteHandler };
};

export default useDeleleHandler;
