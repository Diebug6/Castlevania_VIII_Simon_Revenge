function ladder(x, y) {
    this.x = x;
    this.y = y;
    this.yy = this.y - 79;
    this.width = 20;
    this.height = 200;
    this.processInput = function (key) {
        if (key == KEY_RIGHT_ARROW) this.direction = "RIGHT";
        if (key == KEY_LEFT_ARROW) this.direction = "LEFT";
    },

    this.update = function () {
        if(!pause){
        if(update1){
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
        
        this.direction = "";
    }
    if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.x, this.y, this.width, this.height)) {
        if(gameObjects[player].direction === "UP"){
             gameObjects[player].y -= (GRAVITY + 1.6);
             move = true; 
         }else if(gameObjects[player].direction === "DOWN"){
             gameObjects[player].y -= GRAVITY;
             gameObjects[player].y += 2.2;
             move = true; 
         }else{
             gameObjects[player].y -= GRAVITY;
         }
     }
    }},

    this.render = function(){
		this.ctx = cont;
        this.ctx.drawImage(images.ladder[0], this.x, this.y);
    }
}