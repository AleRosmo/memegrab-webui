import axios, { formToJSON } from "axios";

export default function GetProfile() {
  axios
    .get("http://localhost:8080/profile", {
      withCredentials: true,
    })
    .then((response) => {
      return response;
    })
    .catch((response) => {
        return
    });
}
