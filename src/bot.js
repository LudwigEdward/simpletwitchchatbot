require("dotenv").config();
let clientDefined;

function onInit(client) {
  clientDefined = client;
  stayHidrated();
}

function verifyMessge(msg) {
  if (msg.trim().toLowerCase() === "hi") {
    clientDefined.say(process.env.CHANNEL, "Hi there :)");
  }
}

function stayHidrated() {
  clientDefined.say(process.env.CHANNEL, "Hey, drink some water :D");
  Timer();
}

async function Timer() {
  await setTimeout(stayHidrated, 1201100);
}

module.exports = { verifyMessge, onInit };
