var gameObjects = [], keystate = [];
var level = [level1, level2, level3, level4];
var cont = "";
var gravity = 5;
var update1 = true;
var move = false;
var move2 = false;
var moveplayer = false;
var started = false;
var nextLevel = 1;
var images = new loadImages();
var playerData = null, whipData = null;
var gameArea =
	{
		canvas: document.createElement("canvas"),
		start: function () {
			this.canvas.width = WIDTH;
			this.canvas.height = HEIGHT;
			document.getElementById("game").appendChild(this.canvas);
			cont = this.canvas.getContext("2d");
			cont.fillStyle = "#000000";
			this.interval = setInterval(loop, 14);
			document.addEventListener("keydown", function (evt) {
				evt.preventDefault();
				keystate[evt.keyCode] = true;
			});
			document.addEventListener("keyup", function (evt) {
				keystate[evt.keyCode] = false;
			});
		},
		clear: function () {
			cont.clearRect(0, 0, WIDTH, HEIGHT);
		},
	}
function clearObject() {
	gameObjects = [];
	update1 = true;
}
function colission(ax, ay, aw, ah, bx, by, bw, bh) {
	return ax < bx + bw && ay < by + bh && bx < ax + aw && by < ay + ah;
}
function startMenu(){
	if (!started) {
		started = true;
		gameArea.start();
	}
	clearObject();
	gameObjects.push(new background(3, 0));
	gameObjects.push(new menu(cont));
}
function loadControls(){
	clearObject();
	gameObjects.push(new background(3, 0));
	gameObjects.push(new controls(cont));
}
function loadInstructions(){
	clearObject();
	gameObjects.push(new background(3, 0));
	gameObjects.push(new instructions(cont));
}
function loadCredits(){
	clearObject();
	gameObjects.push(new background(3, 0));
	gameObjects.push(new credits(cont));
};
function loadLevel(){
	playMusic = true;
	this.lvl = nextLevel-1;
	clearObject();
	level[this.lvl]();
}
function loadGameOver(){
	nextLevel = 1;
	clearObject();
	gameObjects.push(new gameover(cont));
}
function endGame(){
	clearObject();
	gameObjects.push(new win(cont, playerData.points));
}
function resetXW(y){
	playerData.x = 80;
	playerData.width = 40;
	playerData.y = y;
}
function level1() {
	gameObjects.push(new background(0, 3.45));
	gameObjects.push(new firelamp(300, HEIGHT - 120, "h"));
	gameObjects.push(new firelamp(600, HEIGHT - 120, "wl"));
	gameObjects.push(new firelamp(900, HEIGHT - 120, "h"));
	gameObjects.push(new firelamp(1200, HEIGHT - 120, "h"));
	gameObjects.push(new firelamp(1500, HEIGHT - 120, "wl"));
	gameObjects.push(new firelamp(1800, HEIGHT - 120, "h"));
	gameObjects.push(new firelamp(2100, HEIGHT - 120, "h"));
	gameObjects.push(new firelamp(2400, HEIGHT - 120, "wl"));
	player = gameObjects.push(new player1()) - 1;
	playerData = gameObjects[player];
	whip = gameObjects.push(new whip1()) - 1;
	whipData = gameObjects[whip];
	gameObjects.push(new hud());
	gameObjects.push(new beginpoint(0));
	gameObjects.push(new floor(0, HEIGHT - 50, 50, 2850, 0));
	gameObjects.push(new door(2625, HEIGHT- 150));
	gameObjects.push(new bat(1000, 300));
	gameObjects.push(new bat(300, 200));
	gameObjects.push(new bat(1200, 220));
	gameObjects.push(new bat(1900, 310));
	gameObjects.push(new bat(2500, 200));
	gameObjects.push(new bat(1500, HEIGHT-200));
}
function level2(){
	resetXW((HEIGHT-130)-playerData.height);
	gameObjects.push(new background(moon, 1.6));
	gameObjects.push(new background(1, 3.1));
	gameObjects.push(new ladder(1174, HEIGHT-250));
	gameObjects.push(new ladder(3174, HEIGHT-400));
	player = gameObjects.push(playerData) - 1;
	whip = gameObjects.push(whipData) - 1;
	gameObjects.push(new zombie(400, HEIGHT-110));
	gameObjects.push(new zombie(800, HEIGHT-110));
	gameObjects.push(new zombie(900, HEIGHT-110));
	gameObjects.push(new zombie(1000, HEIGHT-110));
	gameObjects.push(new zombie(2000, HEIGHT-110));
	gameObjects.push(new zombie(1500, HEIGHT-110));
	gameObjects.push(new zombie(2300, HEIGHT-110));
	gameObjects.push(new firelamp(1386, HEIGHT - 390, "wl"));
	gameObjects.push(new bat(500, HEIGHT- 200));
	gameObjects.push(new bat(1200, HEIGHT- 220));
	gameObjects.push(new bat(1300, HEIGHT- 230));
	gameObjects.push(new bat(830, HEIGHT- 120));
	gameObjects.push(new bat(1550, HEIGHT- 130));
	gameObjects.push(new bat(1630, HEIGHT- 250));
	gameObjects.push(new bat(1700, HEIGHT- 200));
	gameObjects.push(new bat(1800, HEIGHT- 200));
	gameObjects.push(new bat(2000, HEIGHT- 220));
	gameObjects.push(new bat(2200, HEIGHT- 210));
	gameObjects.push(new bat(2500, HEIGHT- 205));
	gameObjects.push(new bat(2700, HEIGHT- 120));
	gameObjects.push(new bat(2900, HEIGHT- 230));
	gameObjects.push(new bat(3300, HEIGHT- 225));
	gameObjects.push(new zombie(3500, HEIGHT-110));
	gameObjects.push(new hud());
	gameObjects.push(new beginpoint());
	gameObjects.push(new floor(0, HEIGHT - 50, 50, 3500, 1));
	gameObjects.push(new floor(1200, HEIGHT-250, 20, 100, 2));
	gameObjects.push(new floor(1350, HEIGHT-320, 20, 100, 2));
	gameObjects.push(new floor(1500, HEIGHT-250, 20, 100, 2));
	gameObjects.push(new floor(3200, HEIGHT-400, 20, 400, 2));
	gameObjects.push(new door(3435, HEIGHT- 500));
	
}
function level3(){
	resetXW((HEIGHT-480)-playerData.height);
	gameObjects.push(new background(moon, 1.6));
	gameObjects.push(new background(4, 3.1));
	player = gameObjects.push(playerData) - 1;
	whip = gameObjects.push(whipData) - 1;
	gameObjects.push(new hud());
	gameObjects.push(new beginpoint());
	gameObjects.push(new door(1615, HEIGHT- 360));
	gameObjects.push(new floor(0, HEIGHT-400, 20, 100, 2));
	gameObjects.push(new floor(120, HEIGHT-260, 20, 100, 2));
	gameObjects.push(new floor(840, HEIGHT-260, 20, 50, 2));
	gameObjects.push(new bat(500, HEIGHT- 310));
	gameObjects.push(new bat(600, HEIGHT- 310));
	gameObjects.push(new bat(800, HEIGHT- 310));
	gameObjects.push(new bat(900, HEIGHT- 310));
	gameObjects.push(new bat(1000, HEIGHT-310));
	gameObjects.push(new bat(1100, HEIGHT-310));
	gameObjects.push(new bat(1200, HEIGHT- 310));
	gameObjects.push(new bat(1300, HEIGHT- 310));
	gameObjects.push(new bat(1400, HEIGHT- 310));
	gameObjects.push(new bat(1500, HEIGHT- 310));
	gameObjects.push(new bat(1600, HEIGHT- 310));
	gameObjects.push(new bat(1150, HEIGHT- 310));
	gameObjects.push(new bat(1250, HEIGHT- 310));
	gameObjects.push(new bat(1350, HEIGHT- 310));
	gameObjects.push(new bat(1450, HEIGHT- 310));
	gameObjects.push(new bat(1550, HEIGHT- 310));
	gameObjects.push(new bat(1650, HEIGHT- 310));
	gameObjects.push(new movingPlaform(240, HEIGHT-260, 1000));
	gameObjects.push(new floor(950,HEIGHT-260, 20, 50, 2));
	gameObjects.push(new floor(1000,HEIGHT-260, 20, 50, 2));
	gameObjects.push(new floor(1100,HEIGHT-260, 20, 50, 2));
	gameObjects.push(new floor(1200,HEIGHT-260, 20, 500, 2));
	gameObjects.push(new lava(0,HEIGHT-34, 1650));
}

function level4(){
	resetXW((HEIGHT-150)-playerData.height);
	gameObjects.push(new background(5, 3.2));
	player = gameObjects.push(playerData) - 1;
	whip = gameObjects.push(whipData) - 1;
	gameObjects.push(new hud());
	gameObjects.push(new beginpoint());
	gameObjects.push(new end(750, HEIGHT- 174));
	gameObjects.push(new floor(0, HEIGHT-74, 50, 800, 1));
	gameObjects.push(new floor(0, HEIGHT-24, 50, 800, 1));
	gameObjects.push(new boss());
}
function loop() {
	processInput();
	update();
	gameArea.clear();
	render();

}
function processInput() {
	if(keystate[KEY_RIGHT_ARROW]){
		this.dir = KEY_RIGHT_ARROW;
	}else if(keystate[KEY_LEFT_ARROW]){
		this.dir = KEY_LEFT_ARROW;
	}
	gameObjects.forEach(function (object) {
		object.processInput(this.dir);
	});
	this.dir = undefined;
}

function update() {
	gameObjects.forEach(function (object) {
		object.update();
	});
}

function render() {
	gameObjects.forEach(function (object) {
		object.render();
	});
}
