// ready()方法将一个函数作为参数，当文档加载完毕后执行这个函数。
$(document).ready(function() {
    // alert("文档加载完毕");
    // 选取p元素，并将其指定一个点击事件
    // click()事件以一个函数作为参数，当触发点击事件时，则执行这个函数
    // 点击事件为：选取当前点击的元素（通过传递参数this），并将其隐藏
    // $("p").click(function() { 
    // $(this).hide();
    // });

    // $("button").click(function() {
    //     $("p").text("p元素被修改了");
    // });
    // $("button").mouseenter(function(e) {
    //     e.preventDefault();
    //     $(this).hide();
    // });
    // $("button").mouseleave(function() {
    //     $(this).hide();
    // });

    // 添加绑定事件
    // $("#clickMe").bind("click", clickHandle1);
    // $("#clickMe").bind("click", clickHandle2);
    // 解除单个点击事件
    // $("#clickMe").unbind("click", clickHandle2);
    // 解除所有点击事件
    // $("#clickMe").unbind("click");

    // 新版本绑定事件，推荐使用
    // 使用on添加绑定事件
    // $("#clickMe").on("click", clickHandle1);
    // $("#clickMe").on("click", clickHandle2);
    // 使用off解除单个点击事件
    // $("#clickMe").off("click", clickHandle2);
    // 解除所有点击事件
    // $("#clickMe").off("click");

    // function clickHandle1(e) {
    //     console.log("clickHander1");
    // }

    // function clickHandle2(e) {
    //     console.log("clickHander2");
    // }

    // $("body").on("click", bodyHander);
    // $("div").on("click", divHander);

    // function bodyHander(event) {
    //     console.log("body");
    //     console.log(event);
    // }

    // function divHander(event) {
    //     event.stopPropagation();
    //     console.log("div");
    //     console.log(event);
    // }

    $("#clickMe").click(function() {
        // 自定义事件
        let e = jQuery.Event("MyEvent");
        $("#clickMe").trigger(e);

        $("#clickMe").on("MyEvent", function(event) {
            console.log(event);
        })
    });

});