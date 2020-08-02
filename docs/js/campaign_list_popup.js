(function($) {
    var scope = $('.benefitSection'),
        popupBtn = scope.find('.popupBtn');

    popupBtn.on('mouseover', function() {
        var conditions = $(this).data('contents');
        $(this).after('<div class="popup">'+conditions+'</div>');
    }).on('mouseleave', function() {
        $(this).next('.popup').remove();
    });
})(jQuery);
