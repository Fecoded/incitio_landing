import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userEvents } from "../../../../redux/event/event.action";

import { Image } from "../../../../assets/images";

const Events = () => {
  const { user_events, likes } = useSelector((state) => state.event);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userEvents());
  }, [dispatch]);

  return (
    <div className="flex flex-column">
      <div className="container">
        <div className="col-lg-12">
          <div className="bordered p-5">
            <div className="bg-dashboard w-100 border-radius-10 h-13 p-10">
              <div className="d-flex align-items-center">
                <img src={Image.MyEvent} alt="event" />
                <div className="d-flex flex-column pl-5">
                  <p className="fs-18 font-weight-700 font-family text-white">
                    My Events
                  </p>
                  <p className="fs-18 font-family  text-white">
                    Check for Events an updates
                  </p>
                </div>
              </div>
            </div>
            <div
              className="hideScroll"
              style={{
                height: "65vh",
                overflowX: "hidden",
                scrollbarWidth: "none",
              }}
            >
              {user_events.length > 0 &&
                user_events.map((event) => (
                  <div key={event.id} className="pt-10 px-10">
                    <div className="w-100 border-radius-10 h-13 shadow">
                      <div className="d-flex align-items-center p-5">
                        <img
                          src={event.picture}
                          className="profile-img border-radius"
                          alt="event"
                        />
                        <div className="d-flex flex-column pt-5 pl-5">
                          <p className="fs-16 line-height-0">{event.name}</p>
                          <p className="fs-12" style={{ color: "grey" }}>
                            {event.time}
                          </p>
                          <p className="fs-18 font-weight-700 font-family line-height-0">
                            {event.title}
                          </p>
                          <div className="pt-5">
                            <button className="btn btn-dark">
                              View Tickets
                            </button>
                            <button className="btn bg-gray-700 text-white ml-5">
                              View Attendees
                            </button>
                            <button className="btn bg-info text-white ml-5">
                              View Event Details
                            </button>
                            <button className="btn btn-orange text-white ml-5">
                              View Event Vendors
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
