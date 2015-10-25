var app = playground({

    width: 400,
    height: 250,
    scale: 2,

    game: {
        started: false,
        score: 0,
        lastY: -1
    },

    poempel: {
        visible: true,
        x: 285,
        y: 10
    },

    water: {
        visible: false
    },

    poo: {
        visible: false
    },

    gotPoo: function() {
        return Math.floor(Math.random() * 60) <3; //aww
    },

    create: function() {
        this.loadImages("poempel", "toilet", "water", "poo");
        this.text = "Pömpel to Start! (but not too hard)"
    },

    ready: function() {

    },

    render: function() {
        this.layer
            .clear("#000")
            .font("24px Arial")
            .fillStyle("#FFF")
            .fillText(this.text, 20, 40);

        if (this.poempel.visible) this.layer.drawImage(this.images.poempel, this.poempel.x, this.poempel.y);
        if (this.water.visible) this.layer.drawImage(this.images.water, 285, 50);
        if (this.poo.visible) this.layer.drawImage(this.images.poo, 285, 50);

        this.layer.drawImage(this.images.toilet, 250, 50);
    },

    mousemove: function(event) {
        var y = event.y - 75;
        this.poempel.y = y > 90 ? 90 : y;

        if (y >= 90 && this.game.lastY < 90) {
            if (this.gotPoo()) { //game over - yes it's random
                this.game.started = false;
                this.game.score = 0;
                this.poo.visible = true;
                this.water.visible = false;
                this.text = "Eww, you pömpled too hard :/";
            } else {
                this.game.started = true;
                this.game.score++;
                this.water.visible = true;
                this.text = "Score: " + this.game.score;
            }
        } else {
            this.water.visible = false;
        }

        this.game.lastY = y;

        console.log(event.x);
    }

});