import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "../../../../assets/images";
import FeedsList from "./feedsList";
import UpcomingEvent from "./upcomingEvent";
import FriendsRequest from "./friendsRequest";
import AvailableJobs from "./avaliableJobs";
import VendorSuggestion from "./vendorsSuggestion";

const Feeds = () => {
  const [show, setShow] = useState(null);

  const { events } = useSelector((state) => state.event);
  const { user_friends } = useSelector((state) => state.friend);

  return (
    <>
      <div
        className="d-flex flex-column"
        // style={{ width: "1000px", marginLeft: "10rem" }}
      >
        <div className="container">
          <div className="row">
            <div
              onClick={() => setShow(null)}
              className="col-md-3 cursor-pointer"
            >
              <div className="card card-custom bg-gray-100">
                <div
                  className={`border-0 ${
                    show === null ? "bg-dashboard" : "bg-inactive"
                  }  border-top`}
                >
                  <h3
                    className={`left-body ${
                      show === null ? "text-white" : "text-dark"
                    }  text-center pt-4`}
                  >
                    Post Events
                  </h3>
                  <div className="card-toolbar"></div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setShow(true)}
              className="col-md-3 cursor-pointer"
            >
              <div className="card card-custom bg-gray-100">
                <div
                  className={`border-0 ${
                    show ? "bg-dashboard" : "bg-inactive"
                  }  border-top`}
                >
                  <h3
                    className={`left-body ${
                      show ? "text-white" : "text-dark"
                    }  text-center pt-4`}
                  >
                    Avaliable Jobs
                  </h3>
                  <div className="card-toolbar"></div>
                </div>
              </div>
            </div>

            <div
              onClick={() => setShow(false)}
              className="col-md-3 cursor-pointer"
            >
              <div className="card card-custom bg-gray-100">
                <div
                  className={`border-0 ${
                    show === false ? "bg-dashboard" : "bg-inactive"
                  }  border-top`}
                >
                  <h3
                    className={`left-body ${
                      show === false ? "text-white" : "text-dark"
                    }  text-center pt-4`}
                  >
                    Vendor Suggestions
                  </h3>
                  <div className="card-toolbar"></div>
                </div>
              </div>
            </div>
          </div>

          {show === null ? (
            <div
              id="post-events"
              role="tabpanel"
              aria-labelledby="post-events"
              className="row justify-content-between align-items-center"
              // style={{
              //   width: "100rem",
              // }}
            >
              <FeedsList />

              <div className="col-lg-3 d-flex flex-column">
                <div className="col-md-3 mb-10">
                  <div
                    className="card card-bordered border-radius-20 "
                    style={{ width: "280px" }}
                  >
                    {events.length > 0 && (
                      <>
                        <div className="bg-dashboard border-radius-top-20">
                          <div className="card-title pt-5">
                            <h3 className="text-center sub-card-text text-white">
                              Upcoming Events
                            </h3>
                          </div>
                        </div>
                        <div className="card-body">
                          {events
                            .filter((event, idx) => idx < 2)
                            .map((event) => (
                              <div
                                key={event.id}
                                className="d-flex mb-5 cursor-pointer"
                              >
                                <img
                                  src={event.picture}
                                  alt="user"
                                  className="user-img border-radius"
                                />
                                <div className="pl-3">
                                  <h3 className="sub-card-text font-size-16">
                                    {event.title}
                                  </h3>
                                  <small
                                    dangerouslySetInnerHTML={{
                                      __html: event.content,
                                    }}
                                  ></small>
                                </div>
                              </div>
                            ))}

                          <h5
                            data-toggle="modal"
                            data-target="#upcomingEventModal"
                            className="text-right cursor-pointer"
                          >
                            View all
                          </h5>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="col-md-3">
                  <div
                    className="card card-bordered border-radius-20"
                    style={{ width: "280px" }}
                  >
                    {user_friends.length > 0 && (
                      <>
                        <div className="bg-dashboard border-radius-top-20">
                          <div className="card-title pt-5">
                            <h3 className=" text-center sub-card-text text-white">
                              Friend Requests
                            </h3>
                          </div>
                        </div>
                        <div className="card-body">
                          {user_friends
                            .filter((friend, idx) => idx < 2)
                            .map((friend) => (
                              <div
                                key={friend.id}
                                className="d-flex mb-5 justify-content-between align-items-center"
                              >
                                <img
                                  src={friend.fromPic}
                                  alt="user"
                                  className="user-img border-radius"
                                />
                                <div className="pl-3 pt-2">
                                  <h3 className="sub-card-text line-height-0 font-size-16">
                                    {friend.fromName}
                                  </h3>
                                </div>
                                <div className="ml-5 cursor-pointer">
                                  <img
                                    src={Image.AddUser}
                                    alt="AddUser"
                                    className="user-add"
                                  />
                                </div>
                              </div>
                            ))}

                          <h5
                            data-toggle="modal"
                            data-target="#friendsRequestModal"
                            className="text-right cursor-pointer"
                          >
                            View all
                          </h5>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="mt-10 text-right">
                  <Link to="/chats">
                    <img src={Image.FeedChat} alt="feed-chat" />
                  </Link>
                </div>
              </div>
            </div>
          ) : show ? (
            <AvailableJobs />
          ) : (
            <VendorSuggestion />
          )}
        </div>
      </div>
      <UpcomingEvent />
      <FriendsRequest />
    </>
  );
};

export default Feeds;
