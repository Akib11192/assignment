import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import authApi from "../features/auth-api";
import { createContext, useContext, useEffect } from "react";
import { auth } from "../../firebaseConfig";

const AuthContext = createContext();
export const getAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // Invalidate and refetch user data when auth state changes
        dispatch(authApi.util.invalidateTags(["user"]));
      } else {
        // Reset API state when user logs out
        dispatch(authApi.util.resetApiState());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};
