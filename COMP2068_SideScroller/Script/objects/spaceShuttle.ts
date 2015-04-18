/// <reference path="bullet.ts" />
/*
//Porject Name: Assignment2- Side Scroller Game - GALAXIAN
//Programmer: Bhavin Patel
//Description: Space Shuttle object for the Side Scroller game
//Date: Mar 21 2015
//version 1.0 Add the Space Shuttle for the Side Scroller game.
*/

module objects {

    //SPACE SHUTTLE OBJECT+++++++++++++++++++++++++++++++++++++++++
    export class SpaceShuttle extends objects.GameObject {
     
        bullet: objects.Bullet[] = [];
        stage: createjs.Stage;
        game: createjs.Container;
        bulletCount: number = 0;
       
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++
        constructor(game: createjs.Container, stage: createjs.Stage) {

            //call the constructor of the super class
            super("spaceShuttle");

            this.game = game;
            this.stage = stage;           
     
            this.x = constants.SCREEN_WIDTH - 30;
           
            createjs.Sound.play("galaxian", { loop: -1 });

            this.on("click", this.spaceShuttleClick, this);            
            
        }
       
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++++++++++++
        spaceShuttleClick() {
            
            //createjs.Sound.play("fire");
            this.bulletCount = this.bulletCount + 1;
             
            this.bullet[this.bulletCount] = new objects.Bullet();
            this.game.addChild(this.bullet[this.bulletCount]);
                           

                //Aproximately from the Player Position
               this.bullet[this.bulletCount].x = this.stage.mouseX + 5;
               this.bullet[this.bulletCount].y = this.stage.mouseY + 5;
                               
        }
                
        // PUBLIC METHODS ++++++++++++++++++++++++++++++++++++++++++
        public update() {
            this.y = stage.mouseY;

            //update the positions for the Bullets
            for (var i = 1; i < this.bullet.length; i++) {
                this.bullet[i].bulletUpdate();   
            }
        }
    }

}  