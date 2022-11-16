(function($) {
    "use strict";
    $('.js-scroll-trigger').click(function() {
        var target = $(this);
        target.data('scrollparam')
        $("html,body").animate({
            scrollTop: $('#' + target.data('scrollparam')).offset().top
        }, {
            queue: false
        });
    })
})(jQuery);