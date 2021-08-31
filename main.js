$(document).ready(function() {
    $("#start1").click(function() {
        let myCounter = setInterval(function() {
            $("#counter").html(function(i, val) {
                return +val + 1;
            });
        }, 1000);
        $("#counter").css("color", "cyan");
        $("#stop1").click(function() {
            clearInterval(myCounter);
        });
    });

    $("#start2").click(function() {
        let myCounter = setInterval(function() {
            $("#counter").html(function(i, val) {
                return +val - 1;
            });
        }, 1000);
        $("#counter").css("color", "blue");
        $("#stop2").click(function() {
            clearInterval(myCounter);
        });
    });

    $("#reset").click(function() {
        $("#counter").html("0");
        $("#counter").css("color", "white");
    });
});