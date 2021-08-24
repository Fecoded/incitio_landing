import RightImg from "../../../assets/images/right.png";
import LeftImg from "../../../assets/images/left.png";

const Join = () => {
  return (
    <section className="d-flex display-sm join bg-join justify-content-between align-items-center">
      <img src={RightImg} className="jmr-20" alt="img" />

      <div className="text-center">
        <h1 className="left-header mb-10 text-primary">
          <span className="color-join">Why Join</span> Eventplux?
        </h1>
        <p className="text-join color-join mt-7">
          You connect with every individual who has one thing or the other to do
          with event in the world. A global professional network for everyone in
          the event, media, entertainment and other related industries.
        </p>
      </div>

      <img src={LeftImg} alt="img" />
    </section>
  );
};

export default Join;
