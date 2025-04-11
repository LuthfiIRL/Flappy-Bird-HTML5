let config = {
  type: Phaser.AUTO,
  width: 288,
  height: 512,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 600 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};
let isGameOver = false;
let score = 0;
let scoreText;
let isRefresh = false;
let hitPlayed = false;
let diePlayed = false;
let character;
let base;
let baseImage;
let baseHeight;
let baseWidth;
let speed = -150;
let spawnTime = 1500;
let gameStart = false;
let game = new Phaser.Game(config);

function preload() {
  this.load.image("background", "Assets/Game Objects/background-day.png");
  this.load.image("character1", "Assets/Game Objects/yellowbird-midflap.png");
  this.load.image("character2", "Assets/Game Objects/yellowbird-downflap.png");
  this.load.image("character3", "Assets/Game Objects/yellowbird-upflap.png");
  this.load.image("pillar", "Assets/Game Objects/pipe-green.png");
  this.load.image("base", "Assets/Game Objects/base.png");
  this.load.image("gameover", "Assets/UI/gameover.png");
}
