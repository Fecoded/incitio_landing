import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpsertAccount } from "../../../../redux/user/user.action";

const WalletModal = () => {
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [accountNo, setAccountNo] = useState("");

  const dispatch = useDispatch();
  const { account, success } = useSelector((state) => state.user);

  const onCreate = () => {
    if (success) {
      dispatch(
        UpsertAccount({
          id: account.id,
          name,
          bank,
          accountNo,
          type: 2,
        })
      );
    } else {
      dispatch(
        UpsertAccount({
          name,
          bank,
          accountNo,
          type: 1,
        })
      );
    }
  };

  return (
    <div
      className="modal fade"
      id="walletModal"
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
              Account Details
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
              <label className="text-500 fs-18">Account Number</label>
              <input
                type="number"
                name="accountNo"
                value={accountNo}
                onChange={(e) => setAccountNo(e.target.value)}
                className="form-control p-7"
                placeholder="Account Number"
              />
            </div>
            <div className="form-group">
              <label className="text-500 fs-18">Bank</label>
              <input
                type="text"
                name="bank"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="form-control p-7"
                placeholder="Bank"
              />
            </div>
            <div className="form-group">
              <label className="text-500 fs-18">Account Name</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control p-7"
                placeholder="Account Name"
              />
            </div>
          </div>
          <div className="mx-auto mb-7">
            <button
              type="button"
              className="btn btn-dashboard text-white text-font-700 fs-18 btn-weight-10"
              onClick={() => onCreate()}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
