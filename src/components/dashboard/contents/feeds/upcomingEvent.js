import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCurrent } from "../../../../redux/common/commonAction";

const UpcomingEvents = () => {
  const { events } = useSelector((state) => state.event);
  const { user } = useSelector((state) => state.user);

  const history = useHistory();
  const dispatch = useDispatch();

  const onEvent = (event) => {
    setCurrent(dispatch(setCurrent(event)));
    history.push("/upcoming-event");
    window.$("#upcomingEventModal").modal("hide");
  };

  return (
    <>
      <div
        className="modal fade"
        id="upcomingEventModal"
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
                Upcoming Events
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
              {events.map((event) => (
                <div
                  key={event.id}
                  className="d-flex mb-8 justify-content-between align-items-center cursor-pointer"
                  // onClick={() => onEvent(event)}
                >
                  <div className="d-flex">
                    <img
                      src={event.picture}
                      alt="user"
                      className="user-img border-radius"
                    />
                    <div className="pl-5">
                      <h3 className="sub-card-text font-size-16">
                        {event.title}
                      </h3>
                      <small
                        className="fs-12"
                        dangerouslySetInnerHTML={{ __html: event.content }}
                      ></small>
                      <small className="d-block pt-3 text-primary fs-12">
                        By {user && user.name}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingEvents;
