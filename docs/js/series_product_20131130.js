(function(){

    $(function(){
        $.fn.seriesList = function(){

            return this.each(function(i){

                var self = $(this),
                    containerWrap = self.find('div.showCase_series'),
                    container = containerWrap.find('div.showCaseInner_series'),
                    items = container.find('dl'),
                    pageContanier = self.find('div.pagenum_series');
                currentPage_series = self.find('div.pagenum_series').find('span.current_series'),
                    totalPage_series = self.find('div.pagenum_series').find('span.total_series'),
                    w_wrap_series = 0,
                    w_items_series = items.eq(0).outerWidth(true),
                    cntItem_series = 0,
                    cntPage_series = 0;
                mgnR_series = 0,
                    mgn_container_series = 0,
                    pageIdx_series = 1,
                    btnPrev_series = self.find('li.recommendBack_series'),
                    btnNext_series = self.find('li.recommendNext_series');

                exe_series = {

                    _init_series : function(){
                        pageIdx_series = 1;
                        mgn_container_series = 0;
                        items.css('marginRight', 0);
                        container.css('marginLeft', 0);
                        items.removeClass('first');
                        w_wrap_series = containerWrap.width();

                        cntItem_series = Math.floor(w_wrap_series / w_items_series);
                        cntPage_series = Math.ceil(items.size() / cntItem_series);
                        mgnR_series = w_wrap_series - (w_items_series * cntItem_series);


                        container.width(items.size() * w_items_series + mgnR_series * cntPage_series);

                        if(cntPage_series > 1){
                            pageContanier.show();
                            btnPrev_series.show();
                            btnNext_series.show();
                        }

                        currentPage_series.text(pageIdx_series);
                        totalPage_series.text(cntPage_series);


                        exe_series._align_series();

                        container.show();
                    },

                    _align_series : function(){
                        var j_2 = 1;
                        items.each(function(i_2){
                            if (i_2 === (cntItem_series * j_2) -1) {
                                $(this).css('marginRight', mgnR_series + 'px');
                                j_2 ++;
                            }
                            if (i_2 === 0 || i_2 % cntItem_series === 0) {
                                $(this).addClass('first');
                            }
                        });
                    },

                    _carousel_series : function(flg){
                        var d = (flg)? -1 : 1;
                        pageIdx_series = (flg)? pageIdx_series + 1: pageIdx_series - 1;


                        container.fadeOut('fast', function(){
                            if(pageIdx_series > cntPage_series){
                                $(this).css('marginLeft', '0px');
                                pageIdx_series = 1;
                            } else if (pageIdx_series === 0) {
                                $(this).css('marginLeft', -(w_wrap_series * (cntPage_series - 1)) + 'px');
                                pageIdx_series = cntPage_series;
                            } else {
                                $(this).css('marginLeft', mgn_container_series + (d * w_wrap_series) + 'px');
                            }

                            currentPage_series.text(pageIdx_series);
                            mgn_container_series = parseInt(container.css('marginLeft')),
                                $(this).fadeIn('slow');
                        });
                    }

                };

                $(window).bind('load resize', function(){
                    exe_series._init_series();
                });

                btnPrev_series.find('a').click(function(){
                    exe_series._carousel_series(false);
                    return false;
                });

                btnNext_series.find('a').click(function(){
                    exe_series._carousel_series(true);
                    return false;
                });
            });

        };

        if(typeof document.body.style.minHeight == "undefined"){
            $('#seriesItems').hide();
        } else {
            $('#seriesItems').seriesList();
        }
    });



    /*  Checkboxes Controller
     ===================================*/
    $(function(){
        var checkAll = $('#seriesCheckAll');
        var checkBoxes = $('.showCaseInput_series');
        var len = checkBoxes.length;

        var seriesCheckAllLink = $('.seriesCheckAll_link');
        var seriesClearAllLink = $('.seriesClearAll_link');

        checkAll.change(function(){;
            if(checkAll.attr('checked')){
                changeCheckAll(true);
            } else {
                changeCheckAll(false);
            }
        });
        checkBoxes.change(function(){

            buttonDefault();

            if(this.checked){
                var count = 0;
                for(var i=0; i<len; i++){
                    if(checkBoxes[i].checked){
                        count ++;
                    }
                }
                if(count === len){
                    checkAll[0].checked = true;
                }
            } else {
                checkAll[0].checked = false;
            }
        });

        function buttonDefault(){
            $('.seriesItemsAddCartButton_added').removeClass('seriesItemsAddCartButton_added');
        }

        seriesCheckAllLink.click(function(e){
            e.preventDefault();
            changeCheckAll(true);
        });
        seriesClearAllLink.click(function(e){
            e.preventDefault();
            changeCheckAll(false);
        });

        var changeCheckAll = function(bool){
            buttonDefault();
            checkAll[0].checked = bool;
            checkBoxes.each(function(){
                this.checked = bool;
            });
        };

    });

})(jQuery);