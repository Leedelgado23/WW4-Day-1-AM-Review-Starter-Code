// variables
let horror = "sinister";
let Drama = " The fault in our stars";
let Anime = " Blue Period";
// .val() and console.log()
$("button").click(function() {
    let genre = $("input").val();
    console.log(genre);
    $(".recs").text(genre);
    if (genre === "Drama") {
        $(".recs").text(Drama);
    } else if (genre === "horror") {
        $(".recs").text(horror);
    } else if (genre === "anime") {
        $(".recs").text("anime");
    } else {}
});


// conditionals