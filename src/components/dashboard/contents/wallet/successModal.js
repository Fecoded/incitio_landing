import { Image } from "../../../../assets/images";

const SuccessModal = () => {
  return (
    <div
      className="modal fade"
      id="successModal"
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
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <i aria-hidden="true" className="ki ki-close"></i>
            </button>
          </div>
          <div className="modal-body d-flex flex-column">
            <img
              src={Image.Checked}
              alt="checked"
              className="mx-auto"
              style={{ height: "250px", width: "250px" }}
            />
            <h4 className="text-center pt-5">Your withdrawal was succesful!</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
