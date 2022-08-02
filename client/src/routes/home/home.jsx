import React from 'react';
import Cta from "../../components/cta/cta";
import Info from '../../components/info/info';

function Home() {
  return (
    <>
      <div>Home Page</div>
      <Info />
      <Cta heading="Mentorship Program" description="City of Refuge (COR) Mentorship program is a support resource that pairs mentors in the greater 
      Atlanta, Georgia area with students who are participating in the web development and cyber programs at City of Refuge." btnText="More Info" />
    </>
  );
}

export default Home
