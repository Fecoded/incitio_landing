import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Image } from "../../../../assets/images";
import {
  likeUserPost,
  createComment,
} from "../../../../redux/feed/feed.action";
import Rating from "react-rating";

const UpcomingEvent = () => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();

  const { user_friends } = useSelector((state) => state.friend);
  const { user } = useSelector((state) => state.user);
  const { current } = useSelector((state) => state.common);
  const { likes } = useSelector((state) => state.feed);

  const onComment = () => {
    dispatch(createComment({ id: current.id, comment, setComment }));
  };

  return (
    <div className="d-flex flex-column">
      <div className="container">
        <h3 className="left-body font-weight-bold">Upcoming Event</h3>
        <div className="col-lg-12">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 d-flex flex-column mt-10 ">
              <div className="d-flex">
                <img
                  src={current && current.picture}
                  alt="user"
                  className="user-img border-radius"
                />
                <div className="pl-5">
                  <h3 className="sub-card-text font-size-16">
                    {user && user.name}
                  </h3>
                  <div className="d-flex">
                    <img src={Image.Time} alt="time" className="time mt-1" />
                    <h5 className="text-primary pl-3">
                      {current && current.time}
                    </h5>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <h3 className="left-body font-weight-bold">
                      {current && current.title}
                    </h3>
                    <button className="btn text-white bg-eventplux fs-16 ml-20">
                      Register
                    </button>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <h3 className="fs-16">Vendor:</h3>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <h3 className="fs-16">
                      <span style={{ color: "grey" }}>Event Venue:</span> KFA
                      Building
                    </h3>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <h3 className="fs-16">
                      <span style={{ color: "grey" }}>Event Date:</span>{" "}
                      {current && current.date}
                    </h3>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <h3 className="fs-16">
                      Event Time: {current && current.time}
                    </h3>
                  </div>
                  <div className="d-flex align-items-center pt-2">
                    <ul className="nav nav-tabs nav-bold nav-tabs-line nav-tabs-line-3x">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#kt_user_edit_tab_1"
                        >
                          <span class="nav-text font-size-lg">Description</span>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          data-toggle="tab"
                          href="#kt_user_edit_tab_2"
                        >
                          <span class="nav-text font-size-lg">
                            Rating and Comment
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tab-content">
                    <div
                      className="tab-pane show px-7 active"
                      id="kt_user_edit_tab_1"
                      role="tabpanel"
                    >
                      <div className="mt-5">
                        <h3
                          className="pb-5"
                          dangerouslySetInnerHTML={{
                            __html: current && current.content,
                          }}
                        ></h3>
                        <img
                          src={current && current.picture}
                          alt="img"
                          style={{ height: "400px", width: "500px" }}
                        />
                        <div className="d-flex mt-5">
                          {likes.includes(current.id) ? (
                            <div className="d-flex align-items-center">
                              <i
                                onClick={() =>
                                  dispatch(
                                    likeUserPost({
                                      id: current.id,
                                      like: 1,
                                      post_type: 1,
                                    })
                                  )
                                }
                                className="fas fa-heart text-eventplux icon-2x"
                              ></i>
                              <small className="pl-3">
                                {current.countLikes}
                              </small>
                            </div>
                          ) : (
                            <div className="d-flex align-items-center">
                              <i
                                onClick={() =>
                                  dispatch(
                                    likeUserPost({
                                      id: current.id,
                                      like: 0,
                                      post_type: 0,
                                    })
                                  )
                                }
                                className="far fa-heart text-eventplux icon-2x"
                              ></i>
                              <small className="pl-3">
                                {current.countLikes}
                              </small>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      className="tab-pane show px-7"
                      id="kt_user_edit_tab_2"
                      role="tabpanel"
                    >
                      <div className="d-flex align-items-center mt-5">
                        <img src={Image.UserImg} alt="img" />
                        <p className="pl-3 pt-3">Kylian Karmar rated this</p>
                        <span className="pl-3">
                          <Rating
                            initialRating={3}
                            // readonly
                            emptySymbol="far fa-star fa-2x text-warning"
                            fullSymbol="fa fa-star fa-2x text-warning"
                            // fractions={2}
                          />
                        </span>
                      </div>
                      <div className="d-flex align-items-center mt-5">
                        <img src={Image.UserImg} alt="img" />
                        <p className="pl-3 pt-3">Kylian Karmar rated this</p>
                        <span className="pl-3">
                          <Rating
                            initialRating={4}
                            // readonly
                            emptySymbol="far fa-star fa-2x text-warning"
                            fullSymbol="fa fa-star fa-2x text-warning"
                            // fractions={2}
                          />
                        </span>
                      </div>
                      <div className="d-flex align-items-center mt-5">
                        <p className="pl-3 pt-3">Kindly rate this</p>
                        <span className="pl-3">
                          <Rating
                            initialRating={0}
                            // readonly
                            emptySymbol="far fa-star fa-2x text-warning"
                            fullSymbol="fa fa-star fa-2x text-warning"
                            // fractions={2}
                          />
                        </span>
                      </div>
                      <div className="form-group">
                        <textarea
                          rows="6"
                          name="comment"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="form-control"
                          placeholder="Type something"
                        ></textarea>
                      </div>
                      <button
                        className="btn bg-dashboard text-right text-white"
                        onClick={() => onComment()}
                      >
                        Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2 ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
