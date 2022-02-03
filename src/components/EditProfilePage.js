import React, { useState, useEffect } from 'react';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';

function EditProfilePage({
  user,
  setUser,
  currentUser,
  photoURL,
  setPhotoURL,
}) {
  const storage = getStorage();
  const [loading, setLoading] = useState(false);
  const [profileImg, setProfileImg] = useState(null);

  useEffect(() => {
    if (user?.photoURL) {
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  async function upload(file, user, setLoading) {
    const fileRef = ref(storage, user.uid + '.png');
    setLoading(true);
    const snapshot = await uploadBytes(fileRef, file);
    const profilePic = await getDownloadURL(fileRef);
    updateProfile(user, { profilePic });
    setLoading(false);
    alert('Upload complete');
    console.log(profilePic);
  }

  function handleChange(e) {
    if (e.target.files[0]) {
      setProfileImg(e.target.files[0]);
    }
  }

  function handleClick() {
    upload(profileImg, currentUser, setLoading);
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
        </div>
      </div>
    </>
  );
}

export default EditProfilePage;
