import React, { useReducer } from "react";
import CallToAction from "../../Components/CallToAction/CallToAction";
import CustomersSay from "../../Components/CustomersSay/CustomersSay";
import Chicago from "../../Components/Chicago/Chicago";
import BookingForm from "../../Components/BookingForm/BookingForm";
import { fetchAPI } from "../../API";

const reducer = (state, action) => {
  switch (action.type) {
    case "update_times":
      return updateTimes(action.selectedDate);
      default:
        return state;
  }
};

const updateTimes = (selectedDate) => {
  return fetchAPI(new Date(selectedDate));
}

const initializeTimes = () => {
  return fetchAPI(new Date());
}

function Main() {
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  return ( <>
      <CallToAction />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <CustomersSay />
      <Chicago />
      </>
      );
}


export default Main;
