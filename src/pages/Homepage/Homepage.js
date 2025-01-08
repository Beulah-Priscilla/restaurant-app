import React from "react";
import CallToAction from "../../Components/CallToAction/CallToAction";
import Special from "../../Components/Specials/Special";
import CustomersSay from "../../Components/CustomersSay/CustomersSay";
import Chicago from "../../Components/Chicago/Chicago";
// import ReserveTable from "../../Components/ReserveTable/ReserveTable";


function Homepage() {
  return ( <>
      <CallToAction />
      <Special />
      <CustomersSay />
      <Chicago />
      </>
    );
}


export default Homepage;
