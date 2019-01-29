function lava(x, y, w) {
    
        this.cant = w/50;
        this.x = x;
        this.y = y;
        this.height = 34;
        this.width = w;
        this.framerate = 8;
        this.frames = 4;
        this.frame = 0;


        this.processInput = function (key) {
            if (key == KEY_RIGHT_ARROW) this.direction = "RIGHT";
            if (key == KEY_LEFT_ARROW) this.direction = "LEFT";
        },
    
        this.update = function () {
            if(this.x > 0){
                this.x = 0;
            }
            if(!pause){
            if(move && move2){
                if (this.direction === "RIGHT") {
                    this.x -= 3.2;
                }
                else if (this.direction === "LEFT") {
                    this.x += 3.2;
                }
            }
            if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.x, this.y, this.width, this.height)) {
                gameObjects[player].life = 0;
                gameObjects[player].hit = 16;
            }
            this.framerate --;
            if(this.framerate <= 0){
                this.frame = (this.frame +1)%this.frames;
                this.framerate = 8;
            }
            this.direction = "";
        }
        },
    
        this.render = function () {
            this.ctx = cont;
            this.xx = this.x;
            for(var z = 0; z<this.cant; z++){
                this.ctx.drawImage(images.lava[this.frame],this.xx,this.y);
                this.xx+=50;
            }
        }
    }