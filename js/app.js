(function () {
    var randPokemon = Math.floor(Math.random() * 769);
    $.getJSON(`http://pokeapi.co/api/v2/pokemon/${randPokemon}`, detailAction)
        .done(function () {
            console.log("Second success");
        })
        .fail(function () {
            console.log("fail");
        })
        .always(function () {
            console.log("complete");
        });

    function detailAction(pokemon) {
        console.log(pokemon);
        var $body = $("body");
        var allMoves = pokemon.moves;
        var moves = [];
        var randIndex;
        for (var i = 0; i < 4; i++) {
            randIndex = Math.floor(Math.random() * allMoves.length);
            moves.push(allMoves[randIndex]);
            allMoves.splice(randIndex, 1);
        }

        $body.append("<div>" + pokemon.name + "</div>");
        $body.append("<img src='" + pokemon.sprites.front_default + "'/>");
        $body.append("<ul></ul>");
        $.each(moves, function (index, move) {
            $body.find("ul").append("<li>" + move.move.name + "</li>");
        });
    }


}());