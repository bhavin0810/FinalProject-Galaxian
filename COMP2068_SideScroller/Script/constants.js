/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Constants object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the constants object for the Side Scroller game.
*/
var constants;
(function (constants) {
    //FONTS CONSTANTS ++++++++++++++++++++++++++++++++++++++++++
    constants.FONT_SIZE = "40px";
    constants.FONT_FAMILY = "Consolas";
    constants.FONT_COLOUR = "#FFFF00";
    // SCREEN CONSTANTS ++++++++++++++++++++++++++++++++++
    constants.SCREEN_WIDTH = 640;
    constants.SCREEN_HEIGHT = 480;
    constants.SCREEN_CENTER_WIDTH = constants.SCREEN_WIDTH * 0.5;
    constants.SCREEN_CENTER_HEIGHT = constants.SCREEN_HEIGHT * 0.5;
    constants.SPACE_RESET_WIDTH = 480;
    // GAME OBJECTS CONSTANTS ++++++++++++++++++++++++++++++++++++
    constants.PLAYER_LIVES = 5;
    constants.SMALLINSECTS_NUM = 3;
    constants.BIGINSECTS_NUM = 1;
    constants.COIN_NUM = 2;
    constants.BULLET_SPEED = 4;
    constants.BULLET_NUM = 2;
    // STATE CONSTANTS +++++++++++++++++++++++++++++++++++++++
    constants.MENU_STATE = 0;
    constants.INSRUCTION_STATE = 1;
    constants.PLAY_STATE = 2;
    constants.LEVEL2_STATE = 3;
    constants.LEVEL3_STATE = 4;
    constants.GAME_OVER_STATE = 5;
})(constants || (constants = {}));
//# sourceMappingURL=constants.js.map