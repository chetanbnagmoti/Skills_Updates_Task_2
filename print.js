// marksheet.js
$(document).ready(function(){
    $("#print").on("click",function() {
        window.print();
    });
    $("#backButton").on("click",function(){
        window.history.back();
    }) ;

});
