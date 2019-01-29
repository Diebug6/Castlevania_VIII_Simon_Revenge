function firelamp(x,y,o) {
    this.x = x;
    this.y = y;
    this.height = 70;
    this.width = 16;
    this.frame = 0;
    this.frameC = 16;
    this.object = o;
    this.alive = true;
    
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
        if(this.alive){
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
            this.frameC--;
            if(this.frameC <= 0){
                this.frameC = 16;
                if(this.frame === 0){
                    this.frame = 1;
                }else{
                    this.frame = 0;
                }       
            }
            if (colission(gameObjects[whip].x, gameObjects[whip].y, gameObjects[whip].width, gameObjects[whip].height, this.x, this.y, this.width, this.height)) {
                this.alive = false;
                if(this.object === "h"){
                    gameObjects.push( new heart(this.x, this.y+46));
                }
                if(this.object === "wl"){
                    if(gameObjects[whip].lvl >= 2){
                        gameObjects.push(new heart(this.x, this.y+46));
                    }else{
                        gameObjects.push(new levelUp(this.x, this.y+40));
                    }
                }
                this.x = -1000;
            }
        }
    }},

    this.render = function () {
        this.ctx = cont;
        this.ctx.drawImage(images.lamp[0][this.frame], this.x, this.y);
    }
}