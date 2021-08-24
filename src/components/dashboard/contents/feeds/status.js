import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "../../../../assets/images";
import Vendors from "./vendors";

import { createEvent } from "../../../../redux/event/event.action";

const Status = () => {
  const [picture, setPicture] = useState(null);
  const [description, setDescription] = useState("");

  const { user } = useSelector((state) => state.user);
  const { vendors } = useSelector((state) => state.vendor);

  const { values } = useSelector((state) => state.event);

  const inputRef = useRef();
  const dispatch = useDispatch();

  const onStatus = () => {
    dispatch(createEvent({ type: 2, picture, values, description }));
  };

  return (
    <>
      <div
        className="modal fade"
        id="updatestatus"
        data-backdrop="static"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="staticBackdrop"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="left-body modal-title mx-auto"
                id="exampleModalLabel"
              >
                Update Status
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
              <div
                className="d-flex card-bordered border-radius-3"
                style={{ height: "14.55rem" }}
              >
                <div
                  className="col-lg-3 d-flex flex-column justify-content-center align-items-center"
                  style={{ backgroundColor: "#F5F5F5" }}
                >
                  <img
                    src={user && user.picture}
                    alt="img"
                    className="mb-3 user-img  border-radius"
                  />
                  <h3>{user && user.name}</h3>
                  <p>{user && user.servicesName}</p>
                </div>
                <div className="custom-col-9 mb-1 position-relative">
                  <textarea
                    className="form-control p-8"
                    style={{ border: "none" }}
                    id="exampleTextarea"
                    rows="7"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What’s on your mind?"
                  ></textarea>
                  <div className="d-flex position-absolute bottom-0 right-0">
                    <img
                      src={Image.Add_User}
                      alt="user"
                      className="mb-6 cursor-pointer"
                      style={{ marginRight: "2rem" }}
                      data-toggle="modal"
                      data-target="#vendorsModal"
                    />

                    <div
                      className="image-input image-input-outline pl-5"
                      id="kt_user_add_avatar"
                    >
                      <label
                        className="btn btn-sm border-radius"
                        data-action="change"
                        data-toggle="tooltip"
                        title=""
                        data-original-title="Change avatar"
                      >
                        <img
                          src={Image.PhotoCamera}
                          alt="camera"
                          className="cursor-pointer"
                        />
                        <input
                          type="file"
                          name="picture"
                          ref={inputRef}
                          accept=".png, .jpg, .jpeg"
                          onChange={(e) => setPicture(e.target.files[0])}
                        />

                        <input type="hidden" name="profile_avatar_remove" />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto my-7">
              <button
                type="button"
                className="btn btn-dashboard text-white text-font-700 fs-18 btn-weight-10"
                onClick={() => onStatus()}
              >
                Update Status
              </button>
            </div>
          </div>
        </div>
      </div>
      <Vendors vendors={vendors} />
    </>
  );
};

export default Status;
