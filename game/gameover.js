function gameover(context){   
    this.ctx = context;
    this.theme = new sound("assets/sounds/Themes/gameover.ogg");
    this.theme.play();
    this.processInput = function(key){
        if (keystate[KEY_ENTER]) {
            this.theme.stop();
            startMenu();
        }
    },
    this.update = function(){

    },
    this.render = function(){
        this.ctx.fillStyle = "#ffffff";
        this.ctx.font = "50px Arial";
        this.ctx.fillText("Game Over", 40, 100);
        this.ctx.font = "25px Arial";
        this.ctx.fillText("Dracula's gonna take over the world",40,130);
        this.ctx.drawImage(images.dracula[0], 400, 300,200,240);
        this.ctx.fillText("Press enter to go back to the menu", 40, 200);
    }
}