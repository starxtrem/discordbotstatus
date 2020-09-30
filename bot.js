//////////////////////////////////////////////////
////////////////// By Star //////////////////
//////////////////////////////////////////////////

const Discord = require("discord.js");
const Client = new Discord.Client();
const express = require('express');
const Config = require("./config.json");
const http = require('http');
const ytdl = require('ytdl-core');
const fivereborn = require('fivereborn-query');

Client.login(Config.token);

function activity() {
  setTimeout(() => {
    fivereborn.query(Config.serverInfo[0], Config.serverInfo[1], (err, data) => {
      if (err) {
        console.log(err);
      } else {
        Client.user.setActivity(Config.nomServ + " " + data.clients + "/" + data.maxclients, { type: Config.activityType });
      }
    });
    activity();
  }, 10000);
}
activity();

Client.on("ready", () => {
		Client.user.setStatus("online")
});