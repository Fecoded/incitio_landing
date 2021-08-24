import { useState } from "react";
import { connect } from "react-redux";
import { addEventTime } from "../../../../redux/event/event.action";

const Time = ({ addEventTime }) => {
  const [tag, setTag] = useState("");

  const onTag = () => {
    addEventTime(tag);
    window.$("#timeModal").modal("hide");
  };

  return (
    <div
      className="modal fade"
      id="timeModal"
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
              Tag People you know
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
          <div className="modal-body">
            <div className="form-group">
              <label className="text-500 fs-14">Search people</label>
              <input
                type="text"
                name="tag"
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                className="form-control p-7 w-50"
                placeholder="Type a people’s name or event name"
              />
            </div>
            <h3 className="fs-14 font-weight-bold">Recently Contacted</h3>
            <div className="checkbox-inline">
              <label className="checkbox checkbox-outline checkbox-success fs-14 mt-5">
                <input type="checkbox" />
                <span></span>
                Select All
              </label>
            </div>
            <h3 className="fs-14 font-weight-bold mt-5">People you know</h3>
            <div className="d-flex align-items-center">
              <div className="checkbox-inline">
                <label className="checkbox checkbox-outline checkbox-success fs-14 mt-3">
                  <input type="checkbox" />
                  <span></span>
                  Demmah fusho
                </label>
              </div>
              <div className="checkbox-inline pl-10">
                <label className="checkbox checkbox-outline checkbox-success fs-14 mt-3">
                  <input type="checkbox" />
                  <span></span>
                  Seyi Ola
                </label>
              </div>
              <div className="checkbox-inline pl-10">
                <label className="checkbox checkbox-outline checkbox-success fs-14 mt-3">
                  <input type="checkbox" />
                  <span></span>
                  Loris and cakes
                </label>
              </div>
              <div className="checkbox-inline pl-10">
                <label className="checkbox checkbox-outline checkbox-success fs-14 mt-3">
                  <input type="checkbox" />
                  <span></span>
                  Fix and Nit
                </label>
              </div>
              <div className="checkbox-inline  pl-10">
                <label className="checkbox checkbox-outline checkbox-success fs-14 mt-3">
                  <input type="checkbox" />
                  <span></span>
                  Cakes event
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <div className="checkbox-inline">
                <label className="checkbox checkbox-outline checkbox-success fs-14 mt-3">
                  <input type="checkbox" />
                  <span></span>
                  Bella Naija
                </label>
              </div>
            </div>
          </div>
          <div className="mx-auto my-7">
            <button
              type="button"
              className="btn btn-dashboard text-white text-font-700 fs-18 btn-weight-10"
              onClick={() => onTag()}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addEventTime })(Time);
