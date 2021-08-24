import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Image } from "../../../../assets/images";
import CreateFeed from "./createFeeds";
import PopOver from "./popover";
import UpdateStatus from "./status";
import { setCurrent, ToggleShow } from "../../../../redux/common/commonAction";
import {
  listUserFeeds,
  listFeeds,
  likeUserPost,
} from "../../../../redux/feed/feed.action";
import { listEvents, getJobs } from "../../../../redux/event/event.action";
import { userFriends } from "../../../../redux/friend/friend.action";
import {
  listVendorsSuggestion,
  listVendors,
} from "../../../../redux/vendor/vendor.action";

const FeedsList = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { user } = useSelector((state) => state.user);
  const { feeds, likes } = useSelector((state) => state.feed);

  useEffect(() => {
    dispatch(listUserFeeds());
    dispatch(listFeeds());
    dispatch(listEvents());
    dispatch(getJobs());
    dispatch(userFriends());
    dispatch(listVendorsSuggestion());
    dispatch(listVendors());
  }, [dispatch]);

  const onEvent = (event) => {
    setCurrent(dispatch(setCurrent(event)));
    history.push("/upcoming-event");
    window.$("#upcomingEventModal").modal("hide");
  };

  return (
    <>
      <div
        className="col-lg-9 flex-column hideScroll mt-7"
        style={{
          height: "78.5vh",
          overflowX: "hidden",
          // overflowY: "hidden",
          width: "100rem",
          scrollbarWidth: "none",
        }}
      >
        <div>
          <div
            style={{ width: "780px" }}
            className="card card-custom shadow p-3 mb-5 bg-white rounded p-10 position-relative"
          >
            <div className="border-0 d-flex justify-content-between">
              <div>
                <h3 className="left-body font-weight-bold">
                  Welcome {user && user.name}
                </h3>
                <p className="dashboard-text" style={{ width: "280px" }}>
                  We’re glad to have you here, please take your precious time to
                  know about your Dashboard
                </p>
                <div className="pt-3">
                  <button
                    className="btn btn-lg btn-weight text-white bg-dashboard"
                    data-toggle="popover"
                    data-target="#pop-1"
                    onClick={() => dispatch(ToggleShow("show"))}
                    tabIndex="0"
                  >
                    Take a tour
                  </button>
                </div>
              </div>
              <div className="position-absolute-dashboard">
                <img
                  src={Image.Abstract}
                  alt="img"
                  style={{
                    width: "350px",
                    height: "230px",
                    borderRadius: "5px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex ml-30 mt-30">
          <div className="card card-dotted rounded" style={{ width: "200px" }}>
            <div
              data-toggle="modal"
              data-target="#exampleModalCustomScrollable"
              className="card-body d-flex flex-column justify-content-center align-items-center cursor-pointer"
            >
              <h3 className="sub-card-text text-center font-size-16">
                Post your Events
              </h3>
              <div className="mt-3">
                <img src={Image.UpdateEvent} alt="update-event" />
              </div>
            </div>
          </div>

          <div className="card shadow rounded ml-20" style={{ width: "200px" }}>
            <div
              data-toggle="modal"
              data-target="#updatestatus"
              className="card-body d-flex flex-column justify-content-center align-items-center cursor-pointer"
            >
              <h3 className="sub-card-text text-center font-size-16">
                Update Status
              </h3>
              <div className="mt-3">
                <img src={Image.Status} alt="update-event" />
              </div>
            </div>
          </div>
        </div>
        <div className="separator separator-solid my-30"></div>

        <div className="container">
          {feeds.length > 0 ? (
            feeds.map((feed) => (
              <div key={feed.id} onClick={() => onEvent(feed)}>
                <div className="d-flex mb-5 justify-content-between align-items-center">
                  <div className="d-flex">
                    <img
                      src={feed.profilepix}
                      alt="user"
                      className="user-img border-radius"
                    />
                    <div className="pl-3">
                      <h3
                        onClick={() => onEvent(feed)}
                        className="sub-card-text font-size-16 cursor-pointer"
                      >
                        {feed.title}
                      </h3>
                      <small>By {feed.name}</small>
                    </div>
                  </div>
                  <div className="d-flex">
                    <img src={Image.Time} alt="time" className="time mt-1" />
                    <h5 className="text-primary pl-3">{feed.time}</h5>
                  </div>
                </div>
                <div className="ml-15">
                  <div>
                    <h3 className="sub-card-text font-size-16 my-5">
                      <div
                        dangerouslySetInnerHTML={{ __html: feed.content }}
                      ></div>
                    </h3>
                    <div className="">
                      {feed.picture !== 0 && (
                        <div
                          style={{
                            backgroundImage: `Url(${feed.picture})`,
                            height: "400px",
                            borderRadius: "10px",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        >
                          <div className="text-right pt-5 pr-5">
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
                                  <i className="ki ki-bold-more-hor"></i>
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
                                          <i className="flaticon-delete text-danger"></i>
                                        </span>
                                        <span className="navi-text">
                                          Delete
                                        </span>
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="d-flex mt-5">
                      {likes.includes(feed.id) ? (
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
                          <small className="pl-3">{feed.countLikes}</small>
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
                          <small className="pl-3">{feed.countLikes}</small>
                        </div>
                      )}
                      <div className="d-flex align-items-center pl-10">
                        <i className="fas fa-comment icon-2x text-eventplux"></i>
                        {/* <small className="pl-3">Comment</small> */}
                      </div>
                    </div>
                  </div>
                  <div className="separator separator-solid my-20"></div>
                </div>
              </div>
            ))
          ) : (
            <div className="d-flex flex-column justify-content-between align-items-center">
              <h3 className="sub-card-text font-size-16">No feeds to show</h3>
            </div>
          )}
        </div>
      </div>
      <CreateFeed />
      <UpdateStatus />
      <PopOver />
    </>
  );
};

export default FeedsList;
