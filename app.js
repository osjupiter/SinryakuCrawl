

var address ="http://www.dlsite.com/home/work/=/product_id/RJ162975.html"; //system.args[1];



var page = require('webpage').create();
page.open(address, function (status) {
    if (status !== 'success') {
        console.log('Unable to access network');
    } else {
        var ua = page.evaluate(function () {
            return document.querySelector('._dl_count').innerText;
        });
        console.log(ua);
    }
    phantom.exit();
});