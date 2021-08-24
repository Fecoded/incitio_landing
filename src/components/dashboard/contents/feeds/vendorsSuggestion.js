import { useSelector } from "react-redux";

const VendorSuggestion = () => {
  const { vendorsuggestions } = useSelector((state) => state.vendor);

  return (
    <div className="d-flex flex-column w-100">
      <div>
        <div
          className="d-flex bordered border-radius-20"
          style={{
            height: "80.5vh",
          }}
        >
          {!vendorsuggestions.length > 0 ? (
            <div
              className="card card-custom shadow p-3 mb-5 bg-white rounded p-10 m-20"
              style={{ width: "922px", height: "200px" }}
            >
              <div className="border-0 d-flex justify-content-center mt-12">
                <h3 className="fs-24 font-family font-weight-500">
                  Nothing to see here yet
                </h3>
              </div>
            </div>
          ) : (
            <div
              className="pt-10 pr-10 pl-10 pb-20  hideScroll"
              style={{
                height: "80.5vh",
                overflowX: "hidden",
                // width: "100rem",
                scrollbarWidth: "none",
              }}
            >
              <div className="row custom-col-11" style={{ height: "30rem" }}>
                {vendorsuggestions.map((vendor) => (
                  <div key={vendor.id} className="card border-0 col-sm-4">
                    <img
                      src={vendor.picture}
                      alt="img"
                      style={{ width: "300px" }}
                    />
                    <div className="card-body shadow mb-10">
                      <h4 className="card-text">{vendor.firstName}</h4>
                      <p className="fs-14">{vendor.service}</p>
                      <button className="btn btn-block btn-weight btn-eventplux fs-14 text-white">
                        Connect
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorSuggestion;
