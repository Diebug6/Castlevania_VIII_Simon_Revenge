function win(context,p){   
    this.ctx = context;
    this.theme = new sound("assets/sounds/Themes/win.ogg");
    this.theme.play();
    nextLevel = 1;
    this.processInput = function(key){
        if (keystate[KEY_ENTER]) {
            this.theme.stop();
            startMenu();
        }
    },
    this.update = function(){

    },
    this.render = function(){
        this.ctx.fillStyle = "#ffffff"
        this.ctx.font = "50px Arial";
        this.ctx.fillText("You Win", 40, 100);
		this.ctx.font = "25px Arial";
        this.ctx.fillText("Thanks to your good deeds the world is safe place once again", 40, 200);
        this.ctx.fillText("May the force be with you", 40, 250);
        this.ctx.fillText("Points: "+p, 40, 290);
        this.ctx.font = "20px Arial";
		this.ctx.drawImage(images.sonic[0], 400, 300,140,230);
        this.ctx.fillText("Press enter to go back to the menu", 200, 550);
    }
}