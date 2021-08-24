import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { Image } from "../../../../assets/images";
import Calendar from "./calendar";
import Time from "./time";
import { Url } from "../../../../redux/common/url";
import { newAlert } from "../../../../redux/common/Alert";
import { listEvents } from "../../../../redux/event/event.action";

const CreateFeeds = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState(null);

  const inputRef = useRef();

  const dispatch = useDispatch();
  const { time, date, venue, tag, values } = useSelector(
    (state) => state.event
  );

  const hideModal = () => {};

  const onCreateEvent = async () => {
    if (picture === null) {
      newAlert("No image selected for this event", "error");
    } else {
      let token;

      if (localStorage.userToken) {
        token = localStorage.userToken;
      }

      let v = { venue: "" };
      let type = 1;

      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("time", time);
      formData.append("date", date);
      formData.append("venue", v);
      formData.append("picture", picture, picture.name);
      formData.append("tag", tag);
      formData.append("values", values);
      formData.append("type", type);
      formData.append("token", token);

      try {
        const res = await axios.post(`${Url}/UploadPost`, formData);

        newAlert(res.data.message, "success");
        dispatch(listEvents());
        hideModal(window.$("#exampleModalCustomScrollable").modal("hide"));
      } catch (err) {
        console.error(err);
        newAlert(err.response.data.message, "error");
      }
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalCustomScrollable"
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
                Post Event
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
                <label className="text-500 fs-18">Event title</label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control p-7"
                  placeholder="Millinials wedding"
                />
              </div>
              <div className="form-group mb-1 position-relative">
                <textarea
                  className="form-control"
                  id="exampleTextarea"
                  name="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="6"
                  placeholder="Give event details"
                ></textarea>
                <div className="d-flex position-absolute bottom-0 right-0">
                  <img
                    data-toggle="modal"
                    data-target="#timeModal"
                    src={Image.Clock}
                    alt="clock"
                    className="mb-6 cursor-pointer"
                    data-original-title="Add Time"
                  />

                  <img
                    src={Image.Add_User}
                    alt="user"
                    className="mb-6 ml-5 cursor-pointer"
                    data-toggle="modal"
                    data-target="#vendorsModal"
                    data-original-title="Add User"
                  />
                  <div
                    className="image-input image-input-outline"
                    id="kt_user_add_avatar"
                    style={{ marginLeft: "4rem" }}
                  >
                    <label
                      className="btn btn-sm border-radius"
                      data-action="change"
                      data-toggle="tooltip"
                      title=""
                      data-original-title="Upload Image"
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
                  <img
                    data-toggle="modal"
                    data-target="#calendarModal"
                    src={Image.Calendar2}
                    alt="calendar"
                    className="mb-6 ml-5 mr-5 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="mx-auto my-7">
              <button
                type="button"
                className="btn btn-dashboard text-white text-font-700 fs-18 btn-weight-10"
                onClick={() => onCreateEvent()}
              >
                Post Event
              </button>
            </div>
          </div>
        </div>
      </div>
      <Time />
      <Calendar />
    </>
  );
};

export default CreateFeeds;
