var page = require('webpage').create();
var system = require('system');
var address = system.args[1];
page.open(address, function() {
  page.includeJs("http://code.jquery.com/jquery-1.11.0.min.js", function() {
    var h_colors = page.evaluate(function() {
         var hs = [];
         for (var i=0; i<5; i++){
              if($("h"+(i+1)).css("color"))
                    hs.push($("h"+(i+1)).css("color"));
               else
                    hs.push(null);
          }
          return hs;
    })
    for(var i=0; i<h_colors.length; i++) {
      system.stdout.write("h"+(i+1)+":" + h_colors[i]+"\n");
    }
   
    setTimeout(function(){
      phantom.exit();
    },0);
  });
});