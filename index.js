var server = require("./server");
var router = require("./route");
var requestHandlers = require("./requestHandlers");

var debug = false;

var handle = {}
handle["/"] = requestHandlers.sendInterface;
handle["/interface"] = requestHandlers.sendInterface;
handle["/gyrorace"] = requestHandlers.gyrorace;
handle["/phaser.min.js"] = requestHandlers.phaser;
handle["/GyroRaceCrevaces.js"] = requestHandlers.GyroRaceCrevaces;
handle["/iosocket.js"] = requestHandlers.iosocket;
handle["/sprites/blob_01_walk_47_64_5.png"] = requestHandlers.blob_01_walk;
handle["/sprites/blob_02_walk_47_64_5_gauche.png"] = requestHandlers.blob_02_walk;
handle["/musique.mp3"] = requestHandlers.musique;



server.start(router.route,handle,debug);
