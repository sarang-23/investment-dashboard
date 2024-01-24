import React, { useState } from "react";
import { RiContactsFill } from "react-icons/ri";
import { RiArrowDropDownLine } from "react-icons/ri";

const ProfileInfo = () => {
  const [popoverState, setPopoverState] = useState(false);

  return (
    <div>
      <button
        className="profile-info-btn"
        onClick={() => setPopoverState((p) => !p)}
      >
        <RiContactsFill className="contact-icon" />
        <RiArrowDropDownLine />
      </button>
      {/* <select className="profile-info-btn" defaultValue="A">
        <option value="Option 1">Option 1</option>
        <option value="Option 2">Option 2</option>
        <option value="Option 3">Option 3</option>
      </select> */}
    </div>
  );
};

export default ProfileInfo;
