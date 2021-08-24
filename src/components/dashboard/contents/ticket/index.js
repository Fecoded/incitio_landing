import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Attendees from "./attendees";
import { listUserTicket } from "../../../../redux/ticket/ticket.action";
import Events from "./events";

const Tickets = () => {
  const [show, setShow] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listUserTicket());
  }, [dispatch]);

  return (
    <div className="d-flex flex-column">
      <div className="container">
        <div className="row">
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
                  My Attendees Tickets
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
                  !show ? "bg-dashboard" : "bg-inactive"
                }  border-top`}
              >
                <h3
                  className={`left-body ${
                    !show ? "text-white" : "text-dark"
                  }  text-center pt-4`}
                >
                  My Event Tickets
                </h3>
                <div className="card-toolbar"></div>
              </div>
            </div>
          </div>
        </div>

        {show ? <Attendees /> : <Events />}
      </div>
    </div>
  );
};

export default Tickets;
