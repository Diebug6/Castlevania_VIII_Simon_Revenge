function movingPlaform(x, y, m) {
    this.ix = x;
    this.x = x;
    this.y = y;
    this.m = m;
    this.width = 40;
    this.height = 18;
    this.move = "RIGHT";
    this.sx = this.x + this.width;
    this.ssx = this.x - 3;
    this.processInput = function(key) {
        if(move && move2){
            if (key == KEY_RIGHT_ARROW) this.direction = "RIGHT";
            if (key == KEY_LEFT_ARROW) this.direction = "LEFT";
        }
    },
    this.update = function(){

        if(!pause){
            if(this.direction === "RIGHT") {
                this.x -= 3.2;
                this.m -= 3.2;
                this.ix -= 3.2;
                this.ssx -=3.2;
                this.sx -=3.2;
            }else if(this.direction === "LEFT") {
                this.x += 3.2;
                this.m += 3.2;
                this.ix += 3.2;
                this.ssx +=3.2;
                this.sx +=3.2;
            }
            if(this.x >= this.ix+this.m){
                this.move = "LEFT";
            }else if(this.x <= this.ix){
                this.move = "RIGHT";
            }
            if(this.move == "RIGHT"){
                this.x++;
                this.sx ++;
                this.ssx ++;
                
            }else if(this.move == "LEFT"){
                this.x--;
                this.sx --;
                this.ssx --;
            }
            if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.x, this.y, this.width - 2, this.height / 90)) {
                gameObjects[player].jump = false;
                gameObjects[player].jumptime = 50;
                gameObjects[player].y = this.y - gameObjects[player].height;
                gameObjects[player].dir = gameObjects[player].lastdir;
                move = true;
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
            this.direction = "";
        }
    },
    this.render = function(){
        this.ctx = cont;
        this.ctx.drawImage(images.floor[2],this.x,this.y,this.width,this.height);   
    }
}