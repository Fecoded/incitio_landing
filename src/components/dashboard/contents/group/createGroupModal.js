import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGroup } from "../../../../redux/group/group.action";

const CreateGroupModal = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [type, setType] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const onCreateGroup = () => {
    dispatch(createGroup({ title, desc, type, username }));
  };

  return (
    <div
      className="modal fade"
      id="createGroupModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdrop"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-md"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="left-body modal-title mx-auto"
              id="exampleModalLabel"
            >
              Create new group
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i aria-hidden="true" className="ki ki-close"></i>
            </button>
          </div>
          <div className="modal-body pr-20 pl-20">
            <div className="form-group">
              <label className="text-500 fs-18">Group title</label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="form-control p-7"
                placeholder="Millinials wedding"
              />
            </div>
            <div className="form-group">
              <label className="text-500 fs-18">Group link</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="form-control p-7"
                placeholder="Millinials wedding"
              />
            </div>
            <div className="form-group">
              <label className="text-500 fs-18">Group Description</label>
              <textarea
                rows="7"
                name="desc"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className="form-control p-7"
                placeholder="Type your description here"
              ></textarea>
            </div>
            <div className="col-9 col-form-label">
              <div className="radio-inline">
                <label className="radio radio-danger">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    onChange={(e) => setType("public")}
                  />
                  <span></span>
                  Public group
                </label>
                <label className="radio radio-danger">
                  <input
                    type="radio"
                    name="type"
                    value={type}
                    onChange={(e) => setType("private")}
                  />
                  <span></span>
                  Private group
                </label>
              </div>
            </div>
          </div>
          <div className="mx-auto mb-10">
            <button
              type="button"
              className="btn btn-dashboard text-white text-font-700 fs-18 btn-weight-10"
              onClick={() => onCreateGroup()}
            >
              Add Group
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateGroupModal;
