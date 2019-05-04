/* 
append
prepend
before
after
*/

$(document).ready(function() {
    $("#btn1").click(function(e) {
        e.preventDefault();
        $("#p1").append("<a href='https://www.shiyanlou.com/'>新插入的内容</a>");
    });
});

function appendText() {
    let text1 = "<P>第一种添加元素方法</P>";
    let text2 = $("<p></p>").text("第二种采用jQuery添加元素的方法");
    let text3 = document.createElement("p");
    text3.innerHTML = "第三种采用JS创建元素";
    $("body").append(text1, text2, text3);
}