var FirstMenu = {
    create: function() {
        var logo = game.add.sprite(0,0,'logoTetris')
        //logo.scale.setTo(0.8467,0.7199);

        var txtPushStart = game.add.text(240,400,'PUSH START', {font: '30px PixelEmulator', fill:'#F5F5F5'});
        txtPushStart.anchor.set(.5);
        var enterKey = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        enterKey.onDown.addOnce(this.startGame,this);
    },
    startGame: function(){
        game.state.start('Menu');
    }
};