import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  listUserGroup,
  listUserSuggestedGroup,
} from "../../../../redux/group/group.action";
import { Image } from "../../../../assets/images";
import CreateGroupModal from "./createGroupModal";

const Groups = () => {
  const { groups, usersuggestedgroups } = useSelector((state) => state.group);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUserGroup());
    dispatch(listUserSuggestedGroup());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex flex-column">
        <div className="container">
          <div className="col-lg-12">
            <div className="bordered p-5">
              <div className="bg-dashboard w-100 border-radius-10 h-13 p-10">
                <div className="d-flex align-items-center col-9">
                  <div
                    className="d-flex justify-content-center align-items-center"
                    style={{
                      width: "100px",
                      height: "100px",
                    }}
                  >
                    <img src={Image.UserGroup2} alt="event" />
                  </div>
                  <div className="pl-7">
                    <h3 className="fs-24 font-weight-700 text-white ">
                      Groups
                    </h3>
                    <p className="fs-24 text-white">
                      Create and view your groups.
                    </p>
                  </div>
                </div>
              </div>
              <div className="my-7 p-10">
                <h3 className="fs-24 mb-7">Your Groups</h3>
                <div
                  className="hideScroll"
                  style={{
                    height: "49vh",
                    overflowX: "hidden",
                    scrollbarWidth: "none",
                  }}
                >
                  <div className="col-lg-12 mt-5">
                    <div className="row">
                      <div
                        className="card card-dotted rounded col-lg-2"
                        style={{ width: "200px", height: "300px" }}
                      >
                        <div
                          data-toggle="modal"
                          data-target="#createGroupModal"
                          className="card-body d-flex flex-column justify-content-center align-items-center cursor-pointer"
                        >
                          <h3 className="text-center fs-14 font-weight-700">
                            Create a group
                          </h3>
                          <div className="mt-3">
                            <img src={Image.Create} alt="update-event" />
                          </div>
                        </div>
                      </div>

                      {groups.map((group) => (
                        <div
                          key={group.id}
                          className="card card-custom shadow rounded col-lg-3 ml-2 mb-5"
                          style={{ width: "200px", height: "300px" }}
                        >
                          <div className="text-center mt-5">
                            <div
                              className="image-input image-input-outline "
                              id="kt_user_add_avatar"
                            >
                              <div
                                className="image-input-wrapper"
                                style={{
                                  backgroundImage: `url(${group.picture})`,
                                  borderRadius: "10rem",
                                  width: "80px",
                                  height: "80px",
                                }}
                              ></div>
                            </div>

                            <h3 className="fs-16 font-weight-500">
                              {group.groupName}
                            </h3>
                            <p className="fs-14">{group.count} members</p>
                            <p className="fs-14" style={{ color: "grey" }}>
                              {group.desc}
                            </p>
                            <div className="mt-3">
                              <img src={Image.Next} alt="update-event" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h3 className="fs-24 my-7">Suggested Groups</h3>
                  <div className="col-lg-12 mb-5">
                    <div className="row">
                      {usersuggestedgroups.map((group) => (
                        <div
                          key={group.id}
                          className="card card-custom shadow rounded col-lg-2"
                          style={{ width: "200px", height: "300px" }}
                        >
                          <div className="text-center mt-5">
                            <div
                              className="image-input image-input-outline "
                              id="kt_user_add_avatar"
                            >
                              <div
                                className="image-input-wrapper"
                                style={{
                                  backgroundImage: `url(${group.picture})`,
                                  borderRadius: "10rem",
                                  width: "80px",
                                  height: "80px",
                                }}
                              ></div>
                            </div>

                            <h3 className="fs-16 font-weight-500">
                              {group.groupName}
                            </h3>
                            <p className="fs-14">{group.count} members</p>
                            <p className="fs-14" style={{ color: "grey" }}>
                              {group.desc}
                            </p>
                            <div className="mt-3">
                              <img src={Image.Create1} alt="update-event" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CreateGroupModal />
    </>
  );
};

export default Groups;
