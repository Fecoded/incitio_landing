import { useSelector } from "react-redux";
import { NavLink, useLocation, Redirect } from "react-router-dom";
import { useState } from "react";

import { Image } from "../../assets/images";

const Sidebar = ({ children }) => {
  const [show, setShow] = useState(true);

  const { user } = useSelector((state) => state.user);

  const location = useLocation();

  return (
    <div
      style={{ background: "rgb(255, 255, 255)" }}
      className="header-fixed header-mobile-fixed subheader-enabled subheader-fixed aside-enabled aside-minimize-hoverable page-loading"
    >
      <div className="header-mobile align-items-center header-mobile-fixed">
        <span>
          <img alt="Logo" src={Image.Logo} style={{ width: "40px" }} />
        </span>
      </div>
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-row flex-column-fluid page">
          <div
            className={`${
              show ? "aside" : "aside-90"
            } aside-left d-flex flex-column flex-row-auto`}
            id="kt_aside"
          >
            <div className="brand flex-column-auto pt-5 align-items-center">
              <span className="brand-logo">
                <img
                  alt="Logo"
                  src={Image.Logo}
                  style={{ width: "40px", zIndex: 2 }}
                />
              </span>
              {show ? (
                <div className="ml-13 cursor-pointer" style={{ zIndex: 5 }}>
                  <img
                    src={Image.LeftDrawer}
                    alt="img"
                    onClick={() => setShow(false)}
                  />
                </div>
              ) : (
                <div className="cursor-pointer" style={{ zIndex: 5 }}>
                  <img
                    src={Image.RightDrawer}
                    alt="img"
                    style={{ marginRight: "50px" }}
                    onClick={() => setShow(true)}
                  />
                </div>
              )}
            </div>

            <div
              className="aside-menu-wrapper flex-column-fluid"
              id="kt_aside_menu_wrapper"
              style={{ zIndex: "8" }}
            >
              <div
                id="kt_aside_menu"
                className="aside-menu pt-10 h-842"
                data-menu-vertical="1"
                data-menu-scroll="1"
                data-menu-dropdown-timeout="500"
                style={{ zIndex: "899" }}
              >
                <ul className="menu-nav">
                  <li className="menu-item menu-item-active mb-4">
                    {location.pathname === "/dashboard" ? (
                      <NavLink
                        to="/dashboard"
                        exact
                        activeClassName="text-eventplux"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Feeds} alt="feeds" />
                        </span>
                        {show && <span className="menu-text pl-3">Feeds</span>}
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/dashboard"
                        exact
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Feeds1} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3 text-white">
                            Feeds
                          </span>
                        )}
                      </NavLink>
                    )}
                  </li>
                  <li className="menu-item menu-item-active mb-4">
                    {location.pathname === "/account" ? (
                      <NavLink
                        to="/account"
                        exact
                        activeClassName="text-eventplux"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <i class="far fa-user-circle fa-2x text-eventplux"></i>
                        </span>
                        {show && (
                          <span className="menu-text pl-3">Account</span>
                        )}
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/account"
                        exact
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <i class="far fa-user-circle fa-2x text-white"></i>
                        </span>
                        {show && (
                          <span className="menu-text pl-3 text-white">
                            Account
                          </span>
                        )}
                      </NavLink>
                    )}
                  </li>

                  <li className="menu-item menu-item-active mb-5">
                    {location.pathname === "/settings" ? (
                      <NavLink
                        to="/settings"
                        exact
                        activeClassName="text-eventplux"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Cog1} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3">Settings</span>
                        )}
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/settings"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Cog} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3 text-white">
                            Settings
                          </span>
                        )}
                      </NavLink>
                    )}
                  </li>

                  <li className="menu-item menu-item-active mb-5">
                    {location.pathname === "/wallet" ? (
                      <NavLink
                        to="/wallet"
                        exact
                        activeClassName="text-eventplux"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Wallet1} alt="feeds" />
                        </span>
                        {show && <span className="menu-text pl-3">Wallet</span>}
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/wallet"
                        exact
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Wallet} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3 text-white">
                            Wallet
                          </span>
                        )}
                      </NavLink>
                    )}
                  </li>
                  <li className="menu-item menu-item-active mb-5">
                    {location.pathname === "/calendar" ? (
                      <NavLink
                        to="/calendar"
                        exact
                        activeClassName="text-eventplux"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Calendar1} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3">Calendar</span>
                        )}
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/calendar"
                        exact
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Calendar} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3 text-white">
                            Calendar
                          </span>
                        )}
                      </NavLink>
                    )}
                  </li>
                  <li className="menu-item menu-item-active mb-5">
                    {location.pathname === "/groups" ? (
                      <NavLink
                        to="/groups"
                        exact
                        activeClassName="text-eventplux"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.UserGroup} alt="feeds" />
                        </span>
                        {show && <span className="menu-text pl-3">Groups</span>}
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/groups"
                        exact
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.UserGroup} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3 text-white">
                            Groups
                          </span>
                        )}
                      </NavLink>
                    )}
                  </li>
                  <li className="menu-item menu-item-active mb-5">
                    {location.pathname === "/tickets" ? (
                      <NavLink
                        to="/tickets"
                        exact
                        activeClassName="text-eventplux"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Ticket1} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3">Tickets</span>
                        )}
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/tickets"
                        exact
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Ticket} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3 text-white">
                            Tickets
                          </span>
                        )}
                      </NavLink>
                    )}
                  </li>
                  <li className="menu-item menu-item-active mb-5">
                    {location.pathname === "/peopleyoumayknow" ? (
                      <NavLink
                        to="/peopleyoumayknow"
                        exact
                        activeClassName="text-eventplux"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Location1} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3">
                            People you may know
                          </span>
                        )}
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/peopleyoumayknow"
                        exact
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Location} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3 text-white">
                            People you may know
                          </span>
                        )}
                      </NavLink>
                    )}
                  </li>
                  <li className="menu-item menu-item-active mb-5">
                    {location.pathname === "/events" ? (
                      <NavLink
                        to="/events"
                        exact
                        activeClassName="text-eventplux"
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Event1} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3">My Events</span>
                        )}
                      </NavLink>
                    ) : (
                      <NavLink
                        to="/events"
                        exact
                        style={{
                          display: "flex",
                          padding: "10px 25px",
                          alignItems: "center",
                        }}
                      >
                        <span className="svg-icon menu-icon">
                          <img src={Image.Event} alt="feeds" />
                        </span>
                        {show && (
                          <span className="menu-text pl-3 text-white">
                            My Events
                          </span>
                        )}
                      </NavLink>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Topbar */}
          <div
            className="d-flex flex-column flex-row-fluid wrapper"
            id="kt_wrapper"
          >
            <div id="kt_header" className="header header-fixed">
              <div className="input-icon input-icon-right mx-auto align-self-center">
                <input
                  type="text"
                  className="form-control"
                  style={{ width: "400px" }}
                  placeholder="Search"
                />
                <span>
                  <i className="flaticon2-search-1 icon-md"></i>
                </span>
              </div>

              <div className="topbar-item align-self-center mr-20">
                <div
                  className="btn-icon btn-icon-mobile w-auto btn-clean d-flex align-items-center btn-lg px-2"
                  id="kt_quick_user_toggle"
                >
                  <span className="text-dark-50 user-text font-size-base d-none d-md-inline mr-3">
                    {user && user.name}
                  </span>
                  <span>
                    <img
                      src={user && user.picture}
                      alt="userimg"
                      className="user-img border-radius"
                    />
                  </span>
                  <div className="pl-5 cursor-pointer">
                    <img src={Image.Shape} alt="shapeImg" />
                  </div>
                  <div className="dropdown">
                    <span
                      data-toggle="dropdown"
                      data-offset="10px,0px"
                      aria-expanded="true"
                      className="pl-10 cursor-pointer topbar-item"
                    >
                      <img src={Image.Bell} alt="bellImg" />
                    </span>

                    <div
                      class="dropdown-menu p-0 m-0 dropdown-menu-right dropdown-menu-anim-up dropdown-menu-lg"
                      x-placement="bottom-end"
                      style={{
                        position: "absolute",
                        transform: "translate3d(-280px, 47px, 0px)",
                        top: "17px",
                        left: "0px",
                        willChange: "transform",
                      }}
                    >
                      <div class="tab-content">
                        <div class="tab-pane show p-8 active">
                          <div
                            class="  pr-7 mr-n7 ps "
                            data-scroll="true"
                            data-height="300"
                            data-mobile-height="200"
                          >
                            <div className="d-flex justify-content-between align-items-center">
                              <p className="fs-12">Notifications</p>
                              <p className="fs-12">Mark all as read</p>
                            </div>
                            <div
                              className="d-flex flex-column hideScroll"
                              style={{
                                height: "35.5vh",
                                overflowX: "hidden",
                                scrollbarWidth: "none",
                              }}
                            >
                              <div
                                className="p-5 mb-3 d-flex align-items-center border-radius-10"
                                style={{ backgroundColor: "#f6f6f6" }}
                              >
                                <span>
                                  <img
                                    src={Image.Notification}
                                    alt="notification"
                                  />
                                </span>
                                <div className="flex-column pl-3">
                                  <h3 className="fs-14 font-weight-500">
                                    Mutiu Demmah{" "}
                                    <small className="fs-12">
                                      sent you a friend request
                                    </small>
                                  </h3>
                                  <small>4 hours ago</small>
                                </div>
                              </div>
                              <div
                                className="p-5 mb-3 d-flex align-items-center border-radius-10"
                                style={{ backgroundColor: "#f6f6f6" }}
                              >
                                <span>
                                  <img
                                    src={Image.Notification}
                                    alt="notification"
                                  />
                                </span>
                                <div className="flex-column pl-3">
                                  <h3 className="fs-14 font-weight-500">
                                    Mutiu Demmah{" "}
                                    <small className="fs-12">
                                      sent you a friend request
                                    </small>
                                  </h3>
                                  <small>4 hours ago</small>
                                </div>
                              </div>

                              <div
                                className="p-5 mb-3 d-flex align-items-center border-radius-10"
                                style={{ backgroundColor: "#f6f6f6" }}
                              >
                                <span>
                                  <img
                                    src={Image.Notification}
                                    alt="notification"
                                  />
                                </span>
                                <div className="flex-column pl-3">
                                  <h3 className="fs-14 font-weight-500">
                                    Seyi Kuti{" "}
                                    <small className="fs-12">
                                      sent you a message
                                    </small>
                                  </h3>
                                  <p>4 hours ago</p>
                                  <button className="btn btn-md bg-dashboard text-white">
                                    Reply Chat
                                  </button>
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
            {children}
          </div>
          {/* End Topbar */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
