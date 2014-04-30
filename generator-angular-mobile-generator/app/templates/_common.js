/*Array.prototype.repeat= function(what, L){
 while(L) this[--L]= what;
 return this;
}
*/
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function array_search(needle, haystack, argStrict) {
  //  discuss at: http://phpjs.org/functions/array_search/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  depends on: array
  //        test: skip
  //   example 1: array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
  //   returns 1: 'surname'
  //   example 2: ini_set('phpjs.return_phpjs_arrays', 'on');
  //   example 2: var ordered_arr = array({3:'value'}, {2:'value'}, {'a':'value'}, {'b':'value'});
  //   example 2: var key = array_search(/val/g, ordered_arr); // or var key = ordered_arr.search(/val/g);
  //   returns 2: '3'

  var strict = !! argStrict,
    key = '';

  if (haystack && typeof haystack === 'object' && haystack.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
    return haystack.search(needle, argStrict);
  }
  if (typeof needle === 'object' && needle.exec) { // Duck-type for RegExp
    if (!strict) { // Let's consider case sensitive searches as strict
      var flags = 'i' + (needle.global ? 'g' : '') +
        (needle.multiline ? 'm' : '') +
        (needle.sticky ? 'y' : ''); // sticky is FF only
      needle = new RegExp(needle.source, flags);
    }
    for (key in haystack) {
      if (needle.test(haystack[key])) {
        return key;
      }
    }
    return false;
  }

  for (key in haystack) {
    if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
      return key;
    }
  }

  return false;
}

    var agent = navigator.userAgent;      
    var isWebkit = (agent.indexOf("AppleWebKit") > 0);      
    var isIPad = (agent.indexOf("iPad") > 0);      
    var isIOS = (agent.indexOf("iPhone") > 0 || agent.indexOf("iPod") > 0);     
    var isAndroid = (agent.indexOf("Android")  > 0);     
    var isNewBlackBerry = (agent.indexOf("AppleWebKit") > 0 && agent.indexOf("BlackBerry") > 0);     
    var isWebOS = (agent.indexOf("webOS") > 0);      
    var isWindowsMobile = (agent.indexOf("IEMobile") > 0);     
    var isSmallScreen = (screen.width < 767 || (isAndroid && screen.width < 1000));     
    var isUnknownMobile = (isWebkit && isSmallScreen);     
    var isMobile = (isIOS || isAndroid || isNewBlackBerry || isWebOS || isWindowsMobile || isUnknownMobile);     
    var isTablet = (isIPad || (isMobile && !isSmallScreen)); 
