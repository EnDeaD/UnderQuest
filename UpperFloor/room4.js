var Room4 = {
    preload: function () {
        game.load.image('trigger', 'triggers/shine.png');
        game.load.image('ttrigger', 'triggers/test_trigger.png');
        game.load.image('htrigger', 'triggers/trigger.png');
        game.load.image('exitd', 'triggers/ardo.png');
        game.load.image('lock', 'triggers/lock.png');
        game.load.image('bg', 'assets/monochrome_kitchen_room.png');
        game.load.image('dialoge', 'assets/dialoge1.png');

    },
    door: null,
    background: null,
    name: null,
    create: function () {
        game.stage.backgroundColor = "#4a4a4a";
        this.background = game.add.sprite(75, 111, 'bg');
        this.background.scale.setTo(3, 3);

        this.arrow = game.add.sprite(245, game.world.height-65, 'exitd');
        this.arrow.scale.setTo(0.5);
        this.backdoor = game.add.sprite(200, game.world.height-75, 'htrigger');
        this.backdoor.width = 150
        this.backdoor.height = 75
        this.backdoor.inputEnabled = true;
        this.backdoor.events.onInputDown.add(this.backRoom);

        this.btn = game.add.sprite(150, 230, 'ttrigger');
        this.btn.width = 85
        this.btn.height = 35
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
        
        this.btn = game.add.sprite(150, 270, 'ttrigger');
        this.btn.width = 85
        this.btn.height = 85
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
        
        this.btn = game.add.sprite(255, 255, 'ttrigger');
        this.btn.width = 85
        this.btn.height = 100
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
        
        this.btn = game.add.sprite(300, 165, 'ttrigger');
        this.btn.width = 135
        this.btn.height = 65
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
        
        this.btn = game.add.sprite(345, 255, 'ttrigger');
        this.btn.width = 175
        this.btn.height = 100
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
        
        this.btn = game.add.sprite(450, 165, 'ttrigger');
        this.btn.width = 65
        this.btn.height = 75
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
        
        this.btn = game.add.sprite(500, 240, 'ttrigger');
        this.btn.width = 75
        this.btn.height = 110
        this.btn.inputEnabled = true;
        this.btn.events.onInputDown.add(this.nothing);
    },
    update: function () {

    },
    backRoom:function(){
        game.state.start('room3');
    },
    nothing: function () {
        Room4.dialoge = game.add.sprite(0, 0, 'dialoge');
        Room4.dialoge.scale.setTo(1)
        Room4.text1 = game.add.text(75, 40, '* Похоже, что здесь ничего интересного...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        Room4.dialoge.inputEnabled = true;
        Room4.dialoge.events.onInputDown.add(Room4.delete);
        floor1un = true
    },
    delete:function(){
        Room4.dialoge.kill();
        Room4.text1.kill();
        Room4.dialoge.kill();
        Room4.text1.kill();
    },
}
