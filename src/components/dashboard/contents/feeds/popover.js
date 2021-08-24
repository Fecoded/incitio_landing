import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToggleShow } from "../../../../redux/common/commonAction";

const PopOver = () => {
  const [num, setNum] = useState(0);
  const [back, setBack] = useState(false);

  const [body] = useState([
    "Create your own events and update your status and also check for available jobs with other vendor suggestions",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus luctus diam, nisl, commodo magna blandit pellentesque. Amet rhoncus now.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus luctus diam, nisl, commodo magna blandit pellentesque. Amet rhoncus now.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus luctus diam, nisl, commodo magna blandit pellentesque. Amet rhoncus now.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus luctus diam, nisl, commodo magna blandit pellentesque. Amet rhoncus now.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus luctus diam, nisl, commodo magna blandit pellentesque. Amet rhoncus now.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus luctus diam, nisl, commodo magna blandit pellentesque. Amet rhoncus now.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus luctus diam, nisl, commodo magna blandit pellentesque. Amet rhoncus now.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus luctus diam, nisl, commodo magna blandit pellentesque. Amet rhoncus now.",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rhoncus luctus diam, nisl, commodo magna blandit pellentesque. Amet rhoncus now.",
  ]);
  const [title] = useState([
    "Feeds",
    "Account",
    "Settings",
    "Messages",
    "Wallet",
    "Calendar",
    "Groups",
    "Tickets",
    "People you may know",
    "My Events",
  ]);
  const [axisY] = useState([
    "85px",
    "145px",
    "205px",
    "265px",
    "325px",
    "385px",
    "445px",
    "505px",
    "565px",
    "625px",
  ]);

  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.common);

  return (
    <div
      className={`popover fade bs-popover-right ${show}`}
      role="tooltip"
      id="pop-1"
      x-placement="right"
      style={{
        position: "absolute",
        transform: `translate3d(270px, ${axisY[num]}, 0px)`,
        top: "0px",
        left: "0px",
        willChange: "transform",
        backgroundColor: "#3f4257",
        cursor: "pointer",
      }}
    >
      <div className="arrow" style={{ top: "39px" }}></div>
      <h3 className="popover-header fs-14">{title[num]}</h3>
      <div className="popover-body fs-14" style={{ color: "#fff" }}>
        {body[num]}
      </div>
      <div className="d-flex justify-content-end align-items-end m-4">
        {back && num !== 0 && (
          <button
            onClick={() => {
              setNum(num - 1);
            }}
            className="btn btn-md w-30 btn-white text-primary"
          >
            Back
          </button>
        )}
        {num !== 9 ? (
          <button
            onClick={() => {
              setBack(true);
              setNum(num + 1);
            }}
            className="btn btn-md ml-5  w-25 btn-eventplux text-white"
          >
            Next
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(ToggleShow(""));
              setNum(0);
            }}
            className="btn btn-md ml-5 w-30 btn-eventplux text-white"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default PopOver;
