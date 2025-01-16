import { reducer, submitForm, updateTimes, initializeTimes } from "./BookingPage";
import { fetchAPI, submitAPI } from "../../API";

jest.mock("../../API");

describe("BookingPage functions", () => {
  describe("reducer", () => {
    it("should update times when action type is 'update_times'", () => {
      const selectedDate = "2023-10-10";
      const action = { type: "update_times", selectedDate };
      const state = [];
      fetchAPI.mockReturnValue(["12:00", "13:00"]);

      const newState = reducer(state, action);

      expect(newState).toEqual(["12:00", "13:00"]);
      expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
    });

    it("should return the current state for unknown action types", () => {
      const action = { type: "unknown_action" };
      const state = ["12:00", "13:00"];

      const newState = reducer(state, action);

      expect(newState).toBe(state);
    });
  });

  describe("submitForm", () => {
    it("should call submitAPI with formData", () => {
      const formData = { name: "John Doe", date: "2023-10-10" };
      submitAPI.mockReturnValue(true);

      submitForm(formData);

      expect(submitAPI).toHaveBeenCalledWith(formData);
    });
  });

  describe("updateTimes", () => {
    it("should call fetchAPI with the selected date", () => {
      const selectedDate = "2023-10-10";
      fetchAPI.mockReturnValue(["12:00", "13:00"]);

      const times = updateTimes(selectedDate);

      expect(times).toEqual(["12:00", "13:00"]);
      expect(fetchAPI).toHaveBeenCalledWith(new Date(selectedDate));
    });
  });

  describe("initializeTimes", () => {
    it("should call fetchAPI with the current date", () => {
      const currentDate = new Date();
      fetchAPI.mockReturnValue(["12:00", "13:00"]);

      const times = initializeTimes();

      expect(times).toEqual(["12:00", "13:00"]);
      expect(fetchAPI).toHaveBeenCalledWith(currentDate);
    });
  });
});