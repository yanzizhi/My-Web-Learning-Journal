$(document).ready(function() {
    $("#a_btn").button();

    $("#div").draggable();

    $("#div1").draggable();
    $("#div2").droppable();
    $("#div2").on("drop", function(event, ui) {
        // alert("事件发生了")；
        $("#div2").text("drop事件");
    });

    $("#div3").resizable();

    $("#btn").button();
    $("#selector").selectable();
    $("#btn").on("click", function() {
        if ($("#right").hasClass("ui-selected")) {
            alert("你答对了。");
        } else {
            alert("你答错了。");
        }
    });


    $("#sort").sortable();
});