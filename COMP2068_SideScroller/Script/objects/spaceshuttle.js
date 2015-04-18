/// <reference path="bullet.ts" />
/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Space Shuttle object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Space Shuttle for the Side Scroller game.
*/
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    //SPACE SHUTTLE OBJECT+++++++++++++++++++++++++++++++++++++++++
    var SpaceShuttle = (function (_super) {
        __extends(SpaceShuttle, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        function SpaceShuttle(game, stage) {
            //call the constructor of the super class
            _super.call(this, "spaceShuttle");
            this.bullet = [];
            this.bulletCount = 0;
            this.game = game;
            this.stage = stage;
            this.x = constants.SCREEN_WIDTH - 30;
            createjs.Sound.play("galaxian", { loop: -1 });
            this.on("click", this.spaceShuttleClick, this);
        }
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        SpaceShuttle.prototype.spaceShuttleClick = function () {
            //createjs.Sound.play("fire");
            this.bulletCount = this.bulletCount + 1;
            this.bullet[this.bulletCount] = new objects.Bullet();
            this.game.addChild(this.bullet[this.bulletCount]);
            //Aproximately from the Player Position
            this.bullet[this.bulletCount].x = this.stage.mouseX + 5;
            this.bullet[this.bulletCount].y = this.stage.mouseY + 5;
        };
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        SpaceShuttle.prototype.update = function () {
            this.y = stage.mouseY;
            for (var i = 1; i < this.bullet.length; i++) {
                this.bullet[i].bulletUpdate();
            }
        };
        return SpaceShuttle;
    })(objects.GameObject);
    objects.SpaceShuttle = SpaceShuttle;
})(objects || (objects = {}));
//# sourceMappingURL=spaceshuttle.js.map