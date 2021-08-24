import logo from "../../assets/images/logo2.png";
import fb from "../../assets/images/fb.png";
import tw from "../../assets/images/tw.png";
import msg from "../../assets/images/msg.png";

const Footer = () => {
  return (
    <section className="bg-eventplux pb-5">
      <div className="container">
        <div className="row justify-content-between pt-30">
          <div className="col-md-6">
            <img src={logo} alt="img" />
            <p className="text-white text-join pt-7">
              Eventplux{" "}
              <span className="font-weight-300">
                is a professional social network platform owned by
              </span>{" "}
              Eventnews Africa
            </p>
          </div>
          <div className="col-md-3">
            <p className="text-white text-join">Company</p>

            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-white" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#support">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#policy">
                  Policy
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#terms">
                  Terms & Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 pt-5-sm">
            <p className="text-white text-join">Connect with us via</p>

            <ul className="nav flex-column">
              <li className="nav-item">
                <a className="nav-link text-white" href="#twitter">
                  <div className="st-circle">
                    <img src={tw} className="img-fluid" alt="twitter-img" />
                  </div>
                  @twitterhandle
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#instagram">
                  <div className="st-circle">
                    <img src={fb} className="img-fluid" alt="instagram-img" />
                  </div>
                  @instagramhandle
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-white position-relative"
                  href="#phone"
                >
                  <div className="st-circle">
                    <img src={msg} className="img-fluid" alt="phone-img" />
                  </div>
                  +2349064342154
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-white text-center pt-10">
          Copyright Eventplux All Rights Reserved 2020
        </p>
      </div>
    </section>
  );
};

export default Footer;
