import axios from "axios";

export const add = (newUser) => {
  return axios
    .post("http://localhost:3000/users/add", newUser)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err.message;
    });
};
