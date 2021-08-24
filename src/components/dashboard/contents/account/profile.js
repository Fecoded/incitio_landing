import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Image } from "../../../../assets/images";
import { likeUserPost } from "../../../../redux/feed/feed.action";
import { logout } from "../../../../redux/user/user.action";

const Profile = () => {
  const [menu, setMenu] = useState("Timeline");

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { userFeeds, userLikes } = useSelector((state) => state.feed);

  return (
    <>
      <div className="d-flex flex-column">
        <div className="container">
          <div className="col-lg-12">
            <div className="card card-custom position-relative">
              <img
                src={user && user.coverpix}
                className=" border-radius-top-20"
                alt="cover-profile"
                style={{ height: "240px" }}
              />
              <div
                className="position-absolute mb-5"
                style={{ bottom: "45px", right: "45rem" }}
              >
                <div
                  style={{
                    backgroundColor: "#fff",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <img
                    src={user && user.picture}
                    alt="profile-pic"
                    className="profile-img border-radius"
                  />
                  <div className="d-flex flex-column pl-3 pt-3">
                    <p className="fs-13 line-height-0">{user && user.name}</p>
                    <p className="fs-12">{user && user.servicesName}</p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex">
                  <div className="col-6">
                    <div className="d-flex justify-content-around">
                      <p
                        className={`cursor-pointer ${
                          menu === "Timeline" && "text-eventplux"
                        }`}
                        onClick={() => setMenu("Timeline")}
                      >
                        Timeline
                      </p>
                      <p
                        className={`cursor-pointer ${
                          menu === "About" && "text-eventplux"
                        }`}
                        onClick={() => setMenu("About")}
                      >
                        About
                      </p>
                      <p className="cursor-pointer">Friends</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex justify-content-around">
                      <p className="cursor-pointer">Photos</p>
                      <p className="cursor-pointer">Portfolio</p>
                      <p className="cursor-pointer">
                        {/* <i class="fas fa-ellipsis-h text-dark"></i> */}
                        <div className="top-5">
                          <div className="card-toolbar">
                            <div
                              className="dropdown dropdown-inline show"
                              data-toggle="tooltip"
                              title=""
                              data-placement="left"
                              data-original-title="Quick actions"
                            >
                              <button
                                className="btn btn-clean btn-hover-light-primary btn-sm"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                <i className="ki ki-bold-more-hor text-dark"></i>
                              </button>
                              <div
                                className="dropdown-menu dropdown-menu-md dropdown-menu-right drop-down-img"
                                x-placement="bottom-end"
                              >
                                <ul className="navi navi-hover py-5">
                                  <li className="navi-item">
                                    <span className="navi-link">
                                      <span className="navi-icon">
                                        <i className="flaticon-edit"></i>
                                      </span>
                                      <span className="navi-text">Edit</span>
                                    </span>
                                  </li>
                                  <li className="navi-item">
                                    <span className="navi-link">
                                      <span className="navi-icon">
                                        <i className="fas fa-share-alt"></i>
                                      </span>
                                      <span className="navi-text">Share</span>
                                    </span>
                                  </li>
                                  <li className="navi-item">
                                    <span className="navi-link">
                                      <span className="navi-icon">
                                        <i className="flaticon-logout text-danger"></i>
                                      </span>
                                      <span
                                        onClick={() => dispatch(logout())}
                                        className="navi-text"
                                      >
                                        Logout
                                      </span>
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="d-flex">
              <div
                className="col-9 pl-0 mt-5 hideScroll"
                style={{
                  height: "38.5vh",
                  overflowX: "hidden",
                  width: "100rem",
                  scrollbarWidth: "none",
                }}
              >
                <div className="card card-custom">
                  {menu === "Timeline" ? (
                    <>
                      {userFeeds.length > 0 ? (
                        userFeeds.map((feed) => (
                          <div key={feed.id}>
                            <div className="d-flex flex-column p-10">
                              <div className="d-flex justify-content-between align-items-center">
                                <div className="d-flex">
                                  <img
                                    src={feed.profilepix}
                                    alt="user"
                                    className="user-img"
                                  />
                                  <div className="pt-5 pl-3">
                                    <h3 className="sub-card-text font-size-16 line-height-0">
                                      {feed.title}
                                    </h3>
                                    <small>By {feed.name}</small>
                                  </div>
                                </div>

                                <div className="d-flex">
                                  <img
                                    src={Image.Time}
                                    alt="time"
                                    className="time mt-1"
                                  />
                                  <h5 className="text-primary pl-3">
                                    {feed.time}
                                  </h5>
                                </div>
                              </div>

                              <div className="pl-15">
                                <h3 className="sub-card-text font-size-16 my-5">
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: feed.content,
                                    }}
                                  ></div>
                                </h3>
                                <div className="d-flex mt-5">
                                  {userLikes.includes(feed.id) ? (
                                    <div className="d-flex align-items-center">
                                      <i
                                        onClick={() =>
                                          dispatch(
                                            likeUserPost({
                                              id: feed.id,
                                              like: 1,
                                              post_type: 1,
                                            })
                                          )
                                        }
                                        className="fas fa-heart text-eventplux icon-2x"
                                      ></i>
                                      <small className="pl-3">
                                        {feed.countLikes}
                                      </small>
                                    </div>
                                  ) : (
                                    <div className="d-flex align-items-center">
                                      <i
                                        onClick={() =>
                                          dispatch(
                                            likeUserPost({
                                              id: feed.id,
                                              like: 0,
                                              post_type: 0,
                                            })
                                          )
                                        }
                                        className="far fa-heart text-eventplux icon-2x"
                                      ></i>
                                      <small className="pl-3">
                                        {feed.countLikes}
                                      </small>
                                    </div>
                                  )}
                                  <div className="d-flex align-items-center pl-10">
                                    <i className="fas fa-comment icon-2x text-eventplux"></i>
                                    {/* <small className="pl-3">Comment</small> */}
                                  </div>
                                </div>
                                {feed.picture !== 0 && (
                                  <div className="pt-5">
                                    <img
                                      src={feed.picture}
                                      alt="feed-img"
                                      style={{
                                        height: "220px",
                                        width: "400px",
                                      }}
                                    />
                                  </div>
                                )}
                              </div>
                            </div>
                            <div className="separator separator-solid"></div>
                          </div>
                        ))
                      ) : (
                        <div className="d-flex flex-column justify-content-between align-items-center">
                          <h3 className="sub-card-text font-size-16">
                            No feeds to show
                          </h3>
                        </div>
                      )}
                    </>
                  ) : menu === "About" ? (
                    <>
                      <div className="card-header justify-content-start">
                        <div className="card-title">
                          <h3 className="text-500">About</h3>
                        </div>
                      </div>
                      <div className="card-body">
                        <div className="mb-5">
                          <h3 className="text-500">About Me</h3>
                          <p>{user && user.about}</p>
                        </div>
                        <div className="mb-5">
                          <h3 className="text-500">Birthday</h3>
                          <p>{user && user.dob}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>

              <div className="col-3 pr-0 mt-5">
                <div className="card card-custom mb-5">
                  <div className="card-header">
                    <div className="card-title">
                      <h3 className="text-center text-500">Experience</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-column">
                      <p className="fs-14">Event Planning: 14 Years</p>
                      <p className="fs-14">Photography: 10 Years</p>
                      <p className="fs-14">Dj: 8 Years</p>
                    </div>
                  </div>
                </div>
                <div className="card card-custom mb-5">
                  <div className="card-header">
                    <div className="card-title">
                      <h3 className="text-center text-500">Rents</h3>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="d-flex flex-column">
                      <p className="fs-14">Chairs & Canopy</p>
                      <p className="fs-14">Drinks & Wines</p>
                    </div>
                  </div>
                </div>
                <div className="text-right cursor-pointer">
                  <Link to="/chats">
                    <img src={Image.FeedChat} alt="feed-chat" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
