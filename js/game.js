var app = playground({

    width: 400,
    height: 250,
    scale: 2,

    create: function() {
        this.loadImages("poempel", "toilet");
    },

    ready: function() {

    },

    render: function() {
        this.layer.clear("#000");
        this.layer.drawImage(this.images.poempel, 285, 10);
        this.layer.drawImage(this.images.toilet, 250, 50);
    }

});