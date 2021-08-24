import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  updateProfileUrl,
  updateProfileDetails,
  updateProfilePicture,
  updateProfileCover,
} from "../../../../redux/user/user.action";

const PersonalInformation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [status, setStatus] = useState("");
  const [phone, setPhone] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [about, setAbout] = useState("");
  const [name, setName] = useState("");
  const [picture, setPicture] = useState(null);
  const [twitterCopy, settwitterCopy] = useState("Copy");
  const [youtubeCopy, setYoutubeCopy] = useState("Copy");
  const [instagramCopy, setInstagramCopy] = useState("Copy");
  const [facebookCopy, setFacebookCopy] = useState("Copy");
  const [profile_cover, setProfileCover] = useState(null);

  const { user } = useSelector((state) => state.user);
  const inputRef = useRef();
  const coverRef = useRef();

  useEffect(() => {
    if (user) {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setPhone(user.phone);
      setStatus(user.status);
      setFacebook(user.facebook);
      setYoutube(user.youtube);
      setInstagram(user.instagram);
      setTwitter(user.twitter);
      setAbout(user.about);
      setName(user.username);
    }
  }, [user]);

  const getInstagramCopy = () => {
    let instagramText = document.getElementById("instagram");
    instagramText.select();
    instagramText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setInstagramCopy("Copied");
  };

  const getTwitterCopy = () => {
    let twitterText = document.getElementById("twitter");
    twitterText.select();
    twitterText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    settwitterCopy("Copied");
  };

  const getYoutubeCopy = () => {
    let youtubeText = document.getElementById("youtube");
    youtubeText.select();
    youtubeText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setYoutubeCopy("Copied");
  };

  const getFacebookCopy = () => {
    let facebookText = document.getElementById("facebook");
    facebookText.select();
    facebookText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    setFacebookCopy("Copied");
  };

  const dispatch = useDispatch();

  const updatingProfileUrl = () => {
    dispatch(updateProfileUrl(name));
  };

  const onBlur = () => {
    if (picture !== null) {
      dispatch(updateProfilePicture(picture));
      inputRef.current.value = "";
      setPicture(null);
    }
  };

  const updatingProfileCover = () => {
    if (profile_cover !== null) {
      dispatch(updateProfileCover(profile_cover));
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateProfileDetails({
        facebook,
        instagram,
        youtube,
        twitter,
        firstName,
        lastName,
        about,
        status,
        phone,
      })
    );
  };

  return (
    <div className="d-flex flex-column">
      <div className="bordered border-radius-10 p-10">
        <div
          className="image-input image-input-outline "
          id="kt_user_add_avatar"
        >
          <div
            className="image-input-wrapper"
            style={{
              backgroundImage: `url(${user && user.picture})`,
              borderRadius: "10rem",
              width: "80px",
              height: "80px",
            }}
          ></div>
          <label
            className="btn btn-sm border-radius btn-circle btn-white btn-hover-text-dashbord bg-dashboard btn-shadow"
            data-action="change"
            data-toggle="tooltip"
            title=""
            data-original-title="Change avatar"
          >
            <i className="fa fa-pen fa-1x icon-sm text-white"></i>
            <input
              type="file"
              name="picture"
              onBlur={onBlur}
              ref={inputRef}
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setPicture(e.target.files[0])}
            />

            <input type="hidden" name="profile_avatar_remove" />
          </label>
          <span
            className="btn btn-xs btn-icon btn-circle btn-white btn-hover-text-primary btn-shadow"
            data-action="cancel"
            data-toggle="tooltip"
            title=""
            data-original-title="Cancel avatar"
          >
            <i className="ki ki-bold-close icon-xs text-muted"></i>
          </span>
        </div>

        <form className="form mt-5" onSubmit={onSubmit}>
          <div className="row">
            <div className="form-group col">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="form-control form-control-lg"
                placeholder="Enter firstname"
              />
            </div>
            <div className="form-group col">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="form-control  form-control-lg"
                placeholder="Enter lastname"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <label>Marital Status</label>
              <input
                type="text"
                name="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="form-control  form-control-lg"
                placeholder="Marital Status"
              />
            </div>
            <div className="form-group col">
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="form-control  form-control-lg"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <label>Facebook Link</label>
              <div className="input-group">
                <input
                  id="facebook"
                  type="text"
                  name="facebook"
                  value={facebook}
                  onChange={(e) => setFacebook(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="https://www.facebook.com/eventplux"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-dashboard text-white"
                    type="button"
                    data-container="body"
                    data-trigger="focus"
                    data-offset="60px 0px"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Copy!"
                    data-theme="dark"
                    onClick={() => getFacebookCopy()}
                  >
                    {facebookCopy}
                  </button>
                </div>
              </div>
            </div>
            <div className="form-group col">
              <label>Youtube Link</label>
              <div className="input-group">
                <input
                  id="youtube"
                  type="text"
                  name="youtube"
                  value={youtube}
                  onChange={(e) => setYoutube(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="https://www.youtube.com/eventplux"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-dashboard text-white"
                    type="button"
                    data-container="body"
                    data-trigger="focus"
                    data-offset="60px 0px"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Copy!"
                    data-theme="dark"
                    onClick={() => getYoutubeCopy()}
                  >
                    {youtubeCopy}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="form-group col">
              <label>Instagram Link</label>
              <div className="input-group">
                <input
                  id="instagram"
                  type="text"
                  name="instagram"
                  value={instagram}
                  onChange={(e) => setInstagram(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="https://www.facebook.com/eventplux"
                />
                <div className="input-group-append">
                  <button
                    data-container="body"
                    data-trigger="focus"
                    data-offset="60px 0px"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Copy!"
                    data-theme="dark"
                    className="btn btn-dashboard text-white"
                    type="button"
                    onClick={() => getInstagramCopy()}
                  >
                    {instagramCopy}
                  </button>
                </div>
              </div>
            </div>
            <div className="form-group col">
              <label>Twitter Link</label>
              <div className="input-group">
                <input
                  id="twitter"
                  type="text"
                  name="twitter"
                  value={twitter}
                  onChange={(e) => setTwitter(e.target.value)}
                  className="form-control form-control-lg"
                  placeholder="https://www.youtube.com/eventplux"
                />
                <div className="input-group-append">
                  <button
                    data-container="body"
                    data-trigger="focus"
                    data-offset="60px 0px"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Copy!"
                    data-theme="dark"
                    className="btn btn-dashboard text-white"
                    type="button"
                    onClick={() => getTwitterCopy()}
                  >
                    {twitterCopy}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div class="form-group">
                <label>Profile Link</label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <button class="btn btn-secondary" type="button">
                      www.eventplux/
                    </button>
                  </div>
                  <input
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    class="form-control"
                    placeholder=""
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-dashboard text-white"
                      type="button"
                      onClick={() => updatingProfileUrl()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label>Profile Cover</label>
                <div class="input-group">
                  <input
                    name="profile_cover"
                    ref={coverRef}
                    type="file"
                    class="form-control"
                    placeholder=""
                    onChange={(e) => setProfileCover(e.target.files[0])}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-dashboard text-white"
                      type="button"
                      onClick={() => updatingProfileCover()}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group col">
              <label>About Me</label>
              <textarea
                name="about"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                className="form-control"
                rows="5"
              ></textarea>
            </div>
          </div>

          <div className="">
            <button
              className="btn text-white bg-dashboard fs-16"
              style={{ minWidth: "256px" }}
            >
              Update Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInformation;
