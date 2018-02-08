

$(document).ready(function(){
    //Trying to get this shortened and useable with require.js
    $("button").click(function(){
       $.getJSON("json/student.json", function(result) {
           $.each(new  Array(1), function(){
               $("#listOfClasses").append(result.listOfClasses+ " , " + result.listOfClasses1);
               $('#studentId').append(result.id + " , " + result.id1);
               $('#year').append(result.year + " , " + result.year1);
               $('#yearToGraduate').append(result.yearToGraduate + " , " + result.yearToGraduate1);
               $('#schedule').append(result.schedule + " , " + result.schedule1);
               $('#summerClass').append(result.summerClass + " , " + result.summerClass1);
               $('#major').append(result.major + + " , " + result.major1);
               $('#transferCredit').append(result.transferCredits + " , " + result.transferCredits1);
               $('#studentName').append(result.name + " , " + result.name1);
           });
       });

        $.getJSON("json/course.json", function(result) {
            $.each(new  Array(1), function(){
                $('#name').append(result.title + " , " + result.title1);
                $('#courseNumber').append(result.courseNumber + " , " + result.courseNumber1);
                $('#reqNumber').append(result.requisitionNumber + " , " + result.requisitionNumber1);
                $('#preReq').append(result.prerequisites + " , " + result.prerequisites1);
                $('#coReq').append(result.corequisite + " , " + result.corequisite1);
                $('#restrict').append(result.restrictions + " , " + result.restrictions1);
                $('#offering').append(result.offering + " , " + result.offering);
                $('#creditHours').append(result.creditHours + " , " + result.creditHours1);
            });
        });
    });
});