// from non-es6 https://github.com/janlelis/yyid.js

export default function yyid() {
  var i = 0;
  var randomTwoBytes = new Uint16Array(8);
  crypto.getRandomValues(randomTwoBytes);

  return 'xx-x-x-x-xxx'.replace(/x/g, function() {
    return ('000' + randomTwoBytes[i++].toString(16)).substr(-4);
  });
};
