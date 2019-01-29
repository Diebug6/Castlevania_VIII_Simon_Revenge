function controls(context){   
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
		this.ctx.fillText("Controls", 40, 100); 
		this.ctx.font = "20px Arial";
		this.ctx.fillText("Use the arrow keys to move your charater use A and S to jump and attack", 60, 130);
		this.ctx.font = "20px Arial";
		this.ctx.fillText("Press esc to go back", (WIDTH/2)-1, HEIGHT-20);
		
	}  
}