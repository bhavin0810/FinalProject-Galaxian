/// <reference path="../constants.ts" />
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    var Bullet = (function (_super) {
        __extends(Bullet, _super);
        //stage: createjs.Stage;
        //game: createjs.Container;
        //Constructo++++++++++++++
        function Bullet() {
            _super.call(this, "bullet");
            this.name = "bullet";
            // set the small insect to start at a random y value
            this.y = Math.floor(Math.random() * constants.SCREEN_HEIGHT);
            this.x = 0;
            // add drift to the cloud 
            this._dx = 5;
        }
        /*
    // Function to fire bullet. Sets where bullet will begin, and adds it to stage
    fireBullet() {
        //Aproximately from the Player Position
        this.image.x = stage.mouseX - 5;
        this.image.y = stage.mouseY - 5;
        this.game.addChild(this.image);
    }
        */
        Bullet.prototype._checkBounds = function () {
            if (this.x < 0) {
                this.bulletReset();
            }
        };
        Bullet.prototype.bulletUpdate = function () {
            this.x -= this._dx;
            this._checkBounds();
        };
        // Function to reset bullet off screen, and destroy it
        Bullet.prototype.bulletReset = function () {
            this.x = 0;
            //this.game.removeChild(this.image);
        };
        return Bullet;
    })(objects.GameObject);
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=bullet.js.map