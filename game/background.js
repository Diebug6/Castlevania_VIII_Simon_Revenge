var moon = 2;
function background(ind, sp)
{
	this.x = -3;
	
	this.processInput = function(key)
	{
		if (key == KEY_RIGHT_ARROW) this.direction = "RIGHT";
        if (key == KEY_LEFT_ARROW) this.direction = "LEFT";
	}
		
	this.update = function()
	{		
		if(!pause){
		if(move && move2){
            if (this.direction === "RIGHT") {
                gameObjects[player].direction = "RIGHT";
                this.x -= sp;
            }
            else if (this.direction === "LEFT") {
                this.x += sp;
                gameObjects[player].direction = "LEFT";
            }
		}
		this.direction = "";
		if(this.x>=0){
			this.x = -3;
		}
		}
	}
		
	this.render = function()
	{		
		this.ctx = cont;
		this.ctx.drawImage(images.background[ind], this.x, 0);
	}	
}