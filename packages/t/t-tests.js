// Write your tests here!
// Here is an example.

// System.import("./tests");
System.import("t:t/t").then(function(t) {
  Tinytest.add("Example", function(test) {
    test.equal(t.a, 3);
  });
});
