require("dotenv").config();
const tmi = require("tmi.js");
const { settings } = require("./utils/connectionConfig");
const { verifyMessge, onInit } = require("./bot");
const client = new tmi.client(settings);

client.connect();
client.on("message", onMessageHandler);
client.on("connected", onConnectedHandler);

async function onMessageHandler(target, context, msg, self) {
  if (self) return;
  verifyMessge(msg);
}

function onConnectedHandler(addr, port) {
  onInit(client);
  console.log(`* Connected to ${addr}:${port}`);
}
