$(document).ready(function() {
    var json = $.getJSON('json/student.json');
    window.alert(json);
    var obj = JSON.stringify(json);
    window.alert(obj);
});