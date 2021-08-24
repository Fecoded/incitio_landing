import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Multiselect from "multiselect-react-dropdown";

import { listVendors } from "../../../../redux/vendor/vendor.action";

const VendorServices = () => {
  const [values, setValues] = useState(null);

  const dispatch = useDispatch();
  const { vendors } = useSelector((state) => state.vendor);

  const onSelect = (selectedList, selectedItem) => {
    setValues(selectedList);
  };

  useEffect(() => {
    dispatch(listVendors());
  }, [dispatch]);

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
    <div className="">
      <div className="border-radius-10">
        <Multiselect
          displayValue="name"
          onRemove={function noRefCheck() {}}
          onSelect={onSelect}
          options={vendors}
          style={style}
        />
      </div>
      <div className="text-left">
        <button
          className="btn text-white bg-dashboard fs-16"
          style={{ minWidth: "256px" }}
        >
          Update Now
        </button>
      </div>
    </div>
  );
};

export default VendorServices;
