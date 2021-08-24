import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { Image } from "../../../../assets/images";

import { listCalendarFeeds } from "../../../../redux/user/user.action";

const Calendar = () => {
  const { user, calendars } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listCalendarFeeds());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column">
      <div className="container">
        <div className="col-lg-12">
          <h3 className="pb-5">About Me</h3>
          <div className="bg-dashboard border-radius-10 h-13 p-10">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-center mb-20">
                <div className="d-flex align-items-center">
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
                  <div className="d-flex flex-column  ">
                    <h3 className="fs-14 text-white pl-5">
                      <span className="font-weight-700">About me:</span>{" "}
                      {user && user.about}
                    </h3>
                    <div className="d-flex">
                      <h3 className="fs-14 text-white pl-5">
                        <span className="font-weight-700"> DOB:</span>
                        {user && user.dob}
                      </h3>
                      <h3 className="fs-14 text-white pl-5">
                        <span className="font-weight-700"> Gender:</span>
                        {user && user.gender}
                      </h3>
                      <h3 className="fs-14 text-white pl-5">
                        <span className="font-weight-700"> Status:</span>
                        {user && user.status}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="d-flex flex-column">
                  <h3 className="fs-14 font-weight-700 text-white pl-5">
                    Connect with me
                  </h3>
                  <h3 className="fs-14 font-weight-700 text-white pl-5">
                    Mail: {user && user.email}
                  </h3>
                  <h3 className="fs-14 font-weight-700 text-white pl-5">
                    Phone number:{" "}
                    <small className="fs-12">{user && user.phone}</small>
                  </h3>
                </div>
              </div>

              <div className="my-5">
                <h3 className="fs-24">Events Calendar</h3>
              </div>

              <div
                className="hideScroll"
                style={{
                  width: "100%",
                  height: "54vh",
                  overflowX: "hidden",

                  scrollbarWidth: "none",
                }}
              >
                <FullCalendar
                  plugins={[dayGridPlugin]}
                  initialView="dayGridMonth"
                  events={calendars}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
