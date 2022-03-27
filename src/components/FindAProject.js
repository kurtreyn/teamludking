import React, { useState } from "react";

export default function FindAProject({ currentUser, setCurrentUser }) {
  const [showAdvanced, setShowAdvanced] = useState(false);
  return (
    <>
      <div className="container justify-content-space-between m-5">
        <div className="d-flex">
          <select name="language-select" id="">
            <option value="">Project name</option>
            <option value="">user</option>
            <option value="">stack</option>
            <option value="">language/technology</option>
          </select>
          <input type="text" name="search" id="" className="form-control" />
          <button type="submit" className="btn btn-success">
            Search
          </button>
        </div>
        <a
          className="add-to-search"
          onClick={() => setShowAdvanced(!showAdvanced)}
        >
          Add to search
        </a>
      </div>
      <div className="box" hidden={showAdvanced}>
        <h2>Advanced</h2>
        <form action="">
          <div className="d-flex justify-content-space-between container-fluid">
            <label htmlFor="connection-only">
              <input type="checkbox" name="connection-only" id="" />
              Show projects of connections only
            </label>
            <div>
              <label htmlFor="start-time">Meeting time</label>
              <input type="time" name="start-time" id="" />
              to
              <input type="time" name="end-time" id="" />
            </div>
          </div>
          <div className="d-flex container-fluid justify-content-space-between">
            <select name="language-select" id="">
              <option value="">Project name</option>
              <option value="">user</option>
              <option value="">stack</option>
              <option value="">language/technology</option>
            </select>
            <input type="text" name="search" id="" className="form-control" />
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="border d-flex m-5">
        <div>
          <h2>Project 1</h2>
          <caption>author</caption>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro velit
            sed ipsa dolorem beatae suscipit, quisquam rem et dolores!
            Architecto, voluptatum nihil? Cupiditate nemo exercitationem, amet
            accusamus eius aspernatur assumenda.
          </p>
          <label>
            Technologies used: <p>react, redux</p>
          </label>
          <label>
            Seeking collaborators with knowledge in: <p>react</p>
          </label>
        </div>
        <div>
          <img src="" alt="" className="project-image" />
          <button>View Design</button>
          <button>View Readme</button>
          <button>Request to join project</button>
        </div>
      </div>
    </>
  );
}
