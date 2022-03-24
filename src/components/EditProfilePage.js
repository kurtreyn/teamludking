import React, { useState } from 'react'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import { updateProfile, getAuth } from 'firebase/auth'

function EditProfilePage({ currentUser, setCurrentUser }) {
  const storage = getStorage()
  const [loading, setLoading] = useState(false)
  const [profileImg, setProfileImg] = useState(null)

  async function upload(file, currentUser, setLoading) {
    const fileRef = ref(storage, currentUser.uid + '.png')
    setLoading(true)
    const snapshot = await uploadBytes(fileRef, file)
    const photoURL = await getDownloadURL(fileRef)
    updateProfile(getAuth().currentUser, { photoURL: photoURL })
      .then(() => {
        console.log(
          'profile updated with image\n',
          getAuth().currentUser.photoURL
        )
        alert('Upload complete')
      })
      .then(() => {
        setCurrentUser({ ...getAuth().currentUser })
      })
      .then(() => {
        localStorage.setItem('currentUser', JSON.stringify(currentUser))
      })
      .catch((err) => {
        upload(file, currentUser, setLoading)
      })
    setLoading(false)
  }

  function handleChange(e) {
    if (e.target.files[0]) {
      setProfileImg(e.target.files[0])
    }
  }

  function handleClick() {
    upload(profileImg, currentUser, setLoading)
  }

  return (
    <>
      <div className="row edit-profile-row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 edit-profile-col">
          <input type="file" onChange={handleChange} />
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 edit-profile-col">
          <button disabled={loading || !profileImg} onClick={handleClick}>
            Upload
          </button>
          {loading && (
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default EditProfilePage
