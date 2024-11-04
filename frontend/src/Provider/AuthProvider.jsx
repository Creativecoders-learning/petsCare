import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/Firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {

      const [user, setUser] = useState(null);

      // crete user-
      const createUser = async (email, password) => {
            await createUserWithEmailAndPassword(auth, email, password);
            return;
      };

      // update user
      const updateUser = async (name, photoUrl) => {
            await updateProfile(auth.currentUser, {
                  displayName: name,
                  photoURL: photoUrl
            })
            return;
      }

      // log in user
      const logIn = async (email, password) => {
            await signInWithEmailAndPassword(auth, email, password);
            return;
      }

      // google log in
      const googleLogIn = async () => {
            await signInWithPopup(auth, googleProvider);
            return;
      }

      // google log in
      const githubLogIn = async () => {
            await signInWithPopup(auth, githubProvider);
            return;
      }

      // log out user
      const logOut = async () => {
            setUser(null);
            await signOut(auth);
            return;
      }

      useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
                  console.log('Current User:', currentUser);
                  setUser(currentUser);
            });

            return () => {
                  unSubscribe();
            };
      }, []);



      const authInfo = {
            user,
            setUser,
            createUser,
            updateUser,
            logIn,
            googleLogIn,
            githubLogIn,
            logOut
      }

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;