/*global $:false,jQuery:false*/

(function(){

    $(function(){
        "use strict";

        $('.rankingBoxInactive').hide();

        var rankingTab_eBook = $('#rankingTab_eBook');
        var rankingTab_paper = $('#rankingTab_paper');

        var rankingEBooks = $('#rankingEBooks');
        var rankingPaperBooks = $('#rankingPaperBooks');

        rankingTab_eBook.click(function(e){
            e.preventDefault();
            $(this).removeClass('rankingTabInactive');
            $(this).addClass('rankingTabActive');
            rankingTab_paper.removeClass('rankingTabActive');
            rankingTab_paper.addClass('rankingTabInactive');
            rankingPaperBooks.hide();
            rankingEBooks.show();
        });
        rankingTab_paper.click(function(e){
            e.preventDefault();
            $(this).removeClass('rankingTabInactive');
            $(this).addClass('rankingTabActive');
            rankingTab_eBook.removeClass('rankingTabActive');
            rankingTab_eBook.addClass('rankingTabInactive');
            rankingEBooks.hide();
            rankingPaperBooks.show();
        });
    });

})(jQuery);