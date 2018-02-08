

$(document).ready(function(){
    $("button").click(function(){
       $.getJSON("json/student.json", function(result) {
           for (var i = 0; i < result.length; i++){
               $("#listOfClasses").append(result[i].listOfClasses + " ");
               $('#year').append(result[i].year + " ");
               $('#yearToGraduate').append(result[i].yearToGraduate + " ");
               $('#schedule').append(result[i].schedule + " ");
               $('#summerClass').append(result[i].summerClass + " ");
               $('#major').append(result[i].major + " ");
               $('#transferCredit').append(result[i].transferCredits + " ");
               $('#studentName').append(result[i].name + " ");
           }
       });

        $.getJSON("json/course.json", function(result) {
            for (var i = 0; i < result.length; i++){
                $('#name').append(result[i].title + " ");
                $('#courseNumber').append(result[i].courseNumber + " ");
                $('#reqNumber').append(result[i].requisitionNumber + " ");
                $('#preReq').append(result[i].prerequisites + " ");
                $('#coReq').append(result[i].corequisite + " ");
                $('#restrict').append(result[i].restrictions + " ");
                $('#offering').append(result[i].offering + " ");
                $('#creditHours').append(result[i].creditHours + " ");
            }
        });
    });
});