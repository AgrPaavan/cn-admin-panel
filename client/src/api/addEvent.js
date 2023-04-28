import axios from "axios";

export const add = (newEvent) => {
  return axios
    .post("http://localhost:3000/events/add", newEvent)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.message;
    });
};
