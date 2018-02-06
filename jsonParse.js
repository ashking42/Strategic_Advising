$(document).ready(function(){
    //Trying to get this shortened and useable with require.js
    $("button").click(function(){
        $.getJSON("json/student.json", function(result){
            $.each(result, function(i, field){
                $(".student").append(i + " : " + field + " ");
            });
        });
        $.getJSON("json/course.json", function(result){
            $.each(result, function(i, field){
                $(".course").append(i + " : " + field + " ");
            });
        });
    });
});