$(document).ready(function() {
    window.alert('hi');
    $.getJSON("json/student.json"), function( data ) {
        $.each(result, function(i, field){
                $("div").append(field + " ");
        });
    });
    
    var obj = JSON.stringify(json);
    obj.name = new String(obj.name);
    
});