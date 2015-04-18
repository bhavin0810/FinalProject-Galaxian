/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Constants object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the constants object for the Side Scroller game.
*/

module constants {

    //FONTS CONSTANTS ++++++++++++++++++++++++++++++++++++++++++
    export var FONT_SIZE: string = "25px";
    export var FONT_FAMILY: string = "Papyrus";
    export var FONT_COLOUR: string = "#FFFFFF";

    // SCREEN CONSTANTS ++++++++++++++++++++++++++++++++++
    export var SCREEN_WIDTH: number = 640;
    export var SCREEN_HEIGHT: number = 480;
    export var SCREEN_CENTER_WIDTH: number = SCREEN_WIDTH * 0.5;
    export var SCREEN_CENTER_HEIGHT: number = SCREEN_HEIGHT * 0.5;
    export var SPACE_RESET_WIDTH: number = 480;

    // GAME OBJECTS CONSTANTS ++++++++++++++++++++++++++++++++++++
    export var PLAYER_LIVES: number = 5;
    export var SMALLINSECTS_NUM: number = 3;
    export var BIGINSECTS_NUM: number = 1;
    export var COIN_NUM: number = 2;
    export var BULLET_SPEED = 4;
    export var BULLET_NUM = 2;

    // STATE CONSTANTS +++++++++++++++++++++++++++++++++++++++
    export var MENU_STATE: number = 0;
    export var INSRUCTION_STATE: number = 1;
    export var PLAY_STATE: number = 2;
    export var LEVEL2_STATE: number = 3
    export var LEVEL3_STATE: number = 4;
    export var GAME_OVER_STATE: number = 5;

}  