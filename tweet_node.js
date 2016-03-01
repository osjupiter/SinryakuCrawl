var Twitter = require('twitter');
require('date-utils');
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var dt=new Date();
client.post('statuses/update', {status: '侵略どうですかレコンキスタ\n現在('+dt.toFormat("YYYY/MM/DD HH24時MI分")+')の売り上げ枚数:'+input}, function(error, tweet, response){
  if (!error) {
    console.log(tweet);
  }
});
