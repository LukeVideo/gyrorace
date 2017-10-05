// functions that will be executed when
// typeoff handle[pathname] === a function in requestHandlers.
// the handle and function are discribed in index.js

var fs = require('fs'),
server = require('./server');

function sendInterface(response) {
  console.log("Request handler 'interface' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  var html = fs.readFileSync(__dirname + "/pages/interface.html")
  response.end(html);
}

var fs = require('fs'),
server = require('./server');

function gyrorace(response) {
  console.log("Request handler 'gyrorace' was called.");
  response.writeHead(200, {"Content-Type": "text/html"});
  var html = fs.readFileSync(__dirname + "/phazer/gyrorace/GyroRace.html")
  response.end(html);
}

function phaser(response) {
  console.log("Request handler 'phaser' was called.");
  response.writeHead(200, {"Content-Type": "text/javascript"});
  var html = fs.readFileSync(__dirname + "/phazer/gyrorace/phaser.min.js")
  response.end(html);
}

function GyroRaceCrevaces(response) {
  console.log("Request handler 'phaser' was called.");
  response.writeHead(200, {"Content-Type": "text/javascript"});
  var html = fs.readFileSync(__dirname + "/phazer/gyrorace/GyroRaceCrevaces.js")
  response.end(html);
}

function iosocket(response) {
  console.log("Request handler 'iosocket' was called.");
  response.writeHead(200, {"Content-Type": "text/javascript"});
  var html = fs.readFileSync(__dirname + "/phazer/gyrorace/iosocket.js")
  response.end(html);
}

function blob_02_walk(response) {
  console.log("Request handler 'blob_02_walk' was called.");
  response.writeHead(200, {"Content-Type": "image/png"});
  var html = fs.readFileSync(__dirname + "/phazer/gyrorace/sprites/blob_02_walk_47_64_5_gauche.png")
  response.end(html);
}

function blob_01_walk(response) {
  console.log("Request handler 'blob_01_walk' was called.");
  response.writeHead(200, {"Content-Type": "image/png"});
  var html = fs.readFileSync(__dirname + "/phazer/gyrorace/sprites/blob_01_walk_47_64_5.png")
  response.end(html);
}

function musique(response) {
  console.log("Request handler 'musique' was called.");
  response.writeHead(200, {"Content-Type": "audio/mp3"});
  var html = fs.readFileSync(__dirname + "/phazer/gyrorace/musique.mp3")
  response.end(html);
}


exports.sendInterface = sendInterface;
exports.gyrorace = gyrorace;
exports.phaser = phaser;
exports.GyroRaceCrevaces = GyroRaceCrevaces;
exports.iosocket = iosocket;
exports.blob_02_walk = blob_02_walk;
exports.blob_01_walk = blob_01_walk;
exports.musique = musique;
