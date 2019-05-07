$(document).ready(function() {
    // ".main>a"子元素选择器，仅选择.mian的直接子元素
    $(".main>a").click(function() {
        // alert("点击菜单");
        let ulNode = $(this).next("ul");
        // if (ulNode.css("display") == "none") {
        //     ulNode.css("display", "block");
        // } else {
        //     ulNode.css("display", "none");
        // }
        // ulNode.toggle(500);

        ulNode.slideToggle(500);
    });

    $(".hmain").hover(function() {
        // over
        let ulNode = $(this).children("ul");
        ulNode.slideDown();
    }, function() {
        // out
        let ulNode = $(this).children("ul");
        ulNode.slideUp();
    });
});