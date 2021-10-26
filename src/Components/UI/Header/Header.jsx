import React from "react";

import Logo from "../../../Assets/Img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCommentAlt,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 z-50 w-full py-2 bg-white shadow-md h-14 ">
      <div className="flex justify-around h-full max-h-full mx-auto align-middle xl:justify-between max-w-workspace ">
        <img src={Logo} alt="Logo" />
        <div className="flex justify-between w-1/5 my-auto text-xl align-middle">
          <FontAwesomeIcon icon={faHome} className="cursor-pointer" />
          <FontAwesomeIcon icon={faCommentAlt} className="cursor-pointer" />
          <FontAwesomeIcon icon={faUser} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;