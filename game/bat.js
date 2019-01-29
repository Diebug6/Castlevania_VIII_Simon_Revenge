function bat(x, y) {
    this.x = x
    this.y = y;
    this.height = 27;
    this.width = 27;
    this.damage = 2;
    this.points = 100;
    this.alive = true;
    this.frames = 3;
    this.frame = 0;
    this.dir = "";
    this.facing = 0;
    this.framerate = 9;
    this.move = false;
	this.sfx = new sound("assets/sounds/Effects/Monsters/zombiehit.ogg");
    if(gameObjects[player].x < this.x){
        this.direction = "LEFT";
        this.dir = "LEFT";
    }else{
        this.direction = "RIGHT";
        this.dir = "RIGHT";
    }


    this.processInput = function (key) {
        if(!pause){
        if(!moveplayer){
        if (key == KEY_RIGHT_ARROW){
            this.x -= 3.2;
        }else if(key == KEY_LEFT_ARROW){ 
            this.x += 3.2;
        }else{
            this.direction = this.dir;
        }
        }
    }
    },

    this.update = function () {
		if(!pause){
            if(this.move){
            if(this.alive){
                if(move || moveplayer){
                    if (this.direction === "RIGHT") {
                        console.log(this.direction);
                        this.x += 4;
                        this.facing = 1;
                    }
                    else if (this.direction === "LEFT") {
                         this.x -= 4;
                         this.facing = 0;
                    }
                }
                if (gameObjects[player].hitTime < 0) {
                    if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.x, this.y, this.width, this.height)) {
                        gameObjects[player].life -= this.damage;
                        gameObjects[player].hits += this.damage;
		    			gameObjects[player].hitsfx.play();
		    			gameObjects[player].hitTime = 80;
                    }
                }
                if (colission(gameObjects[whip].x, gameObjects[whip].y, gameObjects[whip].width, gameObjects[whip].height, this.x, this.y, this.width, this.height)) {
                    this.sfx.play();
		    		this.x = -100;
                    this.y = -100;
                    this.alive = false;
                    gameObjects[player].points += this.points;
                    gameObjects[player].attack = false;
                }
            }
            this.framerate --;
            if(this.framerate <= 0){
                this.frame = (this.frame +1)%this.frames;
                this.framerate = 9;
            }
        }else{
        if(this.x <= WIDTH){
            this.move = true;
        }
    }
    }
    },

    this.render = function () {
        this.ctx = cont;
        this.ctx.drawImage(images.bat[this.facing][this.frame], this.x,this.y,this.width,this.height);
    }
}