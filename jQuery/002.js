$(document).ready(function() {
    $("#btn1").click(function() {
        // text()方法用于获取文本内容
        alert("text: " + $("#text").text());
    });

    $("#btn2").click(function(e) {
        e.preventDefault();
        alert("html: " + $("#text").html());
    });

    // 获取输入框的内容
    $("#btn3").click(function() {
        // text()方法用于获取文本内容
        alert("input: " + $("#it").val());
    });

    // change()方法
    $("#it").change(function(e) {
        e.preventDefault();
        console.log(e);
        console.log(e.target.defaultValue);
        console.log(e.target.value);
        // $("textContainer").text(textString);
    });
});