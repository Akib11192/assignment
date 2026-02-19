// hooks/useAuthListener.js
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";

import authApi from "../features/auth-api";
import { auth } from "../../firebaseConfig";

export const useAuthListener = () => {
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
};
