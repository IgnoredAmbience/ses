// Function declared globally
function new_def_f1() {
  // Undeclared
  new_def_f1_a = 1;

  // Declared, used inline
  var new_def_f1_b = 1;

  // Used before decl
  new_def_f1_c = 1;
  var new_def_f1_c;

  // Used after decl
  var new_def_f1_d;
  new_def_f1_d = 1;
}
new_def_f1();

var new_def_f2 = function() {
  // Undeclared
  new_def_f2_a = 1;

  // Declared, used inline
  var new_def_f2_b = 1;

  // Used before decl
  new_def_f2_c = 1;
  var new_def_f2_c;

  // Used after decl
  var new_def_f2_d;
  new_def_f2_d = 1;
}
new_def_f2();

(function() {
  // Undeclared
  new_def_f3_a = 1;

  // Declared, used inline
  var new_def_f3_b = 1;

  // Used before decl
  new_def_f3_c = 1;
  var new_def_f3_c;

  // Used after decl
  var new_def_f3_d;
  new_def_f3_d = 1;
})();
