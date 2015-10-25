var app = playground({

    width: 400,
    height: 250,
    scale: 2,

    game: {
        started: false,
        score: 0,
        lastY: -1,
        fin: false
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
        this.loadSounds("splash", "toilet");
        this.text = "Pömpel to Start! (but not too hard)"
    },

    ready: function() {

    },

    render: function() {
        this.layer
            .clear("#000")
            .font("18px Arial")
            .fillStyle("#FFF")
            .fillText(this.text, 20, 40);

        if (this.poempel.visible) this.layer.drawImage(this.images.poempel, this.poempel.x, this.poempel.y);
        if (this.water.visible) this.layer.drawImage(this.images.water, 285, 50);
        if (this.poo.visible) this.layer.drawImage(this.images.poo, 285, 50);

        this.layer.drawImage(this.images.toilet, 250, 50);
    },

    mousemove: function(event) {
        if (this.game.fin) return;
        var y = event.y - 75;
        this.poempel.y = y > 90 ? 90 : y;

        this.water.visible = y >= 90 && this.game.started;

        if (y >= 90 && this.game.lastY < 90) {
            if (this.gotPoo()) { //game over - yes it's random
                this.game.started = false;
                this.game.score = 0;
                this.poo.visible = true;
                this.water.visible = false;
                this.text = "Eww, you pömpled too hard :/\nPress Space";
                app.sound.play("toilet");
                this.game.fin = true;
            } else {
                this.game.started = true;
                this.game.score++;
                this.poo.visible = false;
                this.water.visible = true;
                this.text = "Score: " + this.game.score;
                app.sound.play("splash");
            }
        }

        this.game.lastY = y;
    },

    keydown: function(event) {

        if (event.key == "space") {
            this.game.fin = false;
            this.poo.visible = false;
            this.text = "Pömpel to Start! (but not too hard)"
        }

    },

    preferedAudioFormat: "mp3"

});