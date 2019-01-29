function hud() {
    this.lifePlayer = 16;
    this.hitPlayer = 0;
    this.points = "";
    this.processInput = function (key) {
    },

    this.update = function () {
        try{
        this.points = gameObjects[player].points;
        this.lifePlayer = gameObjects[player].life;
        this.hitPlayer = gameObjects[player].hits;
        this.lives = gameObjects[player].lives;
        this.hearts = gameObjects[player].hearts;
        }catch(exception){
            
        }
    },

    this.render = function () {
        this.ctx = cont;
        this.ctx.font = "30px Arial";
        this.x = 10;
        for(var x = 0; x < this.lifePlayer; x++){
            this.ctx.fillStyle = "#ff0022";
            this.ctx.fillText("|", this.x, 80);
            this.x += 10;
        }
        for(var x = 0; x < this.hitPlayer; x++){
            this.ctx.fillStyle = "#ffffff";
            this.ctx.fillText("|", this.x, 80);
            this.x += 10;
        }
        this.ctx.font = "20px Arial";
        this.ctx.fillStyle = "#ffffff";
        this.ctx.fillText("Lives: " + this.lives, this.x+8, 80);
        this.ctx.fillText(this.points, 10, 40);
        this.ctx.fillText("Hearts: "+this.hearts, this.x+8, 40);
		
    }
}