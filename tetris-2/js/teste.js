var testeState = {
	create: function(){
        var logo=game.add.sprite(0, game.world.y, 'logoTetris');
        logo.scale.setTo(1.0,1.35);
	/*	
		}
		
		if(game.global.highScore > localStorage.getItem('labirinto_highScore')){
			localStorage.setItem('labirinto_highScore',game.global.highScore);
		} else {
			game.global.highScore = localStorage.getItem('labirinto_highScore');
		}
		
		var txtHighScore = game.add.text(game.world.centerX,350,'HIGH SCORE: ' + game.global.highScore,{font:'20px emulogic',fill:'#D26111'});
			txtHighScore.anchor.set(.5);
			txtHighScore.alpha = 0;
		
	
		var txtLabirinto = game.add.text(game.world.centerX,150,'LABIRINTO',{font:'40px emulogic',fill:'#fff'});
			txtLabirinto.anchor.set(.5);
			
		var txtPressStart = game.add.text(game.world.centerX,550,'PRESS START',{font:'20px emulogic',fill:'#fff'});
			txtPressStart.anchor.set(.5);
			
		game.add.tween(txtPressStart).to({y:250},1000).start();
		
		game.time.events.add(1000,function(){
			game.add.tween(txtHighScore).to({alpha:1},500).to({alpha:0},500).loop().start();
		
			var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
				enterKey.onDown.addOnce(this.startGame,this);
		},this);
        */
        
        var txtPushStart = game.add.text(240,427,'PUSH START',{font: '30px MartelSans', fill:'#ffffff'});
			txtPushStart.anchor.set(.5);
        var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
				enterKey.onDown.addOnce(this.startGame,this);
	},
	
	startGame: function(){
        
		game.state.start('menu');
        
	}
};
