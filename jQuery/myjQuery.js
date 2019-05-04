$.myjq = function() {
    alert("Hello my jQuery");
};

$.fn.myjq = function() {
    $(this).text("Hello");
};