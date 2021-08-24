import { useState } from "react";
import { Image } from "../assets/images";
import data from "../utils/States&LGA.json";
import { PaystackButton } from "react-paystack";
import axios from "axios";
import swal from "sweetalert";
import { newAlert } from "../redux/common/Alert";
// import ReactWhatsapp from "react-whatsapp";

let cost = 9600;
// const url = "http://localhost:5000/api/v1";
const url = "https://apis.incitiobrand.com/api/v1";

const Keyboard = () => {
  const [product_name] = useState("Universal Wireless Bluetooth Keyboard");
  const [checked] = useState("checked");
  const [product_color, setProductColor] = useState("");
  const [fullname, setFullname] = useState("");
  const [code, setCode] = useState("");
  const [phone, setPhone] = useState("");
  const [phone_alt, setPhone_alt] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [state, setStates] = useState("");
  const [lga, setLGA] = useState("");

  const [mode_of_payment, setModeOfPayment] = useState("");
  const [qty, setQty] = useState(1);
  let [amount, setAmount] = useState(cost);

  const [loading, setLoading] = useState(false);
  const [orderLoading, setOrderLoading] = useState(false);
  const [landmark, setLandMark] = useState("");

  const addCount = () => {
    let x = qty + 1;
    setQty(x);
    setAmount(amount * x);
    cost = amount * x;
  };

  const removeCount = () => {
    if (qty !== 1) {
      let x = qty - 1;
      setQty(x);
      setAmount(amount / qty);
      cost = amount / qty;
    }
  };

  const _amount = amount * 100;
  // const publicKey = "pk_test_a3bace479ec8df26dd10d1fd8163e3d11c91d4fa";
  const publicKey = "pk_live_9fba92d4d0cb3cd8d7b5f50e5098e6c7053ef4b2";

  const config = {
    email,
    price: amount,
    amount: _amount,
    metadata: {
      name: fullname,
      phone,
    },
    publicKey,
  };

  const onSuccess = () => {
    newAlert("Payment was successful", "success");
    submitRequest();
  };

  const componentProps = {
    ...config,
    text: "Make Payment",
    onSuccess: () => onSuccess(),
    onClose: () => null,
  };

  let order_no;
  const generateTrackingNo = () => {
    const input = "INCITIO-5775XXXXXTC";
    const randomNumber = () => Math.trunc(Math.random() * 10); // To generate a random number
    const generateTrackingNum = (str) => str.replace(/X/g, randomNumber);
    order_no = generateTrackingNum(input);
  };

  const validateCouponCode = async () => {
    setLoading(true);

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (code) {
      try {
        const res = await axios.get(
          `https://incitiobrand.com/api/api/checkCode/${code}`
        );

        const body = JSON.stringify({ code });

        if (res.data.success) {
          try {
            const res = await axios.post(
              `${url}/promo/checkcoupon`,
              body,
              config
            );

            let discount = Math.round(cost * 0.2);
            discount = cost - discount;
            setAmount(discount);

            setLoading(false);
            newAlert(res.data.message, "success");
          } catch (err) {
            setLoading(false);
            newAlert(err.response.data.message, "error");
          }
        } else {
          newAlert(res.data.message, "error");
          setLoading(false);
        }
      } catch (err) {
        console.log(err);
        // newAlert(err.response.data.errors, "error");
        setLoading(false);
      }
    } else {
      newAlert("Coupon code is required", "error");
      setLoading(false);
    }
  };

  const submitRequest = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    setOrderLoading(true);

    const body = JSON.stringify({
      fullname,
      email,
      phone,
      phone_alt,
      mode_of_payment,
      product_name,
      product_color,
      amount,
      order_no,
      qty,
      code,
      address,
      lga,
      state,
      landmark,
    });

    if (
      fullname === "" ||
      email === "" ||
      product_color === "" ||
      mode_of_payment === "" ||
      phone === "" ||
      amount === ""
    ) {
      newAlert("Please enter required fields", "error");
      setOrderLoading(false);
    } else {
      if (mode_of_payment === "Direct Bank Transfer") {
        generateTrackingNo();
      } else {
        createDirectOrder();
      }

      try {
        const res = await axios.post(`${url}/promo`, body, config);

        newAlert(res.data.message, "success");
        setOrderLoading(false);
      } catch (err) {
        newAlert(err.response.data.errors, "error");
        setOrderLoading(false);
      }
    }
  };

  const createDirectOrder = () => {
    generateTrackingNo();
    window.$("#exampleModal").modal("hide");

    swal({
      title: "Your Order No!",
      text: `${order_no}`,
      icon: "success",
      button: "Cancel",
    });
  };

  return (
    <>
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
                    Bank:{" "}
                    <span className="font-weight-bolder">Zenith bank</span>
                  </h4>
                </div>
                <h5>
                  Call 01-4538025 9am-6pm <br />
                  08090260202 9am-6pm/Whatsapp 9am -7pm
                </h5>
                {/* <h5 className="pt-7">
                      Send Prove of Payment to This number 08090260202 on Whatsapp
                    </h5> */}
              </div>
            </div>
            <div className="modal-footer">
              {/* <div className="btn btn-success font-weight-bold">
    
                  <ReactWhatsapp
                    number="08167163048"
                    element=""
                    message="Hello World!!!"
                    
                  />
                  </div> */}
              {fullname === "" ||
              email === "" ||
              product_color === "" ||
              mode_of_payment === "" ||
              phone === "" ||
              amount === "" ? (
                <button
                  type="button"
                  className="btn btn-light-danger font-weight-bold"
                  data-dismiss="modal"
                >
                  Please enter required fields
                </button>
              ) : (
                <>
                  <a
                    onClick={() => submitRequest()}
                    href="https://wa.me/2348090260202?text=I%20have%20successfully%20made%20payment%20and%20here%20is%20my%20Proof%20of%20Payment%20or%20Alert%20Screenshot"
                    // data-dismiss="modal"
                    type="button"
                    className="btn btn-success font-weight-bold"
                  >
                    Send Proof Payment
                  </a>
                  <button
                    type="button"
                    className="btn btn-light-danger font-weight-bold"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div
        className="content d-flex flex-column flex-column-fluid"
        id="kt_content"
      >
        <div className="d-flex flex-column-fluid">
          <div className="container">
            <div className="d-flex flex-row mx-auto">
              <div className="flex-row-fluid">
                <div className="col-md-7 col-lg-12 col-xxl-7 mx-auto">
                  <div className="card card-custom card-stretch gutter-b">
                    <div className="card-body p-xxl-10 pb-20">
                      <div className="row mb-17">
                        <div className="col-xxl-12 mb-11 mb-xxl-0">
                          <div className="rounded d-flex align-items-center justify-content-center">
                            <div className="col-xxl-12 pl-xxl-5">
                              <h2 className="font-weight-bolder text-dark mb-7 mt-xxl-5 ">
                                Universal Wireless Bluetooth Keyboard, Flip
                                Magnetic Leather Carrying Case Cover with Stand
                                for iOS/Android Phones.
                              </h2>

                              <a
                                href="#form"
                                className="btn btn-block text-white font-weight-boldest h2"
                                style={{ background: "rgb(232, 72, 140)" }}
                              >
                                GET IT NOW
                              </a>
                              <div className="p-20">
                                <img
                                  src={Image.Three}
                                  id="sm-image"
                                  className="mw-100 w-xxl-100 w-sm-100"
                                  style={{ transform: "scale(1.3)" }}
                                  alt="..."
                                />
                              </div>

                              <div className="mb-text-sizing line-height-xl h3">
                                Compatible with 4.5''-6.8'' (width of 6-9.5cm)
                                Bluetooth cell phone, including for Android, for
                                Windows and for iOS Phones. *Light weight,
                                compact, easy to carry and handle. Detachable
                                magnetic keyboard tray to turn keyboard cover
                                into classic portfolio case. *Unique folio
                                design prevents scratches while allowing easy
                                access to all ports. *Built-in stand securely
                                holds your cellphone hands free in a perfect
                                angle for typing or watching movies. Premium PU
                                leather protective exterior provides durable,
                                rugged, shockproof cushion when dropped and the
                                plastic keyboard is dust-proof, scratch,
                                resistant, high performance and high quality.
                              </div>

                              <a
                                href="#form"
                                className="btn btn-block text-white font-weight-boldest h2 my-5"
                                style={{ background: "rgb(232, 72, 140)" }}
                              >
                                GET IT NOW
                              </a>

                              <div className="p-25">
                                <img
                                  id="sm-image"
                                  src={Image.One}
                                  className="mw-100 w-100"
                                  style={{ transform: "scale(1.3)" }}
                                  alt="..."
                                />
                              </div>
                              <div className="p-20">
                                <img
                                  src={Image.Two}
                                  id="sm-image"
                                  className="mw-100 w-100"
                                  style={{ transform: "scale(1.3)" }}
                                  alt="..."
                                />
                              </div>

                              <h2 className="font-weight-bolder text-dark mb-7 mt-xxl-5">
                                THIS SMART WIRELESS BLUETOOTH KEYBOARD IS
                                SUITABLE FOR;
                              </h2>

                              <div className="line-height-xl h3">
                                1. KIDS - To help them learn, get acquainted
                                with PC/Laptop Keyboard typing and
                                functionalities and experience Technology
                                On-The-Go conveniently and efficient.{" "}
                              </div>
                              <div className="p-20">
                                <img
                                  src={Image.Four}
                                  id="sm-image"
                                  className="mw-100 w-100"
                                  style={{ transform: "scale(1.3)" }}
                                  alt="..."
                                />
                              </div>
                              <div className="p-20">
                                <img
                                  src={Image.Seven}
                                  id="sm-image"
                                  className="mw-100 w-100"
                                  style={{ transform: "scale(1.3)" }}
                                  alt="..."
                                />
                              </div>
                              <a
                                href="#form"
                                className="btn btn-block text-white font-weight-boldest h2 my-3"
                                style={{ background: "rgb(232, 72, 140)" }}
                              >
                                GET IT NOW
                              </a>
                              <div className="line-height-xl h3">
                                2. Corporate Individual/S.M.E- Ease in meetings,
                                conferences and corporate functions to have your
                                smart phone fully functional and feeling exactly
                                like a Laptop PC. The stylish look and
                                portability is second to none.{" "}
                              </div>
                              <div className="p-20">
                                <img
                                  src={Image.Six}
                                  id="sm-image"
                                  className="mw-100 w-100"
                                  style={{ transform: "scale(1.3)" }}
                                  alt="..."
                                />
                              </div>
                              <div className="p-20">
                                <img
                                  src={Image.Five}
                                  id="sm-image"
                                  className="mw-100 w-100"
                                  style={{ transform: "scale(1.3)" }}
                                  alt="..."
                                />
                              </div>
                              <a
                                href="#form"
                                className="btn btn-block text-white font-weight-boldest h2 my-3"
                                style={{ background: "rgb(232, 72, 140)" }}
                              >
                                GET IT NOW
                              </a>
                              <div className="line-height-xl h3">
                                3.Senior Citizens/Others- Whichever category you
                                fall, teenagers, Youth or the Older Generation,
                                our Smart Bluetooth Wireless Keyboard gives you
                                the same value of being efficient and flexible
                                not compromising its stylish, high quality,
                                light weight, Scratch resistant, Easy to carry,
                                and long lasting Cell Phone Cover/Pouch
                              </div>
                              <div className="p-20">
                                <img
                                  src={Image.Eight}
                                  id="sm-image"
                                  className="mw-100 w-100"
                                  style={{ transform: "scale(1.3)" }}
                                  alt="..."
                                />
                              </div>
                              <a
                                href="#form"
                                className="btn btn-block text-white font-weight-boldest h2 my-3"
                                style={{ background: "rgb(232, 72, 140)" }}
                              >
                                GET IT NOW
                              </a>
                            </div>
                          </div>
                        </div>

                        <div className="col-xxl-6 mb-11 mb-xxl-0 pl-xxl-11 pt-10">
                          <div className="card card-custom card-stretch">
                            <div className="card-body p-0 rounded px-10 py-15 d-flex align-items-center justify-content-center">
                              <img
                                src={Image.Gray}
                                className="mw-100 w-150px"
                                style={{ transform: "scale(1.6)" }}
                                alt="..."
                              />
                            </div>
                            <h4 className="text-center">Navy Blue</h4>
                          </div>
                        </div>
                        <div className="col-xxl-6 mb-11 mb-xxl-0 pl-xxl-4 pt-xxl-10">
                          <div className="card card-custom card-stretch">
                            <div className="card-body p-0 rounded px-10 py-15 d-flex align-items-center justify-content-center">
                              <img
                                src={Image.Black}
                                className="mw-100 w-150px"
                                style={{ transform: "scale(1.6)" }}
                                alt="..."
                              />
                            </div>
                            <h4 className="text-center">Black</h4>
                          </div>
                        </div>
                        <div className="col-xxl-6 mb-11 mb-xxl-0 pl-xxl-11 pt-xxl-10">
                          <div className="card card-custom card-stretch">
                            <div className="card-body p-0 rounded px-10 py-15 d-flex align-items-center justify-content-center">
                              <img
                                src={Image.Purple}
                                className="mw-100 w-150px"
                                style={{ transform: "scale(1.6)" }}
                                alt="..."
                              />
                            </div>
                            <h4 className="text-center">Purple</h4>
                          </div>
                        </div>
                        <div className="col-xxl-6 mb-11 mb-xxl-0 pl-xxl-11 pt-xxl-10">
                          <div className="card card-custom card-stretch">
                            <div className="card-body p-0 rounded px-10 py-15 d-flex align-items-center justify-content-center">
                              <img
                                src={Image.Ash}
                                className="mw-100 w-150px"
                                style={{ transform: "scale(1.6)" }}
                                alt="..."
                              />
                            </div>
                            <h4 className="text-center">Grey</h4>
                          </div>
                        </div>
                        <div className="col-xxl-6 mb-11 mb-xxl-0 pl-xxl-11 pt-xxl-10">
                          <div className="card card-custom card-stretch">
                            <div className="card-body p-0 rounded px-10 py-15 d-flex align-items-center justify-content-center">
                              <img
                                src={Image.Red}
                                className="mw-100 w-150px"
                                style={{ transform: "scale(1.6)" }}
                                alt="..."
                              />
                            </div>
                            <h4 className="text-center">Red</h4>
                          </div>
                        </div>

                        <div
                          id="form"
                          tabIndex="-1"
                          className="col-xxl-12 pl-xxl-5 pt-10"
                        >
                          <div className="border rounded p-10">
                            <form className="form">
                              <div className="form-group row">
                                <label className="col-xl-3 col-lg-3 col-form-label">
                                  Full Name
                                </label>
                                <div className="col-lg-9 col-xl-9">
                                  <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="text"
                                    placeholder="Fullname is required"
                                    value={fullname}
                                    name="fullname"
                                    onChange={(e) =>
                                      setFullname(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xl-3 col-lg-3 col-form-label">
                                  Email Address
                                </label>
                                <div className="col-lg-9 col-xl-9">
                                  <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="email"
                                    placeholder="email is required"
                                    value={email}
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xl-3 col-lg-3 col-form-label">
                                  Phone
                                </label>
                                <div className="col-lg-9 col-xl-9">
                                  <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="phone"
                                    placeholder="Enter a valid Phone Number*"
                                    value={phone}
                                    name="phone"
                                    required
                                    onChange={(e) => setPhone(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xl-3 col-lg-3 col-form-label">
                                  Other Phone
                                </label>
                                <div className="col-lg-9 col-xl-9">
                                  <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="phone"
                                    placeholder="Phone Number (Optional)"
                                    value={phone_alt}
                                    name="phone_alt"
                                    onChange={(e) =>
                                      setPhone_alt(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xl-3 col-lg-3 col-form-label">
                                  Address
                                </label>
                                <div className="col-lg-9 col-xl-9">
                                  <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="text"
                                    placeholder="address is required"
                                    value={address}
                                    name="address"
                                    onChange={(e) => setAddress(e.target.value)}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xl-3 col-lg-3 col-form-label">
                                  State
                                </label>
                                <div className="col-lg-9 col-xl-9">
                                  <select
                                    className="form-control form-control-lg form-control-solid"
                                    value={state}
                                    onChange={(e) => setStates(e.target.value)}
                                  >
                                    <option value="">State</option>
                                    {data.map((data) => (
                                      <option key={data.id} value={data.name}>
                                        {data.name}
                                      </option>
                                    ))}
                                  </select>
                                </div>
                              </div>

                              <div className="form-group row">
                                <label className="col-xl-3 col-lg-3 col-form-label">
                                  LGA
                                </label>
                                <div className="col-lg-9 col-xl-9">
                                  <select
                                    className="form-control form-control-lg form-control-solid"
                                    value={lga}
                                    onChange={(e) => setLGA(e.target.value)}
                                  >
                                    <option value="">LGA</option>
                                    {data
                                      .filter((data) => data.name === state)
                                      .map((data) =>
                                        data.lgas.map((data) => (
                                          <option
                                            key={data.id}
                                            value={data.name}
                                          >
                                            {data.name}
                                          </option>
                                        ))
                                      )}
                                  </select>
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-xl-3 col-lg-3 col-form-label">
                                  LandMark
                                </label>
                                <div className="col-lg-9 col-xl-9">
                                  <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="text"
                                    placeholder="landmark (Optional)"
                                    value={landmark}
                                    name="landmark"
                                    onChange={(e) =>
                                      setLandMark(e.target.value)
                                    }
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="fcol-xl-3 col-lg-3 col-form-label">
                                  Choose a Color
                                </label>
                                <div className="radio-inline pl-3">
                                  <label
                                    className={`radio radio-accent radio-grey ${
                                      product_color === "Grey" && checked
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="color-selector"
                                      onChange={() => setProductColor("Grey")}
                                    />
                                    <span></span>
                                    <p className="pt-3">Grey</p>
                                  </label>
                                  <label
                                    className={`radio radio-accent radio-info ${
                                      product_color === "Purple" && checked
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="color-selector"
                                      className="w-300px"
                                      onChange={() => setProductColor("Purple")}
                                    />
                                    <span className=""></span>
                                    <p className="pt-3">Purple</p>
                                  </label>
                                  <label
                                    className={`radio radio-accent radio-dark ${
                                      product_color === "Black" && checked
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="color-selector"
                                      onChange={() => setProductColor("Black")}
                                    />
                                    <span></span>
                                    <p className="pt-3">Black</p>
                                  </label>
                                  <label
                                    className={`radio radio-accent radio-navy-blue ${
                                      product_color === "Navy Blue" && checked
                                    } `}
                                  >
                                    <input
                                      type="radio"
                                      name="color-selector"
                                      onChange={() =>
                                        setProductColor("Navy Blue")
                                      }
                                    />
                                    <span></span>
                                    <p className="pt-3">Navy Blue</p>
                                  </label>
                                  <label
                                    className={`radio radio-accent radio-danger ${
                                      product_color === "Red" && checked
                                    }`}
                                  >
                                    <input
                                      type="radio"
                                      name="color-selector"
                                      onChange={() => setProductColor("Red")}
                                    />
                                    <span></span>
                                    <p className="pt-3">Red</p>
                                  </label>
                                </div>
                              </div>
                              {/* <div className="my-3">
                                <h4 className="font-weight-bolder my-3">
                                  For Pickup Only
                                </h4>
                                <div className="form-group row">
                                  <label className="col-xl-3 col-lg-3 col-form-label">
                                    Name
                                  </label>
                                  <div className="col-lg-9 col-xl-9">
                                    <input
                                      type="text"
                                      className="form-control form-control-lg form-control-solid"
                                    />
                                  </div>
                                </div>
                                <div className="form-group row">
                                  <label className="col-xl-3 col-lg-3 col-form-label">
                                    Phone Number
                                  </label>
                                  <div className="col-lg-9 col-xl-9">
                                    <input
                                      type="text"
                                      className="form-control form-control-lg form-control-solid"
                                    />
                                  </div>
                                </div>
                              </div> */}
                            </form>
                          </div>
                        </div>
                        <div className="col-xxl-12 pl-xxl-5 py-10">
                          <div className="border rounded p-10">
                            <div className="row justify-content-between align-items-center px-3">
                              <div className="col-md-4">
                                <div className="row">
                                  <p>Price:</p>{" "}
                                  <span
                                    className="pl-3"
                                    style={{ textDecoration: "line-through" }}
                                  >
                                    NGN9,800
                                  </span>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="row">
                                  <p>Selling Price:</p>{" "}
                                  <span className="pl-3">NGN7,680</span>
                                </div>
                              </div>
                            </div>
                            <div className="row justify-content-between align-items-center">
                              <label className="col-xl-3 col-lg-4 col-form-label">
                                Quantity
                              </label>
                              <span className="col-lg-9 col-xl-4">
                                <span
                                  onClick={() => removeCount()}
                                  className="btn btn-xs btn-light-success btn-icon mr-2 font-weight-bold text-dark"
                                >
                                  -
                                </span>
                                <span className="mr-2 font-weight-bolder">
                                  {qty}
                                </span>
                                <span
                                  onClick={() => addCount()}
                                  className="btn btn-xs btn-light-success btn-icon font-weight-bold text-dark"
                                >
                                  +
                                </span>
                              </span>
                              <div className="form-group row">
                                <div className="col-lg-9 col-xl-12 pt-7">
                                  <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="text"
                                    value={amount}
                                    name="amount"
                                    placeholder="Amount"
                                    disabled
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <div className="row">
                                <label className="col-xl-3 col-lg-3 col-form-label">
                                  Enter Code
                                </label>
                                <div className="col-lg-9 col-xl-9">
                                  <input
                                    className="form-control form-control-lg form-control-solid"
                                    type="text"
                                    placeholder="Coupon Code"
                                    value={code}
                                    name="code"
                                    onChange={(e) => setCode(e.target.value)}
                                  />
                                </div>
                              </div>
                              {loading ? (
                                <div className="row justify-content-end p-3">
                                  <button
                                    type="button"
                                    disabled
                                    className="btn btn-primary font-weight-boldest h5 spinner spinner-white spinner-right"
                                  >
                                    Loading...
                                  </button>
                                </div>
                              ) : (
                                <div className="row justify-content-end p-3">
                                  <button
                                    onClick={() => validateCouponCode()}
                                    className="btn btn-primary font-weight-boldest h5"
                                  >
                                    Apply Coupon
                                  </button>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="col-xxl-12 pl-xxl-5">
                          <div className="border rounded p-10">
                            <div className="row">
                              <div className="form-group mb-7">
                                <label className="font-size-h3 font-weight-bolder text-dark mb-7">
                                  Select Any Means of Payment
                                </label>

                                <div className="radio-list">
                                  {/* <label className="radio radio-lg mb-7">
                                    <input
                                      type="radio"
                                      name="price"
                                      data-toggle="modal"
                                      data-target="#exampleModal"
                                      onChange={() =>
                                        setModeOfPayment("Direct Bank Transfer")
                                      }
                                    />
                                    <span></span>
                                    <div className="font-size-lg text-dark-75 font-weight-bold">
                                      Direct Bank Transfer
                                    </div>
                                  </label> */}
                                  <label className="radio radio-lg mb-7">
                                    <input
                                      type="radio"
                                      name="price"
                                      onChange={() =>
                                        setModeOfPayment("Pay With Card")
                                      }
                                    />
                                    <span></span>
                                    <div className="font-size-lg text-dark-75 font-weight-bold">
                                      Pay With Card
                                    </div>
                                  </label>
                                  <label className="radio radio-lg mb-7">
                                    <input
                                      type="radio"
                                      name="price"
                                      onChange={() =>
                                        setModeOfPayment("Pick Up")
                                      }
                                    />
                                    <span></span>
                                    <div className="font-size-lg text-dark-75 font-weight-bold">
                                      Pick Up
                                    </div>
                                  </label>
                                </div>
                                {mode_of_payment === "Pay With Card" && (
                                  <PaystackButton
                                    className="btn btn bg-warning btn-block shadow font-weight-boldest h4 text-white"
                                    {...componentProps}
                                  />
                                )}
                                {mode_of_payment === "Pick Up" && (
                                  <div>
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
                                          <span className="font-weight-bolder">
                                            01-4538025
                                          </span>
                                        </h4>
                                      </div>
                                      <h5>Email: info@incitiobrand.com</h5>
                                    </div>
                                    {orderLoading ? (
                                      <div className="row justify-content-end p-3">
                                        <button
                                          type="button"
                                          disabled
                                          className="btn btn-primary font-weight-boldest w-xxl-100 h4 spinner spinner-white spinner-right"
                                        >
                                          Loading...
                                        </button>
                                      </div>
                                    ) : (
                                      <button
                                        onClick={() => submitRequest()}
                                        className="btn btn-primary font-weight-boldest h4 w-xxl-100"
                                      >
                                        Place Order
                                      </button>
                                    )}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Keyboard;
