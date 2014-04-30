
var store = new Lawnchair({
        name: "web_app"
    }, function(store) {
    });


window.addEventListener('load', function() {
    //console.log('adding FastClick');
    FastClick.attach(document.body);
}, false);
