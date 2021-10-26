import React from "react";

import ProfilePic from "../../../Assets/Img/demo.jpg";

const ProfileCard = () => {
  return (
    <div className="flex justify-between w-3/5 h-12 mx-auto mb-2 ">
      <div className="flex items-center">
        <img
          src={ProfilePic}
          alt="user DP"
          className="w-8 h-8 mr-2 rounded-full"
        />
        <p className=" username">username</p>
      </div>
      <button className="grid my-auto text-sm text-blue-600 justify-self-end ">
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;