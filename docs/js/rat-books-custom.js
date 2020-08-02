(function (){
  var url = location.host + location.pathname;
  if (url === 'books.rakuten.co.jp/') {
    jQuery('#ratServiceId').attr('value',1);
  } else if (/^books.rakuten.co.jp\/r[b|d|k]\//.test(url)||/^ts.books.rakuten.co.jp\/r[b|d|k]\//.test(url)) {
    jQuery('#ratServiceId').attr('value',2);
  } else if (/^books.rakuten.co.jp\/search\/?/.test(url)) {
    jQuery('#ratServiceId').attr('value',4);
  } else if (/^books.rakuten.co.jp\/e-book\//.test(url)||/^books.rakuten.co.jp\/event\/e-book\//.test(url)) {
    jQuery('body').prepend('<form class="ratForm" name="ratForm" id="ratForm" style="display:none;"><input type="hidden" name="rat" id="ratAccountId" value="3"><input type="hidden" name="rat" id="ratServiceId" value="5"><input type="hidden" name="rat" id="ratShopUrl" value="rakutenkobo-ebooks"></form>');
  } else {
    jQuery('body').prepend('<form class="ratForm" name="ratForm" id="ratForm" style="display:none;"><input type="hidden" name="rat" id="ratAccountId" value="3"><input type="hidden" name="rat" id="ratServiceId" value="5"></form>');
  }
})();