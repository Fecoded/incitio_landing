import { useState } from "react";
import { useDispatch } from "react-redux";
import SuccessModal from "./successModal";
import { withdrawWallet } from "../../../../redux/user/user.action";

const WithdrawModal = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const hideModal = () => {};

  const onSubmit = () => {
    dispatch(withdrawWallet({ amount, hideModal }));
  };

  return (
    <>
      <div
        className="modal fade"
        id="withdrawModal"
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
              <h5
                className="left-body modal-title mx-auto"
                id="exampleModalLabel"
              >
                Make a withdrawal
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
              <div className="form-group">
                <label className="text-500 fs-18">Amount to withdrawal</label>
                <input
                  type="number"
                  name="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="form-control p-7"
                  placeholder="0"
                />
                <small>Withdrawal fee: 10%</small>
              </div>

              <div className="form-group">
                <label className="text-500 fs-18">Enter Passcode</label>
                <input
                  type="password"
                  className="form-control p-7"
                  placeholder="**********"
                />
              </div>
            </div>
            <div className="mx-auto mb-7">
              <button
                type="button"
                className="btn btn-dashboard text-white text-font-700 fs-18 btn-weight-10"
                onClick={() => onSubmit()}
              >
                Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
      <SuccessModal />
    </>
  );
};

export default WithdrawModal;
