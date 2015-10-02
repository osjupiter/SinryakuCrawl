var Twitter = require('twitter');
require('date-utils');
var client = new Twitter({
  consumer_key: 'CEFJU443oTCZzSzbUC2s7NoVW',
  consumer_secret: 'EAY1stJRpcC8YH2HxEbRmLSfNA0WvZm7kwc0o4tLn7D7mNpruz',
  access_token_key: '3236421059-wpVkCP4Y4VaRYBdZeI8l0NwSjWihtadYkxNhbUL',
  access_token_secret: '28JVlSxcZbA9Xpdm4OjkOsDpspxaKIXP4TwlXCwAMjk9N'
});
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dt=new Date();
client.post('statuses/update', {status: '侵略どうですかレコンキスタ\n現在('+dt.toFormat("YYYY/MM/DD HH24時MI分")+')の売り上げ枚数:'+input}, function(error, tweet, response){
  if (!error) {
    console.log(tweet);
  }
});
