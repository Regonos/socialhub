function shuffleElements(parentElement){
    var divs = parentElement.children();
    while (divs.length) {
        parentElement.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

$(document).ready(function () {
    console.log("Document ready!");

    $(".social-hub").each(function () {

        var columns = $(this).attr("columns");
        var tileSize = $(this).attr("tile-size");
        var randomize = $(this).attr("randomize-tiles");

        if(randomize) {
            shuffleElements($(this));
        }

        $(this).removeAttr("columns")
            .removeAttr("tile-size")
            .css({'width': 'calc(' + tileSize + '*' + columns + ')'});

        $(this).children(".tile").each(function () {
            var imageLocation = $(this).attr("front-face-image");
            var tileColor = $(this).attr("tile-color")

            var frontFace = $('<p class="front face color-invert"></p>')
                .css({
                    'background-image': 'url(' + imageLocation + ')',
                    'background-size': 'calc(' + tileSize + '/2) auto'
                });

            var socialIcon = $('<div class="social-icon">')
                .css({'width': tileSize, 'height': tileSize});


            var socialIconFace = $('<div id="social-icon-face"></div>')
                .css({'background-color': tileColor});

            $(this).wrap(socialIcon.append(socialIconFace))
                .css({
                    'line-height': tileSize,
                    'font-size': 'calc(' + tileSize + '/8)'
                })
                .before(frontFace)
                .removeClass("tile")
                .addClass("back")
                .addClass("face")
                .removeAttr("front-face-image")
                .removeAttr("tile-color");
        });
    });
});