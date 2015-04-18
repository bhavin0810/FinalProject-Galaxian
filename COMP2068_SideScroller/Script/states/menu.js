/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: MENU State for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the MENU State for the Side Scroller game.
*/
/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/spaceshuttle.ts" />
/// <reference path="../objects/smallinsect.ts" />
/// <reference path="../objects/biginsect.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
var states;
(function (states) {
    // MENU STATE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Menu = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        function Menu() {
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add space to game
            this.space = new objects.Space();
            this.game.addChild(this.space);
            /*
            //Add game name to game
            var galaxian: objects.Label = new objects.Label("GALAXIAN", constants.SCREEN_CENTER_WIDTH, 100);
            galaxian.font = "80px Consolas";
            galaxian.regX = galaxian.getMeasuredWidth() * 0.5;
            galaxian.regY = galaxian.getMeasuredHeight() * 0.5;
            this.game.addChild(galaxian);
            */
            var galaxian = new createjs.Bitmap(assetLoader.getResult("galaxianLogo"));
            //Set the height and width of te GAME OBJECT           
            //console.log(this.width.toString());
            galaxian.regX = galaxian.getBounds().width * 0.5;
            galaxian.regY = galaxian.getBounds().height * 0.5;
            galaxian.x = constants.SCREEN_CENTER_WIDTH;
            galaxian.y = 100;
            this.game.addChild(galaxian);
            //Add Play Button to Game
            this.playButton = new objects.Button("playButton", constants.SCREEN_CENTER_WIDTH - 200, 400);
            this.game.addChild(this.playButton);
            this.playButton.on("click", this.playButtonClicked, this);
            //Add instruction Button to Game
            this.instructionButton = new objects.Button("instructionButton", constants.SCREEN_CENTER_WIDTH + 100, 400);
            this.game.addChild(this.instructionButton);
            this.instructionButton.on("click", this.instructionButtonClicked, this);
            //Add game to stage
            stage.addChild(this.game);
        } // constructor end
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        //Clicked Event of the Play Button
        Menu.prototype.playButtonClicked = function () {
            //Remove all child objects from the game
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            //Set the Current State 
            currentState = constants.PLAY_STATE;
            stateChanged = true;
        }; // end of the PlayButton Click
        Menu.prototype.instructionButtonClicked = function () {
            //Remove all child objects from the game
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            //Set the Current State 
            currentState = constants.INSRUCTION_STATE;
            stateChanged = true;
        }; // end of the PlayButton Click
        // UPDATE METHOD
        Menu.prototype.update = function () {
            this.space.update();
        }; // update method end
        return Menu;
    })();
    states.Menu = Menu; //MENU STATE end
})(states || (states = {}));
//# sourceMappingURL=menu.js.map