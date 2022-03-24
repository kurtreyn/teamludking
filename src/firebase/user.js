import { firestore } from './config'

export const createUserDocument = async (user) => {
  const docRef = firestore.doc(`/users/${user.uid}`)

  const userProfile = {
    uid: user.uid,
    email: user.email,
    name: user.displayName
  }

  //Write to cloud firestore
  docRef.set(userProfile)
}
