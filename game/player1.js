var pause = true, playMusic = true;
function player1() {
	this.x = 80;
	this.y = HEIGHT - 200;
	this.height = 80;
	this.width = 40;
	this.jump = false;
	this.jumptime = 35;
	this.attack = false;
	this.cooldown = 20;
	this.life = 16;
	this.hits = 0;
	this.points = 0;
	this.facing = "RIGHT";
	this.dir = 0;
	this.frame = 0;
	this.timemove = 6;
	this.lastframe = 1;
	this.lastdir = 0;
	this.lives = 3;
	this.hearts = 0;
	this.attckTime = 0;
	this.hitTime = 80;
	this.hitsfx = new sound("assets/sounds/Effects/Others/hit.ogg");
	this.theme  = new levelmusic();
	this.recharge = new sound("assets/sounds/Effects/Others/recharge.ogg");

	this.seeLives  = function(){
		if(this.lives <= 0){
			if(this.hearts <= 0){
			this.theme.theme[nextLevel-1].stop();
			loadGameOver();
			}else{
				this.recharge.play();
				this.life = this.hearts;
				this.hits = 16 - this.hearts;
				this.hearts = 0;
			}
		}else{
			this.life = 16;
			this.hits = 0;
			loadLevel();
		}
	}

	this.processInput = function (key) {
		if (!pause) {
			if (keystate[KEY_RIGHT_ARROW]) {
				this.direction = "RIGHT";
				if (!this.jump) {
					this.facing = "RIGHT";
				}
				if (!this.jump) {
					this.dir = 0
				} else {
					this.frame = 0;
				}
			} else if (keystate[KEY_LEFT_ARROW]) {
				this.direction = "LEFT";
				if (!this.jump) {
					this.facing = "LEFT";
				}
				if (!this.jump) {
					this.dir = 1
				} else {
					this.frame = 1;
				}
			} else if (keystate[KEY_UP_ARROW]) {
				this.direction = "UP";
			} else if (keystate[KEY_DOWN_ARROW]) {
				this.direction = "DOWN";
			} else {
				this.direction = "";
			}
			if (this.attckTime <= 0) {
				if (keystate[KEY_S]) {
					this.attack = true;
					this.attckTime = 46;
				}
			}
			if (keystate[KEY_A]) {
				if (moveplayer || move) {
					if (!this.jump) {
						this.jump = true;
						this.lastdir = this.dir;
						this.dir = 2
					}
				}
			}
		}
		if (keystate[KEY_ENTER]) {
			if (!this.pressed) {
				pause = !pause;
			}
			this.pressed = true;
		} else {
			this.pressed = false;
		}

	},
		this.update = function () {
			if (!pause) {
				if(playMusic){
					this.theme.theme[nextLevel-1].play();
					playMusic = false;
				}
				this.hitTime--;
				this.attckTime--;
				this.timemove--;
				this.y = this.y + GRAVITY;
				if (moveplayer) {
					if (this.direction === "RIGHT") {
						this.x += 4;
					} else if (this.direction === "LEFT") {
						this.x -= 4;
					}
				}
				if (this.jump) {
					this.frame = this.lastdir;
					this.jumptime-=2.2;
					if (this.jumptime > 0) {
						this.y -= 12;
					}
				} else {
					if (this.timemove <= 0) {
						if (this.frame === 0 && this.direction === "") {
							this.frame = 1;
						} else {
							if (this.frame === 1) {
								this.frame = 0;
							}
							if (this.direction === "RIGHT") {
								if (this.frame === 0) {
									this.frame = 2;
								} else if (this.frame === 2) {
									this.frame = 3;
								} else if (this.frame === 3) {
									this.frame = 0;
								}
							} else if (this.direction === "LEFT") {
								if (this.frame === 0) {
									this.frame = 2;
								} else
									if (this.frame === 2) {
										this.frame = 3;
									} else
										if (this.frame === 3) {
											this.frame = 0;
										}
							} else {
								this.frame = 0;
							}

						}
						this.timemove = 8;
					}
					this.lastdir = this.dir;
				}
				if (this.x > WIDTH - this.width) {
					this.x = WIDTH - this.width;
				}
				if (this.x <= 0) {
					this.x = 0;
				}
				if (this.y > HEIGHT) {
					this.x = 0;
					this.y = HEIGHT - 100;
					this.life = 0;
					this.hits = 16;
					this.seeLives();
				}
				if (this.attack && this.cooldown > 0) {
					this.cooldown--;
					gameObjects[whip].attack = true;
				} else {
					gameObjects[whip].attack = false;
					this.attack = false;
					this.cooldown = 20;
				}
				if (this.life <= 0) {
					this.lives--;
					this.seeLives()
				}
			}
		},
		this.render = function () {
			this.ctx = cont;
			if(this.hitTime > 0){
				if(this.hitTime%2 == 0){
				this.ctx.drawImage(images.MCimg[this.dir][this.frame], this.x, this.y);
				}
			}else{
				this.ctx.drawImage(images.MCimg[this.dir][this.frame], this.x, this.y);
			}
			if (pause) {
				this.ctx.fillStyle = "#ffffff"
				this.ctx.font = "50px Arial";
				this.ctx.fillText("PAUSE", (WIDTH / 2) - 110, HEIGHT / 2);
			}
		}
}