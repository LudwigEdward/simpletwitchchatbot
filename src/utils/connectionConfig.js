require("dotenv").config();
const settings = {
  options: {
    clientId: process.env.CLIENTID,
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: "tiquenderson",
    password: process.env.SECRET
  },
  channels: [process.env.CHANNEL]
};
module.exports = { settings };
