import { useState } from "react";

import VendorServices from "./vendor-services";
import PersonalInformation from "./personal-information";

const Settings = () => {
  const [show, setShow] = useState(true);

  return (
    <div className="d-flex flex-column">
      <div className="container">
        <div className="row">
          <div
            onClick={() => setShow(true)}
            className="col-md-3 cursor-pointer"
          >
            <div className="card card-custom bg-gray-100">
              <div
                className={`border-0 ${
                  show ? "bg-dashboard" : "bg-inactive"
                }  border-top`}
              >
                <h3
                  className={`left-body ${
                    show ? "text-white" : "text-dark"
                  }  text-center pt-4`}
                >
                  Vendor Services
                </h3>
                <div className="card-toolbar"></div>
              </div>
            </div>
          </div>

          <div
            onClick={() => setShow(false)}
            className="col-md-3 cursor-pointer"
          >
            <div className="card card-custom bg-gray-100">
              <div
                className={`border-0 ${
                  !show ? "bg-dashboard" : "bg-inactive"
                }  border-top`}
              >
                <h3
                  className={`left-body ${
                    !show ? "text-white" : "text-dark"
                  }  text-center pt-4`}
                >
                  Personal Information
                </h3>
                <div className="card-toolbar"></div>
              </div>
            </div>
          </div>
        </div>

        {show ? <VendorServices /> : <PersonalInformation />}
      </div>
    </div>
  );
};

export default Settings;
