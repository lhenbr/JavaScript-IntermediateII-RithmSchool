$(function () {
    let $gifArea = $("gif-area");
    let $searchInput = $("#search-form")

    $("form").on("submit", function (e) {
        e.preventDefault();
        let searchTerm = $searchInput.val();
        $searchInput.val("");
        $.get(
            "http://api.giphy.com/v1/gifs/search",
            {
                q: searchTerm,
                api_key: "dc6zaTOxFJmzC"
            }
        ).then(function (res) {
            let numResults = res.data.length;
            if (numResults) {
                let randonIdx = Math.floor(Math.random() * numResults);
                let $newCol = $("<div>", { class: "col-md-4 col-12 mb-4" });
                let $newGif = $("<img>", {
                    src: res.data[randomIdx].images.original.url,
                    class: "w-100"
                });
                $newCol.append($newGif);
                $gifArea.append($newCol);
            }
        });
    });
    $("#remove").on("click", function () {
        $gifArea.empty();
    });
});