$(document).ready(function() {
    $("#btn1").click(function(e) {
        e.preventDefault();
        $("#p1").addClass("style1");
    });

    $("#btn2").click(function(e) {
        e.preventDefault();
        $("#p2").addClass("style1 style2");
    });
    $("#btn3").click(function(e) {
        e.preventDefault();
        $("#p3").toggleClass("style1 style2");
    });

    $("#btn4").click(function(e) {
        e.preventDefault();
        $("#p4").text("这是修改后的段落内容。");
    });

    $("#btn5").click(function(e) {
        e.preventDefault();
        $("#i").val("极客学院");
    });

    $("#btn6").click(function(e) {
        e.preventDefault();
        $("#aid").text("360导航").attr({
            "href": "https://hao.360.com/?a1004",
            "title": "hello"
        });
    });

    $("#btn7").click(function(e) {
        e.preventDefault();
        $("#p5").text(function(i, ot) {
            return "old: " + ot + ", new: 这是新的内容";
        });
    });

});