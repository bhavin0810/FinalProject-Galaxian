/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Play State for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Play State for the Side Scroller game.
*/
/// <reference path="../constants.ts" />
/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/space.ts" />
/// <reference path="../objects/spaceshuttle.ts" />
/// <reference path="../objects/smallinsect.ts" />
/// <reference path="../objects/biginsect.ts" />
/// <reference path="../objects/coin.ts" />
/// <reference path="../objects/button.ts" />
/// <reference path="../objects/label.ts" />
/// <reference path="../objects/scoreboard.ts" />
/// <reference path="../objects/bullet.ts" />
var states;
(function (states) {
    //PLAY STATE +++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    var Play = (function () {
        //CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++
        function Play() {
            this.smallInsect = [];
            this.bigInsect = [];
            // Instantiate Game Container
            this.game = new createjs.Container();
            // Add space to game
            this.space = new objects.Space();
            this.game.addChild(this.space);
            //Add game level to game
            var levelLabel = new objects.Label("LEVEL-1", constants.SCREEN_CENTER_WIDTH + 200, 10);
            levelLabel.font = "25px Papyrus";
            levelLabel.regX = levelLabel.getMeasuredWidth() * 0.5;
            levelLabel.regY = levelLabel.getMeasuredHeight() * 0.5;
            this.game.addChild(levelLabel);
            // Add space Shuttle to game
            this.spaceShuttle = new objects.SpaceShuttle(this.game, stage);
            this.game.addChild(this.spaceShuttle);
            constants.SMALLINSECTS_NUM = 3;
            for (var insect = constants.SMALLINSECTS_NUM; insect > 0; insect--) {
                this.smallInsect[insect] = new objects.SmallInsect();
                this.game.addChild(this.smallInsect[insect]);
            }
            /*
            for (var insect = constants.BIGINSECTS_NUM; insect > 0; insect--) {
                this.bigInsect[insect] = new objects.BigInsect();
                this.game.addChild(this.bigInsect[insect]);
            }
            */
            //Add Coin object to game
            this.coin = new objects.Coin();
            this.game.addChild(this.coin);
            constants.PLAYER_LIVES = 5;
            //Add Scoreboard
            this.scoreboard = new objects.ScoreBoard(this.game);
            stage.addChild(this.game);
        } //end of constructor
        //PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++
        // Calculate the distance between two points ++++++++++++++++++++++++++++++++++++++
        Play.prototype.distance = function (p1, p2) {
            return Math.floor(Math.sqrt(Math.pow((p2.x - p1.x), 2) + Math.pow((p2.y - p1.y), 2)));
        };
        //CHECK COLLISION  ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
        Play.prototype.checkCollision = function (collider) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p1.x = this.spaceShuttle.x;
            p1.y = this.spaceShuttle.y;
            p2.x = collider.x;
            p2.y = collider.y;
            //Check for the colliding
            if (this.distance(p2, p1) < ((this.spaceShuttle.height * 0.5) + (collider.height * 0.5))) {
                if (!collider.isColliding) {
                    createjs.Sound.play(collider.soundString);
                    collider.isColliding = true;
                    collider.x = 1000;
                    switch (collider.name) {
                        case "coin":
                            this.scoreboard.score += 100;
                            break;
                        case "smallInsects":
                            this.scoreboard.lives--;
                            break;
                    }
                }
            }
            else {
                collider.isColliding = false;
            }
        }; // check collision end
        //check for the Buller Collision
        Play.prototype.checkBulletCollision = function (collider) {
            var p1 = new createjs.Point();
            var p2 = new createjs.Point();
            p2.x = collider.x;
            p2.y = collider.y;
            for (var i = 1; i < this.spaceShuttle.bullet.length; i++) {
                p1.x = this.spaceShuttle.bullet[i].x;
                p1.y = this.spaceShuttle.bullet[i].y;
                //Check for the colliding
                if (this.distance(p2, p1) < ((this.spaceShuttle.bullet[i].height * 0.5) + (collider.height * 0.5))) {
                    if (!collider.isColliding) {
                        createjs.Sound.play(collider.soundString);
                        collider.isColliding = true;
                        //update the score board 
                        this.scoreboard.score += 100;
                        //Remove Object  from the game
                        collider.x = 1000;
                        this.spaceShuttle.bullet[i].x = 10000;
                        this.spaceShuttle.bullet[i].y = 10000;
                    }
                }
                else {
                    collider.isColliding = false;
                    if (this.spaceShuttle.bullet[i].x <= 0) {
                        this.spaceShuttle.bullet[i].x = 10000;
                        this.spaceShuttle.bullet[i].y = 10000;
                    }
                }
            }
        };
        // UPDATE METHOD
        Play.prototype.update = function () {
            //update the space object 
            this.space.update();
            //update space Shuttle object
            this.spaceShuttle.update();
            //check for the Player lives
            if (this.scoreboard.lives > 0) {
                for (var insect = constants.SMALLINSECTS_NUM; insect > 0; insect--) {
                    this.smallInsect[insect].update();
                    this.checkCollision(this.smallInsect[insect]);
                    this.checkBulletCollision(this.smallInsect[insect]);
                }
                // Change to Level 2 State if player hits 1000 points
                if (this.scoreboard.score >= 800) {
                    //Set the Current State 
                    constants.PLAYER_LIVES = this.scoreboard.lives;
                    currentState = constants.LEVEL2_STATE;
                    stateChanged = true;
                }
                //Update coin object
                this.coin.update();
                this.checkCollision(this.coin);
            }
            //update Score board
            this.scoreboard.update();
            //Check for the Player Lives
            if (this.scoreboard.lives < 1) {
                createjs.Sound.stop();
                this.game.removeAllChildren();
                //stage.removeChild(game);
                stage.removeAllChildren();
                finalScore = this.scoreboard.score;
                if (finalScore > highScore) {
                    highScore = finalScore;
                }
                //SEt the Current State
                currentState = constants.GAME_OVER_STATE;
                stateChanged = true;
            }
        }; //end of update method
        return Play;
    })();
    states.Play = Play; //end of PLAY STATE
})(states || (states = {}));
//# sourceMappingURL=play.js.map