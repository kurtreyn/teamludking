import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import Navigation from "./Navigation";
import EditProfilePage from "./EditProfilePage";
import avatar from "../images/profile-avatar.png";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
} from "mdb-react-ui-kit";

function Profile({ currentUser, setCurrentUser, photoURL, setPhotoURL }) {
  // const [photoURL, setPhotoURL] = useState(avatar);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  const [basicActive, setBasicActive] = useState("tab1");

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <>
      <Navigation
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        photoURL={photoURL}
        setPhotoURL={setPhotoURL}
        handleShow={handleShow}
      />
      <Modal className="modal-window" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditProfilePage
            currentUser={currentUser}
            photoURL={photoURL}
            setPhotoURL={setPhotoURL}
          />
        </Modal.Body>
      </Modal>
      <MDBTabs className="mb-3">
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("about")}
            active={basicActive === "about"}
          >
            About
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("friends")}
            active={basicActive === "friends"}
          >
            Friends
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("skills")}
            active={basicActive === "skills"}
          >
            Skills
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink
            onClick={() => handleBasicClick("preferences")}
            active={basicActive === "preferences"}
          >
            Preferences
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === "about"}>
          <div
            class="d-flex flex-row align-items: flex-end;"
            className="profile-pic"
          >
            {" "}
            <img src={photoURL} alt="profile" />
            <h1>{currentUser?.displayName}</h1>
          </div>
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === "friends"}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste modi
          explicabo amet iure atque debitis eaque, quas, praesentium aspernatur
          unde rem similique facere harum, numquam est. Quidem, architecto modi.
          Maxime.
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === "skills"}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias sint
          quisquam quasi saepe natus, possimus quidem sunt, facilis blanditiis
          non eveniet repellat pariatur repellendus ducimus eligendi similique
          obcaecati laborum delectus.
        </MDBTabsPane>
        <MDBTabsPane show={basicActive === "preferences"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          maiores voluptates consequatur deserunt explicabo sit est. Voluptates
          ipsam impedit illo consequuntur aliquam? Repellat alias reprehenderit
          nobis atque odit quisquam commodi.
        </MDBTabsPane>
      </MDBTabsContent>
    </>
  );
}
export default Profile;
