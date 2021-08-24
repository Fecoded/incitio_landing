import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WalletModal from "./walletModal";
import { Image } from "../../../../assets/images";
import WithdrawModal from "./withdrawModal";
import {
  getUserWalletAmount,
  getUserAccount,
} from "../../../../redux/user/user.action";

const Wallet = () => {
  const [show] = useState(true);

  let wallet = 7;

  const walletArray = Array.from(new Array(Math.floor(wallet)));

  const { userWallet, user, account, success } = useSelector(
    (state) => state.user
  );

  // const { data } = account;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWalletAmount());
    dispatch(getUserAccount());
  }, [dispatch]);

  return (
    <>
      <div className="d-flex flex-column">
        <div className="container">
          <div
            className="bordered border-radius-10"
            style={{ height: "586px" }}
          >
            {!success ? (
              <div className="p-10">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <h1>My Wallet</h1>
                  <div style={{ marginTop: "150px" }}>
                    <h3
                      className="fs-24 text-center pb-7"
                      style={{ color: "grey" }}
                    >
                      Nothing to see here yet
                    </h3>
                    <button
                      data-toggle="modal"
                      data-target="#walletModal"
                      className="btn btn-lg text-white bg-dashboard fs-16"
                      style={{ minWidth: "280px" }}
                    >
                      Add Account Details
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-10">
                <div className="d-flex flex-column">
                  <div className="justify-content-end row">
                    <div className="col-lg-12">
                      <div className="d-flex justify-content-between">
                        <button
                          data-toggle="modal"
                          data-target="#walletModal"
                          className="btn btn-lg text-white bg-dashboard fs-16"
                          style={{ minWidth: "163px" }}
                        >
                          Update Account
                        </button>
                        <h1>My Wallet</h1>

                        <button
                          data-toggle="modal"
                          data-target="#withdrawModal"
                          className="btn btn-lg text-white bg-dashboard fs-16"
                          style={{ minWidth: "163px" }}
                        >
                          Withdraw
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="wallet-cover mx-auto mt-5 position-relative">
                    <div className=" ">
                      <div className="d-flex justify-content-between align-items-center pr-5 pt-5 pl-5">
                        <p className="text-white">{user && user.name}</p>
                        <span>
                          <img src={Image.BgsmallIcon} alt="icon" />
                        </span>
                      </div>
                      <div className="d-flex flex-column justify-content-center align-items-center">
                        <p className="text-white">Avaliable Balance</p>
                        <h3 className="fs-24 font-weight-700 text-white">
                          {userWallet !== null && userWallet.amountString}
                        </h3>
                      </div>
                    </div>

                    <div className="wallet-icon"></div>
                  </div>

                  <div className="justify-content-center row">
                    <div className="col-lg-5">
                      <div className="row justify-content-between pt-10">
                        <div className="d-flex flex-column">
                          <p className="fs-14" style={{ color: "grey" }}>
                            Bank
                          </p>
                          <h3 className="fs-24 font-weight-700">
                            {account && account.bank}
                          </h3>
                        </div>
                        <div className="d-flex flex-column ">
                          <p className="fs-14" style={{ color: "grey" }}>
                            Account Number
                          </p>
                          <h3 className="fs-24 font-weight-700">
                            {account && account.accountNo}
                          </h3>
                        </div>
                        <div className="d-flex flex-column ">
                          <p className="fs-14" style={{ color: "grey" }}>
                            Account Name
                          </p>
                          <h3 className="fs-24 font-weight-700">
                            {account && account.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center">
                    {!show ? (
                      <div
                        className="card card-custom shadow border-radius-10 mt-30"
                        style={{
                          width: "922px",
                          height: "200px",
                        }}
                      >
                        <div
                          className="d-flex justify-content-center align-items-center"
                          style={{ height: "200px" }}
                        >
                          <h3 className="fs-24 font-weight-700">
                            No Transaction yet
                          </h3>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <div className="col-lg-12">
                          <div className="d-flex justify-content-between pt-10">
                            <p
                              className="fs-14 pl-23"
                              style={{ color: "grey" }}
                            >
                              Details
                            </p>

                            <p
                              className="fs-14 pr-15"
                              style={{ color: "grey" }}
                            >
                              Amount
                            </p>
                          </div>
                        </div>

                        <div
                          className="card card-custom shadow border-radius-10 mt-1 hideScroll"
                          style={{
                            width: "922px",
                            height: "34vh",
                            overflowX: "hidden",

                            scrollbarWidth: "none",
                          }}
                        >
                          <div className="wallet-details">
                            {walletArray.map((idx) => (
                              <div
                                key={idx}
                                className="d-flex justify-content-between p-10"
                              >
                                <span className="d-flex">
                                  <img src={Image.Icon} alt="icon" />
                                  <span className="d-flex flex-column pl-5">
                                    <h4>Received from Isreal ayankanya</h4>
                                    <small>Bank Transfer</small>
                                  </span>
                                </span>

                                <span className="d-flex flex-column">
                                  <h4>N 30, 000</h4>
                                  <small>21/10/2020</small>
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <WalletModal />
      <WithdrawModal />
    </>
  );
};

export default Wallet;
