import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Config/Firebase.config";

export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
      const [user, setUser] = useState(null);

      // Create new user with email and password
      const createUser = async (email, password) => {
            try {
                  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                  setUser(userCredential.user); // Set user state with the newly created user
                  return userCredential.user;
            } catch (error) {
                  console.error("Error creating user:", error);
                  throw error;
            }
      };

      // Update user's profile with name and photo URL
      const updateUser = async (name, photoUrl) => {
            try {
                  await updateProfile(auth.currentUser, {
                        displayName: name,
                        photoURL: photoUrl
                  });
                  setUser(auth.currentUser);
            } catch (error) {
                  console.error("Error updating profile:", error);
                  throw error;
            }
      };

      // Log in existing user with email and password
      const logIn = async (email, password) => {
            try {
                  const userCredential = await signInWithEmailAndPassword(auth, email, password);
                  setUser(userCredential.user); // Set user state with the logged-in user
                  return userCredential.user;
            } catch (error) {
                  console.error("Error logging in:", error);
                  throw error;
            }
      };

      // Log in user with Google
      const googleLogIn = async () => {
            try {
                  const userCredential = await signInWithPopup(auth, googleProvider);
                  setUser(userCredential.user);
                  return userCredential.user;
            } catch (error) {
                  console.error("Error with Google login:", error);
                  throw error;
            }
      };

      // Log in user with GitHub
      const githubLogIn = async () => {
            try {
                  const userCredential = await signInWithPopup(auth, githubProvider);
                  setUser(userCredential.user);
                  return userCredential.user;
            } catch (error) {
                  console.error("Error with GitHub login:", error);
                  throw error;
            }
      };

      // Log out user
      const logOut = async () => {
            try {
                  await signOut(auth);
                  setUser(null);
            } catch (error) {
                  console.error("Error logging out:", error);
                  throw error;
            }
      };

      // Monitor auth state changes
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
      };

      return (
            <AuthContext.Provider value={authInfo}>
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;
