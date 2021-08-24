import { useState } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { addEventDate } from "../../../../redux/event/event.action";

const CalendarComponent = ({ addEventDate }) => {
  const [date, onChange] = useState(new Date());

  const onChangeDate = (value, event) => {
    addEventDate({ date: value });
    onChange(value);
  };

  const onDone = () => {
    window.$("#calendarModal").modal("hide");
  };

  return (
    <div
      className="modal fade"
      id="calendarModal"
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
              Calendar
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
            <div className="form-group row justify-content-center align-items-center">
              <div className="col-lg-12">
                <Calendar
                  onChange={(value, event) => onChangeDate(value, event)}
                  value={date}
                />
              </div>
            </div>
          </div>
          <div className="mx-auto my-7">
            <button
              type="button"
              className="btn btn-dashboard text-white text-font-700 fs-18 btn-weight-10"
              onClick={() => onDone()}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addEventDate })(CalendarComponent);
