import { createPortal } from "react-dom";
import useDeleleHandler from "../hooks/useDeleteHandler";

const Modal = ({ deleteId, setDeleteId }) => {
  const { deleteHandler } = useDeleleHandler();
  return createPortal(
    <div className="fixed inset-0 w-full h-full bg-black/70 flex justify-center items-center select-none">
      <div className="w-2xl bg-white flex flex-col items-center gap-4 rounded p-10">
        <h2 className="text-2xl font-bold">
          Are you sure to <span className="text-red-500">delete</span> this
          contact ?
        </h2>
        <div className="flex gap-5">
          <button
            className="bg-red-500 py-2 px-3 rounded text-white font-bold uppercase"
            onClick={() => {
              deleteHandler(deleteId);
              setDeleteId("");
            }}
          >
            confirm
          </button>
          <button
            className="bg-blue-500 py-2 px-3 rounded text-white font-bold uppercase"
            onClick={() => {
              setDeleteId("");
            }}
          >
            cencel
          </button>
        </div>
      </div>
    </div>,
    document.querySelector("#portal"),
  );
};

export default Modal;
