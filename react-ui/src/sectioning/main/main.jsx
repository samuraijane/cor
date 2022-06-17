import React from "react";
import Banner from "../../components/callToAction";

const Main = () => {
  return (
    <div className="main">
      <h1>
        Lorem ipsum dolor.
      </h1>
      <Banner heading="Mentorship Program" description="City of Refuge (COR) Mentorship program is a support resource that pairs mentors in the greater 
      Atlanta, Georgia area with students who are participating in the web development and cyber programs at City of Refuge." btnText="More Info"/>
    </div>
  );
};

export default Main;
