import { useState } from "react";
import { connect } from "react-redux";
import { login } from "../../redux/user/user.action";

import logo from "../../assets/images/logo.png";

const Header = ({ login }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("Male");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDOB] = useState("");
  const [menu, setMenu] = useState("");

  const formData = {
    email,
    password,
    type: 2,
  };

  const registerFormData = {
    firstName,
    lastName,
    email,
    password,
    gender,
    dob,
    type: 1,
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();

    login(registerFormData);
  };

  return (
    <>
      <div id="kt_header" className="header header-mobile-fixed">
        <div className="container d-flex justify-content-between align-items-center">
          <div
            className="header-menu-wrapper header-menu-wrapper-left"
            id="ht_header_menu_wrapper"
          >
            <div className="aside-left aside-fixed">
              <img className="logo" src={logo} alt="logo" />
            </div>
          </div>

          <div className="mx-auto sm-menu">
            <ul className="nav justify-content-center align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="lg-menu">
            <i
              className="flaticon-shapes icon-2x text-dark"
              onClick={() => setMenu("offcanvas-on")}
            ></i>
          </div>
        </div>
        <div
          id="kt_quick_cart"
          className={`offcanvas offcanvas-right p-10 ${menu}`}
        >
          <div className="d-flex justify-content-between align-items-center">
            <h4 className="font-weight-bold m-0">Menu</h4>
            <span
              className="btn btn-xs btn-light btn-hover-eventplux"
              id="kt_quick_cart_close"
              onClick={() => setMenu("")}
            >
              <i className="ki ki-close icon-xs text-muted"></i>
            </span>
          </div>

          <div className="offcanvas-content">
            <div className="offcanvas-wrapper mb-5 scroll-pull">
              <div className="d-flex align-items-center justify-content-between py-8 cursor-pointer">
                <div className="d-flex flex-column mr-2">
                  <span className="font-weight-bold text-dark-75 font-size-lg text-hover-eventplux">
                    Home
                  </span>
                </div>
              </div>

              <div className="separator separator-solid"></div>

              <div className="d-flex align-items-center justify-content-between py-8 cursor-pointer">
                <div className="d-flex flex-column mr-2">
                  <span className="font-weight-bold text-dark-75 font-size-lg text-hover-eventplux">
                    About
                  </span>
                </div>
              </div>

              <div className="separator separator-solid"></div>

              <div className="d-flex align-items-center justify-content-between py-8 cursor-pointer">
                <div className="d-flex flex-column mr-2">
                  <span className="font-weight-bold text-dark-75 font-size-lg text-hover-eventplux">
                    Support
                  </span>
                </div>
              </div>

              <div className="separator separator-solid"></div>

              <div className="d-flex align-items-center justify-content-between py-8 cursor-pointer">
                <div className="d-flex flex-column mr-2">
                  <span className="font-weight-bold text-dark-75 font-size-lg text-hover-eventplux">
                    Policy
                  </span>
                </div>
              </div>

              <div className="separator separator-solid"></div>

              <div className="d-flex align-items-center justify-content-between py-8 cursor-pointer">
                <div className="d-flex flex-column mr-2">
                  <span className="font-weight-bold text-dark-75 font-size-lg text-hover-eventplux">
                    Terms & Conditions
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="img-cover bgi-size-cover bgi-position-center">
        <div className="img-overlay"></div>
        <div className="container">
          <div className="row justify-content-between">
            <div className="pt-40 col-lg-6 mb-5">
              <h3 className="left-header text-white mb-0">
                Your <span className="text-primary">#1</span> Professional
                network for Event Vendors
              </h3>
              <h3 className="left-body text-white mt-7">
                Eventplux is a professional social network platform for event
                vendors, event organizers and event attendees. Eventplux is much
                more than just a social network, it’s a platform that brings
                together every personnel in the event industry, media industry,
                entertainment industry and other event related industries.
              </h3>
              <div className="mt-5">
                <button className="btn btn-lg w-50 btn-weight bg-white text-primary">
                  EXPLORE
                </button>
              </div>
            </div>

            <div className="pt-20 col-lg-4">
              <div className="card card-custom">
                <div className="card-header-top card-header-tabs-line">
                  <div className="card-toolbar">
                    <ul className="nav nav-tabs nav-bold nav-tabs-line">
                      <li className="nav-item w-50">
                        <a
                          className="pl-5 w-100 nav-link active"
                          data-toggle="tab"
                          href="#sign-up"
                        >
                          <span className="nav-text">Sign Up</span>
                        </a>
                      </li>
                      <li className="nav-item w-50">
                        <a
                          className="pl-5 nav-link"
                          data-toggle="tab"
                          href="#sign-in"
                        >
                          <span className="nav-text">Sign In</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="sign-up"
                      role="tabpanel"
                      aria-labelledby="sign-up"
                    >
                      <form className="form" onSubmit={onRegisterSubmit}>
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="form-control form-control-solid form-control-lg"
                            placeholder="Enter firstname"
                          />
                        </div>
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            name="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="form-control form-control-solid form-control-lg"
                            placeholder="Enter lastname"
                          />
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control form-control-solid form-control-lg"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="row">
                          <div className="form-group col">
                            <label>Date of Birth</label>
                            <input
                              type="date"
                              name="dob"
                              value={dob}
                              onChange={(e) => setDOB(e.target.value)}
                              className="form-control form-control-solid form-control-lg"
                            />
                          </div>
                          <div className="form-group col">
                            <label>Gender</label>
                            <select
                              name="gender"
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                              className="form-control form-control-solid"
                            >
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>
                          </div>
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-solid form-control-lg"
                            placeholder="***************"
                          />
                        </div>
                        <div className="mt-5">
                          <button className="btn btn-lg btn-block btn-weight text-white bg-eventplux">
                            SIGN UP
                          </button>
                        </div>
                      </form>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="sign-in"
                      role="tabpanel"
                      aria-labelledby="sign-in"
                    >
                      <form className="form" onSubmit={onLoginSubmit}>
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control form-control-solid form-control-lg"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control form-control-solid form-control-lg"
                            placeholder="***************"
                          />
                        </div>
                        <div className="mt-5">
                          <button className="btn btn-lg btn-block btn-weight text-white bg-eventplux">
                            SIGN IN
                          </button>
                        </div>
                      </form>
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

const mapDispatchToProps = (dispatch) => ({
  login: (formData) => dispatch(login(formData)),
});

export default connect(null, mapDispatchToProps)(Header);
