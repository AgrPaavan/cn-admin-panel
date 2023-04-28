import axios from "axios";

export const view = () => {
  return axios
    .get("http://localhost:3000/events/all")
    .then((res) => {
      return res.data.events;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};
