function levelUp(x, y){
    this.x = x;
    this.y = y;
    this.height = 30;
    this.width = 30;
	this.sfx = new sound("assets/sounds/Effects/Others/powerup2.ogg");
    
    this.processInput = function (key) {
        if(key == KEY_RIGHT_ARROW){
            this.direction = "RIGHT";
        }else if(key == KEY_LEFT_ARROW){ 
            this.direction = "LEFT";
        }else{
            this.direction = "";
        }     
    },

    this.update = function () {
        if(!pause){
        if(move && move2){
            if (this.direction === "RIGHT") {
                gameObjects[player].direction = "RIGHT";
                this.x -= 3.2;
            }
            else if (this.direction === "LEFT") {
                this.x += 3.2;
                gameObjects[player].direction = "LEFT";
            }
        }
        if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.x, this.y, this.width, this.height)) {
			this.sfx.play();
			gameObjects[whip].lvl++;
            this.x = -1000;
        }
    }},

    this.render = function () {
        this.ctx = cont;
        this.ctx.drawImage(images.lvlup[0], this.x, this.y);
    }
}