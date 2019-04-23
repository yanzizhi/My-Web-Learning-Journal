let jkcommon = {
    init: function() {
        this.lessImgShow();
    },
    stopEventBubble: function(event) {
        let e = event;
        if (e) {
            e.stopPropagation();
        }
    },
    lessImgShow: function() {
        $('.lessonimgbox').bind("mouseover", function(e) {
            let _pop = $(this).find('.img-pop');
            $(this).css({ border: "2px solid #1abc9c", width: "226px", height: "226px" });
            TweenMax.to(_pop, 0.5, { top: 0, ease: Bounce.easeOut });
            jkcommon.stopEventBubble(e);
        });

        $(document).bind("mouseover", function() {
            $('.lessonimgbox').css({ border: '0', width: "230px", height: "230px" });
            let _pop = $(this).find(".img-pop");
            TweenMax.to(_pop, 0.2, { top: 230, ease: Linear.easeNone });
        });
    }
};

$(function() {
    jkcommon.init();
});