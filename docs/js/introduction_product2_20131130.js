(function(){

    /*  Copy of related_product.js
    ===================================*/

    $(function(){
        $.fn.seriesList = function(){

            return this.each(function(i){

                var self = $(this),
                    containerWrap = self.find('div.showCase_intro2'),
                    container = containerWrap.find('div.showCaseInner_intro2'),
                    items = container.find('dl'),
                    pageContanier = self.find('div.pagenum_intro2');
                currentPage_intro2 = self.find('div.pagenum_intro2').find('span.current_intro2'),
                    totalPage_intro2 = self.find('div.pagenum_intro2').find('span.total_intro2'),
                    w_wrap_intro2 = 0,
                    w_items_intro2 = items.eq(0).outerWidth(true),
                    cntItem_intro2 = 0,
                    cntPage_intro2 = 0;
                mgnR_intro2 = 0,
                    mgn_container_intro2 = 0,
                    pageIdx_intro2 = 1,
                    btnPrev_intro2 = self.find('li.recommendBack_intro2'),
                    btnNext_intro2 = self.find('li.recommendNext_intro2');

                exe_intro2 = {

                    _init_intro2 : function(){
                        pageIdx_intro2 = 1;
                        mgn_container_intro2 = 0;
                        items.css('marginRight', 0);
                        container.css('marginLeft', 0);
                        items.removeClass('first');
                        w_wrap_intro2 = containerWrap.width();

                        cntItem_intro2 = Math.floor(w_wrap_intro2 / w_items_intro2);
                        cntPage_intro2 = Math.ceil(items.size() / cntItem_intro2);
                        mgnR_intro2 = w_wrap_intro2 - (w_items_intro2 * cntItem_intro2);


                        container.width(items.size() * w_items_intro2 + mgnR_intro2 * cntPage_intro2);

                        if(cntPage_intro2 > 1){
                            pageContanier.show();
                            btnPrev_intro2.show();
                            btnNext_intro2.show();
                        }

                        currentPage_intro2.text(pageIdx_intro2);
                        totalPage_intro2.text(cntPage_intro2);


                        exe_intro2._align_intro2();

                        container.show();
                    },

                    _align_intro2 : function(){
                        var j_2 = 1;
                        items.each(function(i_2){
                            if (i_2 === (cntItem_intro2 * j_2) -1) {
                                $(this).css('marginRight', mgnR_intro2 + 'px');
                                j_2 ++;
                            }
                            if (i_2 === 0 || i_2 % cntItem_intro2 === 0) {
                                $(this).addClass('first');
                            }
                        });
                    },

                    _carousel_intro2 : function(flg){
                        var d = (flg)? -1 : 1;
                        pageIdx_intro2 = (flg)? pageIdx_intro2 + 1: pageIdx_intro2 - 1;


                        container.fadeOut('fast', function(){
                            if(pageIdx_intro2 > cntPage_intro2){
                                $(this).css('marginLeft', '0px');
                                pageIdx_intro2 = 1;
                            } else if (pageIdx_intro2 === 0) {
                                $(this).css('marginLeft', -(w_wrap_intro2 * (cntPage_intro2 - 1)) + 'px');
                                pageIdx_intro2 = cntPage_intro2;
                            } else {
                                $(this).css('marginLeft', mgn_container_intro2 + (d * w_wrap_intro2) + 'px');
                            }

                            currentPage_intro2.text(pageIdx_intro2);
                            mgn_container_intro2 = parseInt(container.css('marginLeft')),
                                $(this).fadeIn('slow');
                        });
                    }

                };

                $(window).bind('load resize', function(){
                    exe_intro2._init_intro2();
                });

                btnPrev_intro2.find('a').click(function(){
                    exe_intro2._carousel_intro2(false);
                    return false;
                });

                btnNext_intro2.find('a').click(function(){
                    exe_intro2._carousel_intro2(true);
                    return false;
                });
            });

        };

        if(typeof document.body.style.minHeight == "undefined"){
            $('#introductionItems2').hide();
        } else {
            $('#introductionItems2').seriesList();
        }
    });


})(jQuery);