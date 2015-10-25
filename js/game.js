var app = playground({

    width: 400,
    height: 250,
    scale: 2,

    game: {
        score: 0
    },

    poempel: {
        x: 285,
        y: 10
    },

    water: {
        visible: false
    },

    create: function() {
        this.loadImages("poempel", "toilet", "water");
    },

    ready: function() {

    },

    render: function() {
        this.layer.clear("#000");

        this.layer.drawImage(this.images.poempel, this.poempel.x, this.poempel.y);
        if (this.water.visible) this.layer.drawImage(this.images.water, 285, 50);

        this.layer.drawImage(this.images.toilet, 250, 50);
    },

    mousemove: function(event) {
        var y = event.y - 75;
        this.poempel.y = y > 90 ? 90 : y;

        if (y >= 90) {
            this.game.score++;
            this.water.visible = true;
        } else {
            this.water.visible = false;
        }

        console.log(event.x);
    }

});