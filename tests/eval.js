var secret = 1234;
var ctx = eval("var v; v = function() {" +
  "return secret;" +
"};");

var result = ctx();

if (result == secret) {
  print("Eval got the secret!");
}
if (v) {
  print("Eval defined v on global object");
}
