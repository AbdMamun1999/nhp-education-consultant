import React from "react";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";

const SocialSite = () => {
  return (
    <ul className="flex gap-x-4 items-center">
      <li>
        <a href="#">
          <ImFacebook
            size={20}
            className="text-[#C2D7EF] hover:text-[#FF0000] duration-500 ease-in-out"
          />
        </a>
      </li>
      <li>
        <a href="#">
          <ImTwitter className="text-[#C2D7EF] hover:text-[#FF0000] duration-500 ease-in-out" />
        </a>
      </li>
      <li>
        <a href="#">
          <ImLinkedin2 className="text-[#C2D7EF] hover:text-[#FF0000] duration-500 ease-in-out" />
        </a>
      </li>
      <li>
        <a href="#">
          <TfiYoutube className="text-[#C2D7EF] hover:text-[#FF0000] duration-500 ease-in-out" />
        </a>
      </li>
    </ul>
  );
};

export default SocialSite;
