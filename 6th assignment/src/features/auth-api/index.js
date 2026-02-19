import { auth, db } from "../../../firebaseConfig";
import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc, updateDoc } from "firebase/firestore";
import { data } from "react-router-dom";

const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    signUpWithEmailPassword: builder.mutation({
      async queryFn({ name, email, password }) {
        try {
          const user = await createUserWithEmailAndPassword(
            auth,
            email,
            password,
          );
          await setDoc(doc(db, "users", user.user.uid), {
            email: user.user.email,
            role: "user",
          });
          return {
            data: {
              uid: user.user.uid,
              email,
              role: "user",
            },
          };
        } catch (error) {
          // console.dir(error.code);
          return { error: error.code };
        }
      },
      invalidatesTags: ["user"],
    }),
    signOut: builder.mutation({
      async queryFn() {
        try {
          await signOut(auth);
          return { data: null };
        } catch (error) {
          return { error: { message: error.message } };
        }
      },
      invalidatesTags: ["user"],
    }),
    getCurrentUser: builder.query({
      async queryFn() {
        try {
          const user = auth.currentUser;
          if (!user) return { data: null };
          const userDoc = await getDoc(doc(db, "users", user.uid));
          const userData = userDoc.data();

          return {
            data: {
              uid: user.uid,
              email: user.email,
              displayName: user.displayName,
              ...userData,
            },
          };
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["user"],
    }),
    signInWithEmailPassword: builder.mutation({
      async queryFn({ email, password }) {
        try {
          const user = await signInWithEmailAndPassword(auth, email, password);
          const userDoc = await getDoc(doc(db, "users", user.user.uid));
          const userData = userDoc.data();
          return { data: { ...userData } };
        } catch (error) {
          return { error: error.message };
        }
      },
      invalidatesTags: ["user"],
    }),
    // socialLogin : builder.mutation({
    //   async queryFn({provider , providerName}) {
    //      try {
    //       const res =  await signInWithPopup(auth , provider)
    //       const docRef = doc(db , "users" , res.user.uid)

    //      } catch (error) {

    //      }
    //   }
    // })
  }),
});

export const {
  useSignUpWithEmailPasswordMutation,
  useSignOutMutation,
  useGetCurrentUserQuery,
  useSignInWithEmailPasswordMutation,
} = authApi;

export default authApi;
