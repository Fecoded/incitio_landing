import { useSelector } from "react-redux";
import { Image } from "../../../../assets/images";
const TicketDetailsModal = ({ ticket }) => {
  const { user } = useSelector((state) => state.user);

  return (
    <div
      className="modal fade"
      id="ticketDetailsModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdrop"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-md"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header bg-dashboard">
            <h5
              className="left-body modal-title mx-auto text-white fs-24"
              id="exampleModalLabel"
            >
              Ticket Details
            </h5>
            <button
              type="button"
              className="close "
              data-dismiss="modal"
              aria-label="Close"
            >
              <i aria-hidden="true" className="ki ki-close text-white"></i>
            </button>
          </div>
          <div className="modal-body">
            <h3 className="fs-18">{ticket && ticket.description}</h3>
            <div className="separator separator-solid my-7"></div>

            <img
              src={Image.TicketImg}
              alt="ticketdetails"
              style={{
                width: "452px",
                height: "250px",
              }}
            />
            <div className="my-7">
              <div className="col-9">
                <div className="row">
                  <h3 className="fs-16 font-weight-700 col">Name</h3>
                  <h3 className="fs-14 col">{user && user.name}</h3>
                </div>
                <div className="row">
                  <h3 className="fs-16 font-weight-700 col">Address :</h3>
                  <h3 className="fs-14 col">{ticket && ticket.address}</h3>
                </div>
                <div className="row">
                  <h3 className="fs-16 font-weight-700 col">Phone Number</h3>
                  <h3 className="fs-14 col">{user && user.phone}</h3>
                </div>
                <div className="row">
                  <h3 className="fs-16 font-weight-700 col">Age Range</h3>
                  <h3 className="fs-14 col">{ticket && ticket.age}</h3>
                </div>
                <div className="row">
                  <h3 className="fs-16 font-weight-700 col">Ticket Status</h3>
                  <h3 className="fs-14 col">
                    {ticket && ticket.status === "Active" ? (
                      <span class="label label-success label-pill label-inline mr-2">
                        Active
                      </span>
                    ) : (
                      <span class="label label-danger label-pill label-inline mr-2">
                        Used
                      </span>
                    )}
                  </h3>
                </div>
                <div className="row">
                  <h3 className="fs-16 font-weight-700 col">Description </h3>
                  <h3 className="fs-14 col">{ticket && ticket.description}</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-dashboard p-10">
            <div className="text-center">
              <div className="d-flex justify-content-between">
                <h3 className="fs-16 font-weight-700 text-white">Time Start</h3>
                <h3 className="fs-16 font-weight-700 text-white">Time End</h3>
                <h3 className="fs-16 font-weight-700 text-white">Total</h3>
              </div>
              <div className="d-flex justify-content-between">
                <h3 className="fs-16 font-weight-400 text-white">
                  {ticket && ticket.start}
                </h3>
                <h3 className="fs-16 font-weight-400 text-white">
                  {ticket && ticket.end}
                </h3>
                <h3 className="fs-16 font-weight-400 text-white">Free</h3>
              </div>
              <div className="d-flex justify-content-between pt-5">
                <h3 className="fs-16 font-weight-700 text-white">Total</h3>

                <h3 className="fs-16 font-weight-700 text-white">Free</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketDetailsModal;
