/**
 * Created by codyyork on 1/19/18.
 */
var jsonContent = {
    "students": [
        {
            "listOfClasses": "CS120",
            "id": "999999999",
            "year": "2018",
            "yearToGraduate": "2020",
            "schedule": "schedule",
            "summerClass": "0",
            "major": "Computer Science",
            "transferCredits": "CS100",
            "name": "Thisis Example One"
        },
        {
            "listOfClasses": "CS121",
            "id": "111111111",
            "year": "2018",
            "yearToGraduate": "2021",
            "schedule": "schedule",
            "summerClass": "1",
            "major": "Mathematics Education",
            "transferCredits": "CS120",
            "name": "Thisis Example Two"
        }
    ]
};

var fs = require('fs');
var body = JSON.stringify(jsonContent);
console.log(body);
var localPath = '/Users/codyyork/Downloads/student.js';
fs.writeFile(localPath,body,function(err){});
