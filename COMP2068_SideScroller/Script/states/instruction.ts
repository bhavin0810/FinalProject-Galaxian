/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/spaceshuttle.ts" />
/// <reference path="../objects/biginsect.ts" />
/// <reference path="../objects/smallinsect.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {

    // INSTRUCTIOIN STATE+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    export class Instruction {

        // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++++++++++++++++++++
        public game: createjs.Container;
        public space: objects.Space;
        public backButton: objects.Button;

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor() {

            // Instantiate Game Container
            this.game = new createjs.Container();

            // Add space to game
            this.space = new objects.Space();
            this.game.addChild(this.space);

            //Add game name to game
            var gameInstruction: objects.Label = new objects.Label("GALAXIAN GAME \n\nPlay with Mouse\n\nCollect Coins to Get to the Next Level\n\nSave yourself from Enemies", constants.SCREEN_CENTER_WIDTH +400, 100);
            gameInstruction.font = "22px Consolas";
            gameInstruction.regX = gameInstruction.getMeasuredWidth() * 0.5;
            gameInstruction.regY = gameInstruction.getMeasuredHeight() * 0.5;
            this.game.addChild(gameInstruction);

            //Add Play Button to Game
            this.backButton = new objects.Button("backButton", constants.SCREEN_CENTER_WIDTH +200, 400);
            this.game.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClicked, this);

            //Add game to stage
            stage.addChild(this.game);

        } // constructor end


        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++

        //Clicked Event of the Back Button
        backButtonClicked() {
            //Remove all child objects from the game
            this.game.removeAllChildren();
            stage.removeChild(this.game);
            //Set the Current State 
            currentState = constants.MENU_STATE;
            stateChanged = true;
        }  // end of the BAckButton Click

        // UPDATE METHOD
        public update() {

            this.space.update();

        } // update method end

    } //MENU STATE end
}    