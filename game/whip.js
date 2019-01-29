function whip1() {
    this.x = -100;
    this.y = -100;
    this.height = 5;
    this.width = 60;
    this.attack = false;
    this.lvl = 0;
    this.dir = 0;
    this.damage = 2;

    this.processInput = function (key) {
    },

        this.update = function () {
            if(this.lvl === 0){
                this.width = 47;
            }else if(this.lvl === 1){
                this.width = 60;
            }else{
                this.width = 80;
            }
            if (!this.attack) {
                this.x = -100;
				this.y = -100;
            } else {
                if (gameObjects[player].facing === "RIGHT") {    
                    this.x = gameObjects[player].x + gameObjects[player].width;
                    this.y = gameObjects[player].y + 22;
                    this.dir = 0;
                } else {
                    this.x = gameObjects[player].x - this.width;
                    this.y = gameObjects[player].y + 22;
                    this.dir = 1;
                }
            }
        },

        this.render = function () {
            this.ctx = cont;
            if (this.attack) {
                this.ctx.drawImage(images.whip[this.lvl][this.dir], this.x, this.y);
            }
        }
}