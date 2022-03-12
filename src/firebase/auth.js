import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { createUserDocument } from "./user";

export const signup = async ({ firstName, lastName, email, password }) => {
  const resp = await firebase
    .auth()
    .createUserWithEmailAndPassword(email, password);
  const user = resp.user;
  await user.updateProfile({ displayName: `${firstName} ${lastName}` });
  await createUserDocument(user);
  return user;
};

export const logout = () => {
  return firebase.auth().signOut();
};

export const login = async ({ email, password }) => {
  const resp = await firebase
    .auth()
    .signInWithEmailAndPassword(email, password);
  return resp.user;
};

export const getProfile = () => {
  const auth = firebase.auth();
  return auth.currentUser;
};
