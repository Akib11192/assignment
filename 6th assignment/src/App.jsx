import { Outlet } from "react-router-dom";

import Header from "./components/Header";
import "./App.css";
import { useAuthListener } from "./hooks/useAuthListner";
const App = () => {
  useAuthListener();

  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
