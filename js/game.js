var app = playground({

    width: 400,
    height: 250,
    scale: 2,

    poempel: {
        x: 285,
        y: 10
    },

    create: function() {
        this.loadImages("poempel", "toilet");
    },

    ready: function() {

    },

    render: function() {
        this.layer.clear("#000");
        this.layer.drawImage(this.images.poempel, this.poempel.x, this.poempel.y);
        this.layer.drawImage(this.images.toilet, 250, 50);
    },

    mousemove: function(event) {
        var y = event.y - 75;
        this.poempel.y = y > 90 ? 90 : y;

        console.log(event.x);
    }

});