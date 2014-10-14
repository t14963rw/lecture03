var a;
var b;


var frac = function(bunshi,bunbo){
  var bunsu = {
    bunshi:bunshi,
    bunbo:bunbo
  };
  return bunsu;
}

var multiply = function(a,b){
  var bunshi;
  var bunbo;

  if(Number.isInteger(a)){
  a = frac(a,1);
  }

  if(Number.isInteger(b)){
  b = frac(b,1);
  }

    bunshi = a.bunshi * b.bunshi;
    bunbo = a.bunbo * b.bunbo;

  var answer = frac(bunshi,bunbo);
  return answer;
};


multiply(frac(1,3),frac(4,3));

multiply(frac(1,4),frac(1,1));

multiply(frac(2,3),frac(4,1));

multiply(frac(1,4),frac(0,1));

multiply(frac(1,1),frac(2,1));
