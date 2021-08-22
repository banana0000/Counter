$(document).ready(function () {
    $("#start1").click(function () {
      let myCounter = setInterval(function () {
        $("#counter").html(function (i, val) {
          return +val + 1;
        });
      }, 1000);
      $("#counter").css("color", "lime");
      $("#stop1").click(function () {
        clearInterval(myCounter);
      });
    });
  
    $("#start2").click(function () {
      let myCounter = setInterval(function () {
        $("#counter").html(function (i, val) {
          return +val - 1;
        });
      }, 1000);
      $("#counter").css("color", "green");
      $("#stop2").click(function () {
        clearInterval(myCounter);
      });
    });
  
    $("#reset").click(function () {
      $("#counter").html("0");
    });
  });
  