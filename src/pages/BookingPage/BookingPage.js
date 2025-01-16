import React, { useReducer } from "react";
import CallToAction from "../../Components/CallToAction/CallToAction";
import CustomersSay from "../../Components/CustomersSay/CustomersSay";
import Chicago from "../../Components/Chicago/Chicago";
import BookingForm from "../../Components/BookingForm/BookingForm";
import { fetchAPI, submitAPI } from "../../API";

export const reducer = (state, action) => {
  switch (action.type) {
    case "update_times":
      return updateTimes(action.selectedDate);
      default:
        return state;
  }
};

export const submitForm = (formData) => {
  submitAPI(formData)
}

export const updateTimes = (selectedDate) => {
  return fetchAPI(new Date(selectedDate));
}

export const initializeTimes = () => {
  return fetchAPI(new Date());
}

function Main() {
  const [availableTimes, dispatch] = useReducer(reducer, initializeTimes());

  return ( <>
      <CallToAction />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
      <CustomersSay />
      <Chicago />
      </>
      );
}


export default Main;
