import axios from "axios";

export const viewDomain = async (domain) => {
  return axios
    .get(`http://localhost:3000/users/indomain:${domain}`)
    .then((res) => {
      return res.data.userList;
    })
    .catch((err) => {
      console.error(err);
      return err;
    });
};
