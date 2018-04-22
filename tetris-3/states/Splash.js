var Splash = function() {};

Splash.prototype = {
    loadScripts: function() {
        game.load.script('style', 'lib/style.js');
        game.load.script('mixins', 'lib/mixins.js'); 
        game.load.script('Menu', 'states/Menu.js');
        game.load.script('Play', 'states/Play.js');
        game.load.script('Pause', 'states/Pause.js');
        game.load.script('End', 'states/End.js');
        game.load.script('SoundMenu', 'states/SoundMenu.js');
    },
    loadImages: function() {
        game.load.image('logoTetris','img/logoTetris.jpeg');
    },
    addGameStates: function () {
        game.state.add("Menu", Menu);
        game.state.add("Play", Play);
        game.state.add("Pause", Pause);
        game.state.add("End", End);
        game.state.add("soundMenu", SoundMenu);
      },
    preload: function() {
        var firstText = game.add.text(60, 150, 'TETRIS LICENSED TO NINTENDO', {font: '20px PixelEmulator', fill:'#ffffff'});
		var firstText1 = game.add.text(60,190,'\u00A9 1989 NINTENDO',{font: '20px PixelEmulator', fill:'#ffffff'});
        var firstText2 = game.add.text(50,230, 'PROGRAMMERS: ERICK, JHONE, LUCAS, VICTOR', {font: '20px PixelEmulator', fill: '#ffffff'});
        //this.loadScripts();
        this.loadImages();
        game.load.script('FirstMenu', 'states/FirstMenu.js');
    },
    create: function() {
        //this.addGameStates();
        game.state.add("FirstMenu",FirstMenu);
        setTimeout(function () {
            game.state.start("FirstMenu");
          }, 1500);
    },
}
