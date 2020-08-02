(function(){

    /*  Copy of related_product.js
    ===================================*/

    $(function(){
        $.fn.seriesList = function(){

            return this.each(function(i){

                var self = $(this),
                    containerWrap = self.find('div.showCase_intro'),
                    container = containerWrap.find('div.showCaseInner_intro'),
                    items = container.find('dl'),
                    pageContanier = self.find('div.pagenum_intro');
                currentPage_intro = self.find('div.pagenum_intro').find('span.current_intro'),
                    totalPage_intro = self.find('div.pagenum_intro').find('span.total_intro'),
                    w_wrap_intro = 0,
                    w_items_intro = items.eq(0).outerWidth(true),
                    cntItem_intro = 0,
                    cntPage_intro = 0;
                mgnR_intro = 0,
                    mgn_container_intro = 0,
                    pageIdx_intro = 1,
                    btnPrev_intro = self.find('li.recommendBack_intro'),
                    btnNext_intro = self.find('li.recommendNext_intro');

                exe_intro = {

                    _init_intro : function(){
                        pageIdx_intro = 1;
                        mgn_container_intro = 0;
                        items.css('marginRight', 0);
                        container.css('marginLeft', 0);
                        items.removeClass('first');
                        w_wrap_intro = containerWrap.width();

                        cntItem_intro = Math.floor(w_wrap_intro / w_items_intro);
                        cntPage_intro = Math.ceil(items.size() / cntItem_intro);
                        mgnR_intro = w_wrap_intro - (w_items_intro * cntItem_intro);


                        container.width(items.size() * w_items_intro + mgnR_intro * cntPage_intro);

                        if(cntPage_intro > 1){
                            pageContanier.show();
                            btnPrev_intro.show();
                            btnNext_intro.show();
                        }

                        currentPage_intro.text(pageIdx_intro);
                        totalPage_intro.text(cntPage_intro);


                        exe_intro._align_intro();

                        container.show();
                    },

                    _align_intro : function(){
                        var j_2 = 1;
                        items.each(function(i_2){
                            if (i_2 === (cntItem_intro * j_2) -1) {
                                $(this).css('marginRight', mgnR_intro + 'px');
                                j_2 ++;
                            }
                            if (i_2 === 0 || i_2 % cntItem_intro === 0) {
                                $(this).addClass('first');
                            }
                        });
                    },

                    _carousel_intro : function(flg){
                        var d = (flg)? -1 : 1;
                        pageIdx_intro = (flg)? pageIdx_intro + 1: pageIdx_intro - 1;


                        container.fadeOut('fast', function(){
                            if(pageIdx_intro > cntPage_intro){
                                $(this).css('marginLeft', '0px');
                                pageIdx_intro = 1;
                            } else if (pageIdx_intro === 0) {
                                $(this).css('marginLeft', -(w_wrap_intro * (cntPage_intro - 1)) + 'px');
                                pageIdx_intro = cntPage_intro;
                            } else {
                                $(this).css('marginLeft', mgn_container_intro + (d * w_wrap_intro) + 'px');
                            }

                            currentPage_intro.text(pageIdx_intro);
                            mgn_container_intro = parseInt(container.css('marginLeft')),
                                $(this).fadeIn('slow');
                        });
                    }

                };

                $(window).bind('load resize', function(){
                    exe_intro._init_intro();
                });

                btnPrev_intro.find('a').click(function(){
                    exe_intro._carousel_intro(false);
                    return false;
                });

                btnNext_intro.find('a').click(function(){
                    exe_intro._carousel_intro(true);
                    return false;
                });
            });

        };

        if(typeof document.body.style.minHeight == "undefined"){
            $('#introductionItems').hide();
        } else {
            $('#introductionItems').seriesList();
        }
    });


})(jQuery);