function instructions(context){   
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
		this.ctx.fillText("Instructions", 40, 100); 
		this.ctx.font = "20px Arial";
		this.ctx.fillText("You have to survive and kill Dracula", 60, 130);
		this.ctx.fillText("Press esc to go back", (WIDTH/2)-1, HEIGHT-20);
		
	}  
}