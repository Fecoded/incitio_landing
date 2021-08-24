import { useSelector } from "react-redux";
import { Image } from "../../../../assets/images";

const AvailableJobs = () => {
  const { jobs } = useSelector((state) => state.event);

  return (
    <div className="d-flex flex-column">
      {jobs.length > 0 ? (
        <div
          className="hideScroll"
          style={{
            height: "80.5vh",
            overflowX: "hidden",
            scrollbarWidth: "none",
          }}
        >
          <div className="wallet-details">
            {jobs.map((job) => (
              <div key={job.id} className="bordered border-radius-20">
                <span className="d-flex justify-content-between align-items-center ml-20 mr-20 mt-6">
                  <span className="d-flex">
                    <img
                      src={job.picture}
                      alt="user"
                      className="user-img border-radius"
                    />
                    <span className="pl-3">
                      {job.service.map((service) => (
                        <h3
                          key={service}
                          className="sub-card-text font-size-16"
                        >
                          {service}
                        </h3>
                      ))}
                    </span>
                  </span>

                  <p
                    className="fs-12 w-50"
                    dangerouslySetInnerHTML={{ __html: job.content }}
                  ></p>

                  <p className="fs-12">{job.title}</p>
                </span>
                <span className="d-flex justify-content-end mr-20">
                  <img src={Image.Time} alt="time" className="time" />
                  <p className="text-primary pl-3 fs-12">{job.time}</p>
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{ width: "1000px", height: "400px" }}
        >
          <h3 className="sub-card-text font-size-16">No jobs to show</h3>
        </div>
      )}
    </div>
  );
};

export default AvailableJobs;
