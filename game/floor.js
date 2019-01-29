function floor(x, y, h, w, idx) {

    this.cant = w/50;
    this.x = x;
    this.y = y;
    this.height = h;
    this.width = w;
    this.sx = this.x + this.width;
    this.ssx = this.x - 3;

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
        this.sx = this.x + this.width;
        this.ssx = this.x - 4;
        if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.x, this.y, this.width - 2, this.height / 90)) {
            gameObjects[player].jump = false;
            gameObjects[player].jumptime = 50;
            gameObjects[player].y = this.y - gameObjects[player].height;
            gameObjects[player].dir = gameObjects[player].lastdir;
            move = true;
            move2 = true;
        }
        if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.sx, this.y + 4, 3, this.height - 2)) {
            gameObjects[player].x = this.sx + 2;
            gameObjects[player].jumptime = 0;
            move = false;
        }
        if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.ssx, this.y + 4, 3, this.height - 2)) {
            gameObjects[player].x = this.x - 43;
            gameObjects[player].jumptime = 0;
            move = false;
        }
        if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.x, this.y+this.height, this.width, 5)) {
            gameObjects[player].y = this.y + 25;
            gameObjects[player].jumptime = 0;
            move = false;
        }
    }
    if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.x, this.y, this.width - 2, this.height / 90)) {
        gameObjects[player].jump = false;
        gameObjects[player].jumptime = 50;
        gameObjects[player].y = this.y - gameObjects[player].height;
        gameObjects[player].dir = gameObjects[player].lastdir;
    }
        this.direction = "";
    }
},

    this.render = function () {
        this.ctx = cont;
        this.xx = this.x;
        for(var z = 0; z<this.cant; z++){
            this.ctx.drawImage(images.floor[idx],this.xx,this.y);
            this.xx+=50;
        }
    }
}