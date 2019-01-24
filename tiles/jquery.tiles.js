function shuffleElements(parentElement) {
    var divs = parentElement.children();
    while (divs.length) {
        parentElement.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
}

function randomColor() {
    return '#'+Math.random().toString(16).slice(-6);
}

function defaultIfUndefined(value, defaultValue) {
    return value === undefined ? defaultValue : value;
}

//DEFAULT VALUES SECTION
const DEFAULT_TILE_SIZE = "128px";
const DEFAULT_RANDOMIZATION = false;
const DEFAULT_ICON = "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg";
//END OF DEFAULT VALUES SECTION

$(document).ready(function () {
    console.log("Socialhub is ready! :)");

    $(".social-hub").each(function () {
        var tileSize = defaultIfUndefined($(this).attr("tile-size"), DEFAULT_TILE_SIZE);
        var randomize = defaultIfUndefined($(this).attr("randomize-tiles"), DEFAULT_RANDOMIZATION);

        if (randomize) {
            shuffleElements($(this));
        }

        $(this).removeAttr("columns")
            .removeAttr("tile-size")
            .css({'width': '100%'});

        $(this).children(".tile").each(function () {
            var imageLocation = defaultIfUndefined($(this).attr("front-face-image"), DEFAULT_ICON);
            var tileColor = defaultIfUndefined($(this).attr("tile-color"), randomColor());

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