var boss = true;
function end(x, y) {
    this.x = x;
    this.y = y;
    this.width = 50;
    this.height = 100;
    this.aTime = 80;
    this.frame = 0;
    this.sfx = new Audio("assets/sounds/Effects/Others/door.ogg");
    this.processInput = function (key) {

    },

    this.update = function () {
        if(!pause){
            move = false;
            move2 = false;
            moveplayer = true;
            update1 = false;
            if(!boss){
                if (colission(gameObjects[player].x, gameObjects[player].y, gameObjects[player].width, gameObjects[player].height, this.x, this.y, this.width, this.height)) {
                    if(this.aTime == 80){
                        this.sfx.play();
                    }
                    gameObjects[player].jumpTime = 0;
			        gameObjects[player].jump = false;
                    gameObjects[player].x+= 0.5;
                    gameObjects[player].width -= 0.5;
                    moveplayer = false;
                    this.aTime--;
                    this.frame = 1;
			        if(this.aTime <= 0){
                        gameObjects[player].theme.theme[nextLevel-1].stop();         
			        	endGame();
			        }
                }
            }
        }
    },

    this.render = function(){
        this.ctx = cont;
		this.ctx.drawImage(images.door[this.frame],this.x,this.y,this.width,this.height);
    }
}