let pb;
let MAX = 100;
let current = 0;

let valueSpan, slider;
$(document).ready(function() {
    $("#accordion").accordion();

    let autotags = ["iwen", "ime", "html", "css", "java", "ios", "javascript"];
    $('#tags').autocomplete({
        source: autotags
    });

    $("#datepicker").datepicker();

    $("#btn").button();


    $("#btn1").button().on("click", function() {
        $("#div").dialog();
    });

    $("#menu").menu({
        position: { at: "left bottom" }
    });

    pb = $("#pb");
    pb.progressbar({ max: 100 });
    setInterval(changepb, 100);

    // $("#slider").slider();
    slider = $("#slider");
    valueSpan = $("#span");
    // slider.slider({
    //     change: function(event, ui) {
    //         valueSpan.text(slider.slider("option", "value"));
    //     }
    // });
    slider.slider({
        slide: function(event, ui) {
            valueSpan.text(slider.slider("option", "value"));
        },
        step: 2
    });


    $("#input").spinner();
    $("#input").spinner("value", 10);
    $("#btn3").on("click", function() {
        alert($("#input").spinner("value"));
    });

    $("#tabs").tabs();


});

function changepb() {
    current++;
    if (current >= 100) {
        current = 0;
    }
    pb.progressbar("option", "value", current);
}