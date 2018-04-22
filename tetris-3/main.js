var
  game = new Phaser.Game(800, 600, Phaser.AUTO, 'gameDiv'),
  Main = function () {},
  gameOptions = {
    playSound: true,
    playMusic: true
  },
  musicPlayer;


Main.prototype = {
    preload: function(){
        game.load.script('polyfill',   'lib/polyfill.js');
        game.load.script('utils',   'lib/utils.js');
        game.load.script('splash',  'states/Splash.js');
    },
    create: function(){
        document.getElementById("gameDiv").children[0].id = "gameCanvas";
        tmp = document.getElementById("loader");
		if(tmp != null){
			tmp.parentElement.removeChild(tmp);
		}
        game.state.add('Splash', Splash);
        game.state.start('Splash');
    },
};

game.state.add('Main',Main);
game.state.start('Main');