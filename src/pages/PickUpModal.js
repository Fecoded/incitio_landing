const PickUpModal = () => {
  return (
    <div
      className="modal fade"
      id="pickUpModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Contact Address
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
                  Address:{" "}
                  <span className="font-weight-bolder">
                    37, Sunmola street, Mende, Lagos
                  </span>
                </h4>
                <h4>
                  Office Line:{" "}
                  <span className="font-weight-bolder">01-4538025</span>
                </h4>
              </div>
              <h5>Email: info@incitiobrand.com</h5>
            </div>
          </div>
          <div className="modal-footer">
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

export default PickUpModal;
