import { useState } from "react";
import { useDispatch } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { addEventValue } from "../../../../redux/event/event.action";

const Vendors = ({ vendors }) => {
  const [values, setValues] = useState(null);

  const dispatch = useDispatch();

  const onSubmitValue = () => {
    dispatch(addEventValue(values));
    window.$("#vendorsModal").modal("hide");
  };

  const onSelect = (selectedList, selectedItem) => {
    setValues(selectedList);
  };

  const style = {
    multiselectContainer: {
      height: "400px",
    },
    chips: {
      // color: "#fff",
      background: "#3f4257",
    },
  };

  return (
    <div
      className="modal fade"
      id="vendorsModal"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="staticBackdrop"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-lg"
        role="document"
      >
        <div className="modal-content">
          <div className="modal-header">
            <h5
              className="left-body modal-title mx-auto"
              id="exampleModalLabel"
            >
              Select vendors for this event
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
          <div className="modal-body pr-20 pl-20">
            <Multiselect
              displayValue="name"
              onRemove={function noRefCheck() {}}
              onSelect={onSelect}
              options={vendors}
              style={style}
            />
          </div>
          <div className="mx-auto my-7">
            <button
              type="button"
              className="btn btn-dashboard text-white text-font-700 fs-18 btn-weight-10"
              onClick={() => onSubmitValue()}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;
