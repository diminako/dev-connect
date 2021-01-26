import axios from "axios";

export default {
  // Gets all books
  getMessages: function(type) {
    return axios.get("/api/message/" + type);
  }
}