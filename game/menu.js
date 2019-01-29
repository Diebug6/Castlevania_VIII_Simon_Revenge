function menu(context)
{   
 this.ctx = context;
 this.options = [new option("Start", 200, 240),
 new option("Controls", 200, 280),
 new option("Instructions", 200, 320),
 new option("Credits", 200, 360)];
 this.past = 1;
 this.precionado=false;
 this.cooldown = 0;
 this.current = 0;
 this.theme = new sound("assets/sounds/Themes/BWV565.ogg");
 this.selec = new sound("assets/sounds/Effects/Others/select.ogg");
 this.theme.play();
 this.processInput = function(key){
    if(keystate[KEY_UP_ARROW] && !this.precionado){
        this.cooldown = 0;
        this.past = this.current;
        this.precionado = true;
        this.current=this.current-1;   
    }
    if(keystate[KEY_DOWN_ARROW] && !this.precionado){
        this.cooldown = 0;
        this.precionado = true;
        this.past = this.current;
        this.current=this.current+1;
    }
    if (keystate[KEY_ENTER] && this.current === 0 && this.cooldown >= 30){
        this.theme.stop();
		this.selec.play();
		loadLevel();
       
    }
    if (keystate[KEY_ENTER] && this.current === 1 && this.cooldown >= 30) {
        this.theme.stop();
       loadControls();
    }
    if (keystate[KEY_ENTER] && this.current === 2 && this.cooldown >= 30){
        this.theme.stop();
       loadInstructions();
    }if (keystate[KEY_ENTER] && this.current === 3 && this.cooldown >= 30){
        this.theme.stop();
        loadCredits();
    }
},
this.update = function(){
    this.cooldown ++;
    
    if (this.cooldown >= 25) {
        this.precionado = false;
    }
    
    if (this.current < 0) {
        this.current = 0;
    }else if (this.current > 3) {
        this.current = 3;
    }
    this.options[this.past].selected = false;
    this.options[this.current].selected = true;
},
this.render = function(){
    this.ctx.fillStyle = "#ffffff"
    this.ctx.font = "50px Arial";
    this.ctx.fillText("Castlevania VIII: Simon's Revenge", 18, 100);
    this.ctx.font = "35px Arial";
    this.options.forEach((opt) => {
        this.ctx.fillText(opt.text, opt.x, opt.y);
        if (opt.selected){
            this.ctx.drawImage(images.pointer[0], opt.sx-6, opt.y-20);
        }
    }); }
    
}
function option(text, x, y)
{
    this.text = text;
    this.x=x;
    this.y=y;
    this.selected = false;
    this.sx = this.x-12;
}  