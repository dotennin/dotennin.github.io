function addToCart() {

  var $shopId = $('#preview_shop_id').val();
  var $itemId = $('#preview_item_id').val();
  var $addToCartBtn = $('#btn-addToCart');
  var addToCartApi = "//api.books.step.rakuten.co.jp/wrapper/1.0/basket/addItemAsync?callback=addToCartCallback&appCode=browser&itemId=" + $itemId + "&shopId=" + $shopId;

  if ($addToCartBtn.hasClass('itemAdded')){

    return;

  } else {

    s.lidTrack('item-shougakukan-cart-01');

    $.ajax({
    url: addToCartApi,
    dataType: 'jsonp',
    timeout: 10000,
    fail: function(){
      hideSpinner();
      return;
    }
    });
  }
}

function addToCartCallback(data) {

  var $addToCartBtn = $('#btn-addToCart');
  var status = data.statusCode;

  hideSpinner();

  if (status === '200') {

      $addToCartBtn.css({
        background: '#fffff3',
        border: '1px solid #666666',
        color: ' #666666'
      });

      $addToCartBtn.find('span').text('追加しました');
      $addToCartBtn.find('i').removeClass('icon-add-cart');
      $addToCartBtn.find('i').addClass('icon-check');
      $addToCartBtn.addClass('itemAdded');

  } else {

    $addToCartBtn.popover({
      content: data.statusMessage,
      placement: 'right'
    });

    $addToCartBtn.popover('show');

    setTimeout(function() {
    $addToCartBtn.popover('destroy');
    }, 3000);
  }
}

function showSpinner() {
  $("#previewer").after('<div class="spinnerClass"><img src="//image.books.rakuten.co.jp/books/img/instantpreview/loader.gif"></div>');
}

function hideSpinner() {
  $(".spinnerClass").remove();
}
