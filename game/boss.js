function boss() {
    this.x = WIDTH/2;
    this.y = (HEIGHT/2)-20;
    this.lx = 20;
    this.ly = HEIGHT-20;
    this.height = 50;
    this.width = 135;
    this.damage = 3;
    this.points = 800;
    this.frames = 2;
    this.frame = 0;
    this.framerate = 4;
    this.move = 20;
    this.moving = false;
    this.up = false;
    this.speed = 3;
    this.life = 40;
    this.sfx = new sound("assets/sounds/Effects/Monsters/bossHit.ogg");
    this.sfx2 = new sound("assets/sounds/Effects/Monsters/bossDeath.ogg");
    this.setDir = function(){
        if(gameObjects[player].x < this.x){
            this.dir = "i";
        }else{
            this.dir = "d";
        }
    }

    this.moveD = function(){
        if(!this.up){
            if(this.dir == "i"){
                this.x-=this.speed;
            }else{
                this.x+=this.speed;
            }
            this.y+=this.speed;
        }else{
            this.y-=this.speed;
        }
    }
    this.processInput = function (key) {
       
    },

    this.update = function () {
        if(!pause){
            if(boss){
                this.framerate --;
                if(this.framerate <= 0){
                    this.frame = (this.frame +1)%this.frames;
                    this.framerate = 9;
                    if(this.frame==0){
                        this.height = 50;
                        this.width = 135;
                    }else{
                        this.height = 50;
                        this.width = 87;
                    }
                }
                if(!this.moving){
                    this.move--;
                    if(this.move <= 0){
                        this.setDir();
                        this.moving = true;
                    }
                }else{
                    this.moveD();
                    if(this.y >= (HEIGHT-75)-this.height){
                        this.up = true;
                    }
                    if(this.y <= (HEIGHT/2)-20){
                        this.up = false;
                        this.moving = false;
                        this.move = 20;
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
                    this.life -= gameObjects[whip].damage;
                    this.sfx.play();
                    gameObjects[player].attack = false;
                }
                if(this.life <= 15){
                    this.speed = 3.5;
                }
                if(this.life <= 0){
                    gameObjects[player].points += this.points;
                    this.sfx2.play();
                    boss = false;
                }
            }
        }
    },

    this.render = function () {
        if(boss){
            this.ctx = cont;
            this.ctx.drawImage(images.boss[this.frame], this.x,this.y);
            this.ctx.font = "45px Arial";
            this.ctx.fillStyle = "#ff0022";
            this.lx = 20;
            for(var x = 0; x < this.life; x++){
                this.ctx.fillText("|", this.lx, this.ly);
                this.lx += 10;
            }
        }
    }
}