function beginpoint() {
    this.x = 0;
    this.processInput = function (key) {
        if (key == KEY_RIGHT_ARROW) this.direction = "RIGHT";
        if (key == KEY_LEFT_ARROW) this.direction = "LEFT";
    },

    this.update = function () {
        if(!pause){
        if(move){
            if (this.direction === "RIGHT") {
                this.x -= 3.2;
            }
            else if (this.direction === "LEFT") {
                 this.x += 3.2;
            }
        }
        if(this.x > 0){
            moveplayer = true;
            move2 = false;
        }else{
            move2 = true;
            moveplayer = false;
        }
        this.direction ="";
    }
},

    this.render = function () {
       
    }
}