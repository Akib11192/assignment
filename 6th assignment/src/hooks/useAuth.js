// // hooks/useAuth.js
// import { useState, useEffect } from "react";
// import { useGetCurrentUserQuery } from "../features/auth-api";
// import { useAuthListener } from "./useAuthListner";
// import { auth } from "../../firebaseConfig";

// export const useAuth = () => {
//   const [isInitialized, setIsInitialized] = useState(false);

//   // This will set isInitialized to true after first auth check
//   useAuthListener();

//   // Listen for Firebase auth state directly to know when it's initialized
//   useEffect(() => {
//     const unsubscribe = auth.onAuthStateChanged(() => {
//       setIsInitialized(true);
//     });

//     // Set a timeout fallback (in case something goes wrong)
//     const timeout = setTimeout(() => {
//       setIsInitialized(true);
//     }, 2000);

//     return () => {
//       unsubscribe();
//       clearTimeout(timeout);
//     };
//   }, []);

//   const {
//     data: user,
//     isLoading: queryLoading,
//     error,
//     refetch,
//   } = useGetCurrentUserQuery(undefined, {
//     // CRITICAL: Don't run query until Firebase is initialized
//     skip: !isInitialized,
//   });

//   return {
//     user,
//     isLoading: !isInitialized || queryLoading,
//     error,
//     isAuthenticated: !!user,
//     refetch,
//   };
// };
