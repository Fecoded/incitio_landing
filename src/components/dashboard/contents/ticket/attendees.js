import { useState } from "react";
import { useSelector } from "react-redux";
import { Image } from "../../../../assets/images";
import TicketDetailsModal from "./ticketDetailsModal";

const Attendees = () => {
  const [ticket, setTicket] = useState(null);
  const { usertickets } = useSelector((state) => state.ticket);

  return (
    <>
      <div className="d-flex flex-column">
        <div className="bordered border-radius-10 p-10">
          <h3 className="fs-18 my-7">
            Number of attendees ({usertickets.length})
          </h3>
          {usertickets.length > 0 ? (
            <div
              className="col-12 hideScroll"
              style={{
                height: "65vh",
                overflowX: "hidden",
                scrollbarWidth: "none",
              }}
            >
              <div className="row">
                {usertickets.map((ticket) => (
                  <div key={ticket.id} className="col-6 mb-5">
                    <div className="bordered border-radius-10">
                      <div className="d-flex">
                        <img src={Image.TicketImg} alt="ticketImg" />
                        <div className="d-flex flex-column pl-5 pr-5 pt-5">
                          <div className="d-flex justify-content-between align-items-center">
                            <h3 className="font-weight-500">Free</h3>
                            {ticket.status === "Active" ? (
                              <span class="label label-success label-pill label-inline mr-2">
                                Active
                              </span>
                            ) : (
                              <span class="label label-danger label-pill label-inline mr-2">
                                Used
                              </span>
                            )}
                          </div>
                          <h3 className="fs-14 pt-5">
                            <span className="font-weight-700">
                              {" "}
                              Time start:
                            </span>
                            {ticket.start}
                          </h3>
                          <h3 className="fs-14 pt-5">
                            <span className="font-weight-700"> Time end:</span>
                            {ticket.end}
                          </h3>
                          <h3 className="fs-14 pt-5">
                            <span className="font-weight-700">
                              {" "}
                              Description:
                            </span>
                            {ticket.description}
                          </h3>
                          <button
                            data-toggle="modal"
                            data-target="#ticketDetailsModal"
                            className="btn mt-10 text-white bg-dashboard fs-16"
                            style={{ width: "156px" }}
                            onClick={() => setTicket(ticket)}
                          >
                            Ticket Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <TicketDetailsModal ticket={ticket} />
    </>
  );
};

export default Attendees;
