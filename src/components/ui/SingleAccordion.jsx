import { useState } from "react";
import plusIcon from "../../assets/ImagesAndIcons/SVG/plusIcon.svg";
import minusIcon from "../../assets/ImagesAndIcons/SVG/minusIcon.svg";

function SingleAccordion(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="p-6">
        <div className="flex text-black font-medium text-lg">
          <button
            className={`${open ? "block" : "hidden"} me-6`}
            onClick={() => {
              setOpen(false);
            }}
          >
            <img src={minusIcon} alt="minus" />
          </button>

          <button
            className={`${open ? "hidden" : "block"} me-6`}
            onClick={() => {
              setOpen(true);
            }}
          >
            <img src={plusIcon} alt="plus" />
          </button>
          <h6
            className="cursor-pointer"
            onClick={() => {
              setOpen((prev) => !prev);
            }}
          >
            {props.heading}
          </h6>
        </div>
        <p className={`text-[#252525] mt-3 ${open ? "block" : "hidden"}`}>
          {props.content}
        </p>
      </div>
    </div>
  );
}

export default SingleAccordion;
