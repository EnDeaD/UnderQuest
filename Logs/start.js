var Start = {
    preload: function() {
        game.load.image('dialoge', 'assets/dialoge1.png');
    },
    text1: null,
    text2: null,
    text3: null,
    text4: null,
    dialoge: null,
    create: function() {
        this.dialoge = game.add.sprite(0, 0, 'dialoge');
        this.dialoge.scale.setTo(1)
        this.text1 = game.add.text(75, 40, '* Вы - юная пони, просыпаетесь в незнакомом вам месте.', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text2 = game.add.text(75, 80, 'Ваша задача: выбраться из этого дома и, по возможности,', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text3 = game.add.text(75, 120, 'узнать все его тайны...', { fontSize: '20px', fill: '#FFF', font: 'bold 20pt sans' });
        this.text4 = game.add.text(75, 150, '(Старайтесь найти все секреты, чтобы узнать истину...)', { fontSize: '20px', fill: '#090909', font: 'bold 20pt sans' });
        this.dialoge.inputEnabled = true;
        this.dialoge.events.onInputDown.add(this.clicked1);
    },
    update: function() {

    },
    clicked1: function() {
        game.state.start('room1');
    }
}
