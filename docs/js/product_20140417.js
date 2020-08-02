// JavaScript Document
  $(function() {
    minmax();     // window
    smartRollover();  // point
    getGBS();     // google
    setUrl();     // url
  });

function minmax(){
    if(navigator.userAgent.indexOf("MSIE 6.0")==-1)
        return;

    var minWidth = 950;
    var maxWidth = 1600;

    var windowScope = $('html > body');
    var scope = $('#contents',windowScope);
    var minmaxWidth = scope.outerWidth();
    var otherWidth = windowScope.width() - minmaxWidth;

    if(minmaxWidth < minWidth)
        scope.width(minWidth);
    else if(minmaxWidth > maxWidth)
        scope.width(maxWidth);

    $(window).resize(function(){
        var thisWidth = windowScope.width() - otherWidth;
        if(thisWidth < minWidth)
            scope.width(minWidth);
        else if(thisWidth > maxWidth)
            scope.width(maxWidth);
        else
            scope.width(thisWidth);
    });
}

function smartRollover() {
    var point = $('#pointClub img[src*="_mouseoff."]');
    point.mouseover(function(){
        point.attr('src',point.attr('src').replace('_mouseoff.', '_mouseover.'));
    });
    point.mouseout(function(){
        point.attr('src',point.attr('src').replace('_mouseover.', '_mouseoff.'));
    });
}

function getGBS() {
    var isbn = $('.googlePreview').attr('id') ;
    var query = "//books.google.com/books?jscmd=viewapi&bibkeys=" + isbn + "&callback=GBScallback";
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = query;
    $('head').append(script);
}
function GBScallback(GBSBookInfo) {
    for (var isbn in GBSBookInfo) {
        var data = GBSBookInfo[isbn];
        if(data.preview == "full" || data.preview == "partial") {
            $('.googlePreview').find('a').each(function(idx,obj){
                $(obj).attr('href',$(obj).attr('href')+"#"+isbn);
            });
            $('.googlePreview').attr('style','display:inline-block;');
        }
    }
}

function setUrl(){
    $('input.url').focus(function(){
        $(this).select();
    });
}

$(function(){
    $('#purchaseBox').find('dl.openToggleCaution').children('dt').click(function(){
        $(this).toggleClass('open').next().toggle();
    });
    $('#purchaseKoboBox').find('.notes').children('dt').click(function(){
        $(this).toggleClass('open').next().toggle();
    });
});

$(function(){
  if (navigator.userAgent.indexOf('iPhone') > 0 ||
    navigator.userAgent.indexOf('iPad') > 0 ||
    navigator.userAgent.indexOf('iPod') > 0 ||
    navigator.userAgent.indexOf('Android') > 0){
      $("*[name='adtnLauncher']").remove();
  }
});

//click asuraku area and fadein
$(function() {

    $('.js-asuraku-click').on('click', function() {

        $( '.js-asurakuArea' ).css ({
            left: - 253 + 'px'
        }).fadeIn( 'fast' );

        $( '#mask' ).width($(document).width());
        $( '#mask' ).height($(document).height());
        $( '#mask' ).show();

        $( '.js-kobo-preorder-area' ).hide();
    });

    // hide by x
    $('.js-icon-cross').on('click', function() {
        $( '#mask' ).hide(),
        $( '.js-asurakuArea' ).hide();
    });

    //hide by clicking other area
    $('#mask').on('click', function() {
        $( '#mask' ).hide(),
        $( '.js-asurakuArea' ).hide();
    });

});


//click kobo detail area and fadein
$(function() {

    //package & kobo item page
    $('.in-package-page .kobo-preorder-header').on('click', function() {

        var y = $('.wrapper').offset().top,
            ypos = $('.purchase-box-kobo-inner').offset().top - y;

        $( '.js-kobo-preorder-area' ).css ({
            top: ypos - 1 + 'px',
            left: - 607 + 'px'
        }).fadeIn( 'fast' );

        $( '#mask' ).width($(document).width());
        $( '#mask' ).height($(document).height());
        $( '#mask' ).show();

        $( '.js-asurakuArea' ).hide();
    });

    //kobo item only page
    $('.ebook-only .kobo-preorder-header').on('click', function() {

        var y = $('.wrapper').offset().top,
            ypos = $('.purchaseBoxMain').offset().top - y;

        $( '.js-kobo-preorder-area' ).css ({
            top: ypos - 2 + 'px',
            left: - 607 + 'px'
        }).fadeIn( 'fast' );

        $( '#mask' ).width($(document).width());
        $( '#mask' ).height($(document).height());
        $( '#mask' ).show();

        $( '.js-asurakuArea' ).hide();
    });

    // hide by x
    $('.js-icon-cross').on('click', function() {
        $( '#mask' ).hide(),
        $( '.js-kobo-preorder-area' ).hide();
    });

    //hide by clicking other area
    $('#mask').on('click', function() {
        $( '#mask' ).hide(),
        $( '.js-kobo-preorder-area' ).hide();
    });

});




