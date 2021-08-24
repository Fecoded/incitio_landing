import { useSelector } from "react-redux";
import { Image } from "../../../../assets/images";

const FriendsRequest = () => {
  const { user_friends } = useSelector((state) => state.friend);

  return (
    <div
      className="modal fade"
      id="friendsRequestModal"
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
              Friend's Request
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
            {user_friends.map((friend) => (
              <div
                key={friend.id}
                className="d-flex mb-8 justify-content-between align-items-center"
              >
                <div className="d-flex">
                  <img
                    src={friend.fromPic}
                    alt="user"
                    className="user-img border-radius"
                  />
                  <div className="pl-5">
                    <h3 className="sub-card-text font-size-16">
                      {friend.fromName}
                    </h3>
                  </div>
                </div>
                <div className="ml-5">
                  <img src={Image.AddUser} alt="AddUser" className="user-add" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsRequest;
