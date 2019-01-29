function credits(context){   
	this.ctx = context;
	this.processInput = function(key){
		if (keystate[KEY_ESC]){
			startMenu();
		}
    }
	,
	this.update = function(){

	},
	this.render = function(){
		this.ctx = context;
		this.ctx.fillStyle = "#ffffff";
		this.ctx.font = "30px Arial";
		this.ctx.fillText("Credits", 40, 100); 
		this.ctx.font = "23px Arial";
        this.ctx.fillText("Toccata and Fugue in D Minor Kevin MacLeod", 60, 130);
        this.ctx.fillText("(incompetech.com)", 100, 150);
        this.ctx.fillText("Licensed under Creative Commons: By Attribution 3.0 License", 60, 170);
        this.ctx.fillText("http://creativecommons.org/licenses/by/3.0/", 100, 190);
		this.ctx.fillText("Game created by", 60, 250);
        this.ctx.fillText("Diego Gonzalez", 60, 270);
        this.ctx.font = "17px Arial";
		this.ctx.fillText("Press esc to go back", (WIDTH/2)-1, HEIGHT-20);
		
	}  
}