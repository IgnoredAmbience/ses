var x = 1;
var f = function() {
  return x;
};
x = 0;

var result = f();

print("result = " + result);
print("language " + (result ? "" : "does not ") + "exhibit fixed closures");
