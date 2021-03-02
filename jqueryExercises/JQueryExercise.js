//https://www.rithmschool.com/courses/intermediate-javascript-part-2/jquery-exercises
//1
$(document).ready(function () {
    console.log("Let's get ready to party with jQuery!");
    //2
    $("article img").addClass("image-center");
    //3
    $("article p:last-child").remove();
    //4
    $("#title").css("font-size", Math.random() * 100);
    //5
    let $li = $("<li></li>").text("Predella é foda");
    $("ol").append($("<li>", { text: "I can add to lists with jQueryy!" }));
    //6
    $("aside").empty().append($("<p>", { text: "Sorry about that list :(" }));
    //7
    let $color = $('input.form-control')
    $color.on("input", () => {
        $("body").css("background-color", `rgb(${$color.eq(0).val()},${$color.eq(1).val()},${$color.eq(2).val()})`);
    });
    //8
    $("img").on("click", (e) => {
        $(e.target).css("display", "none");
    });
});