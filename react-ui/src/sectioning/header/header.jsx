import React from "react";

const Header = ({ isMobileView }) => {
  return (
    <div>
      <p>This is the header - if you see this you see the hamburger menu {isMobileView && isMobileView.toString()} </p>
    </div>
  );
};

export default Header;
