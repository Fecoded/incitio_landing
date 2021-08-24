import Whirligig from "react-whirligig";
import img1 from "../../../assets/images/1.jpg";
import img2 from "../../../assets/images/2.jpg";
import img3 from "../../../assets/images/3.jpg";
import img4 from "../../../assets/images/app.png";
import img5 from "../../../assets/images/app2.png";
import logo from "../../../assets/images/logo.png";

const Events = () => {
  const details = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img3 },
    { id: 5, img: img3 },
    { id: 6, img: img3 },
    { id: 7, img: img1 },
    { id: 8, img: img1 },
  ];

  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();

  return (
    <section className="media-pt">
      <div className="mt-20 mb-20 text-center">
        <h1 className="left-header color-join">Our Top Events</h1>
        <div className="pt-10">
          <div className="col-md-12">
            <Whirligig
              visibleSlides={1}
              gutter="1em"
              ref={(_whirligigInstance) => {
                whirligig = _whirligigInstance;
              }}
              className="hideScroll"
              slideClass="whirgg-container"
            >
              {details.map((l) => (
                <div key={l.id} className="card border-0">
                  <img src={l.img} class="card-img-top" alt="img" />
                  <div className="card-body">
                    <h4 class="card-text">Roses & White Anniversary</h4>
                    <p class="sub-card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content. make up the bulk
                      of the card's content.
                    </p>
                  </div>
                </div>
              ))}
            </Whirligig>
            <div className="mt-5 text-right">
              <button
                className="btn bg-eventplux text-white"
                style={{ borderRadius: "50%", height: "50px", width: "50px" }}
                onClick={prev}
              >
                <i className="flaticon2-left-arrow text-white"></i>
              </button>
              <button
                className="btn bg-eventplux  align-items-center ml-3"
                style={{ borderRadius: "50%", height: "50px", width: "50px" }}
                onClick={next}
              >
                <i className="flaticon2-right-arrow text-white pl-1"></i>
              </button>
            </div>
            <div></div>
          </div>
        </div>

        <div className="mt-40">
          <div className="row justify-content-around align-items-center">
            <div>
              <img src={img4} alt="img" />
            </div>

            <div className="d-flex flex-column justify-content-center el-con">
              <div className="left-header">
                <span className="text-primary">Eventplux</span> Newsletter
              </div>
              <p className="text-500">
                Subscribe to be the first one to know about updates, new
                features and much more!
              </p>
              <form className="form d-flex text-center">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                />

                <div className="pl-3">
                  <button className="btn btn-lg btn-weight text-white bg-eventplux">
                    SEND
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-join fpb-10">
        <div className="container">
          <div className="col-lg-12">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 mt-30 ">
                <img src={logo} alt="logo" />
                <p className="text-500 pt-3">
                  <span className="text-primary">Eventplux</span> is designed to
                  assess the needs of our event organizers and to provide them
                  with preferred vendors that meet those needs. Eventplux is
                  designed to give event vendors and organizers the resources
                  and jobs they need to achieve their business goals while also
                  providing additional benefits.
                </p>
              </div>
              <div className="col-lg-5 mt-20">
                <img src={img5} alt="img" className="footer-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
