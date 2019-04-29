$(function() {
    $("#clickbtn1").click(function() {
        $("p").hide();
    });

    $("#clickbtn2").click(function() {
        $("#p1").css({ color: "red" });
    });

    $("h1").hover(
        function() {
            $(this).css({ color: "red" });
        },
        function() {
            $(this).css({ color: "black" });
        }
    );

    $("#huabtn").click(function() {
        $("#huakuai").slideToggle(2000);
    });

    $("#text").click(function() {
        let text = $("#p1").text();
        $("#contentBox").text(function(i, text) {
            return "旧文本：" + text + "," + "索引" + i + ":" + "段落";
        });
    });
    $("#html").click(function() {
        let html = $(".box1").html();
        $("#contentBox").html(html);
    });

    $("#p1:nth-child(4)").css("background", "red");
});