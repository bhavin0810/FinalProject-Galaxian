/// <reference path="../constants.ts" />


module objects {
    export class Bullet extends objects.GameObject{
      
        //stage: createjs.Stage;
        //game: createjs.Container;
        

    //Constructo++++++++++++++
        constructor() {

            super("bullet");
        
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



    private _checkBounds() {
        if (this.x < 0) {
            this.bulletReset();        
        }
        }

    public bulletUpdate() {
        this.x -= this._dx;
        this._checkBounds();
    }

    // Function to reset bullet off screen, and destroy it
    bulletReset() {
        this.x = 0;
        //this.game.removeChild(this.image);
    }
}
}  
