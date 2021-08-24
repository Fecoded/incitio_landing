import swal from "sweetalert";

const KeyboardModal = () => {
  let tracking_no;
  const generateTrackingNo = () => {
    const input = "INCITIO-5775XXXXXTC";
    const randomNumber = () => Math.trunc(Math.random() * 10); // To generate a random number
    const generateTrackingNum = (str) => str.replace(/X/g, randomNumber);
    tracking_no = generateTrackingNum(input);
  };

  const createDirectOrder = () => {
    generateTrackingNo();
    window.$("#exampleModal").modal("hide");

    swal({
      title: "Your Incito Tracking No!",
      text: `${tracking_no}`,
      icon: "success",
      button: "Cancel",
    });
  };
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              All Payment be made into our verified Account Details
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
            <div className="p-3">
              <div className="mb-3">
                <h4>
                  Account Name:{" "}
                  <span className="font-weight-bolder">INCITIO LTD</span>
                </h4>
                <h4>
                  Account No:{" "}
                  <span className="font-weight-bolder">1016670203</span>
                </h4>
                <h4>
                  Bank: <span className="font-weight-bolder">Zenith bank</span>
                </h4>
              </div>
              <h5>
                Call 01-4538025 9am-6pm <br />
                08090260202 9am-6pm/Whatsapp 9am -7pm
              </h5>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => createDirectOrder()}
              type="button"
              className="btn btn-success font-weight-bold"
            >
              I have made payment
            </button>
            <button
              type="button"
              className="btn btn-light-danger font-weight-bold"
              data-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyboardModal;
