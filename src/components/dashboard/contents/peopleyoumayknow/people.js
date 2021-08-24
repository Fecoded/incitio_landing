import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { listAllSuggestions } from "../../../../redux/friend/friend.action";
import { Image } from "../../../../assets/images";

const PeopleYouMayKnow = () => {
  const dispatch = useDispatch();
  const { suggestions } = useSelector((state) => state.friend);

  useEffect(() => {
    dispatch(listAllSuggestions());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column">
      <div className="container">
        <div className="col-lg-12">
          <div className="bordered p-5">
            <div className="bg-dashboard w-100 border-radius-10 h-13 p-10">
              <div className="d-flex align-items-center col-9">
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#fff",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                  }}
                >
                  <img src={Image.ProfileImg} alt="event" />
                </div>
                <h3 className="fs-24 font-weight-700 text-white pl-5">
                  Eventplux is a large platform which gives you the opportunity
                  to connect with large number of people
                </h3>
              </div>
            </div>

            <p className="fs-24 pl-5 pt-10">People you may know</p>

            <div className="col-lg-12 mb-8">
              <div className="row">
                {suggestions.map((friend) => (
                  <div key={friend.id} className="col-lg-6">
                    <div className="d-flex justify-content-between align-items-center p-5">
                      <div className="d-flex">
                        <img
                          src={friend.picture}
                          alt="user"
                          className="user-img"
                        />
                        <div className="pl-5">
                          <h3 className="font-weight-400 font-size-18">
                            {`${friend.firstName} ${friend.lastName}`}
                          </h3>
                          <small className="fs-14">
                            Is a passionate event planner that pays attention to
                            simplicity in deliverables
                          </small>
                          <small className="d-block pt-3 text-primary fs-14">
                            {friend.service}
                          </small>
                        </div>
                      </div>
                      <div className="ml-5">
                        <img src={Image.Add__User} alt="AddUser" />
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
  );
};

export default PeopleYouMayKnow;
