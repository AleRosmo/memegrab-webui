import axios from "axios";

class Profile {
  constructor(id, username, email) {
    this.id = id;
    this.username = username;
    this.email = email;
  }
  update() {
    axios
      .get(`http://localhost:8080/profile${this.id}`, {
        withCredentials: true,
      })
      .then((response) => {
        const payload = JSON.parse(response.data);
        this.id = payload.id;
        this.username = payload.username;
        this.email = payload.id;
      })
      .catch((response) => {
        console.log("can't update profile");
        return;
      });
  }
}

export default function GetProfile() {
  axios
    .get("http://localhost:8080/profile", {
      withCredentials: true,
    })
    .then((response) => {
      const payload = response.data;
      const profile = new Profile(payload.id, payload.username, payload.email);
      return profile
    })
    .catch((response) => {
      return null
    });
}
