/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: GMAE SCRIPT for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the game scripts for the Side Scroller game.
*/
/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />
/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="constants.ts" />
/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/space.ts" />
/// <reference path="objects/spaceshuttle.ts" />
/// <reference path="objects/bullet.ts" />
/// <reference path="objects/smallinsect.ts" />
/// <reference path="objects/biginsect.ts" />
/// <reference path="objects/coin.ts" />
/// <reference path="objects/label.ts" />
/// <reference path="objects/button.ts" />
/// <reference path="objects/scoreboard.ts" />
/// <reference path="states/gameover.ts" />
/// <reference path="states/play.ts" />
/// <reference path="states/menu.ts" />
/// <reference path="states/level2.ts" />
/// <reference path="states/level3.ts" />
/// <reference path="states/instruction.ts" />
// Game Variables +++++++++++++++++++++++++++++++++++++++++++++
var stats = new Stats();
var canvas;
var stage;
var assetLoader;
// Score Variables
var finalScore = 0;
var highScore = 0;
// State Variables
var currentState;
var currentStateFunction;
var stateChanged = false;
// Game State Objects
var gameOver;
var play;
var menu;
var level2;
var level3;
var instruction;
// asset manifest - array of asset objects
var manifest = [
    { id: "spaceShuttle", src: "assets/images/spaceShuttle.jpg" },
    { id: "space", src: "assets/images/space.png" },
    { id: "smallInsects", src: "assets/images/smallInsects.png" },
    { id: "bigInsects", src: "assets/images/bigInsects.png" },
    { id: "coin", src: "assets/images/coin.gif" },
    { id: "tryAgainButton", src: "assets/images/tryAgainButton.png" },
    { id: "playButton", src: "assets/images/playButton.png" },
    { id: "backButton", src: "assets/images/backButton.png" },
    { id: "instructionButton", src: "assets/images/instructionsButton.png" },
    { id: "bullet", src: "assets/images/bullet.png" },
    { id: "galaxianLogo", src: "assets/images/galaxian_logo.jpg" },
    { id: "galaxian", src: "assets/audio/galaxian.mp3" },
    { id: "coinCollect", src: "assets/audio/coinCollect.wav" },
    { id: "thunder", src: "assets/audio/thunder.ogg" }
];
function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
}
function init() {
    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);
    stage.enableMouseOver(20); // Enable mouse events
    createjs.Ticker.setFPS(60); // 60 frames per second
    createjs.Ticker.addEventListener("tick", gameLoop);
    setupStats();
    currentState = constants.MENU_STATE;
    changeState(currentState);
} //end of init
// UTILITY METHODS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
function setupStats() {
    stats.setMode(0);
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '440px';
    document.body.appendChild(stats.domElement);
}
//GAME LOOP +++++++++++++++++++++++++++++
function gameLoop() {
    stats.begin(); // Begin metering
    //update the current state
    currentStateFunction.update();
    //check for the state changed
    if (stateChanged) {
        changeState(currentState);
    }
    stage.update(); // Refreshes our stage
    stats.end(); // End metering
} //end of game loop
// Our Game Kicks off in here  -- Change State Function
function changeState(state) {
    stateChanged = false;
    switch (state) {
        case constants.MENU_STATE:
            // Instantiate Menu State
            menu = new states.Menu();
            currentStateFunction = menu;
            break;
        case constants.INSRUCTION_STATE:
            // Instantiate Menu State
            instruction = new states.Instruction();
            currentStateFunction = instruction;
            break;
        case constants.PLAY_STATE:
            // Instantiate Play State
            play = new states.Play();
            currentStateFunction = play;
            break;
        case constants.LEVEL2_STATE:
            // Instantiate Play State
            level2 = new states.Level2();
            currentStateFunction = level2;
            break;
        case constants.LEVEL3_STATE:
            // Instantiate Play State
            level3 = new states.Level3();
            currentStateFunction = level3;
            break;
        case constants.GAME_OVER_STATE:
            // Instantiate Game Over State
            gameOver = new states.GameOver();
            currentStateFunction = gameOver;
            break;
    }
} //end of changeState
//# sourceMappingURL=game.js.map