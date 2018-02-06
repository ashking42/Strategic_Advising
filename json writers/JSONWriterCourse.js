/**
 * Created by codyyork on 1/19/18.
 * Split on comma
 */
var jsonContent = {
            "title": "Computer Science 1",
            "courseNumber": "CS 120",
            "prerequisites": "MATH 111,MATH 112,MATH 132,MATH 136,MATH 161,MATH 165",
            "corequisite": "MATH 111,MATH 112,MATH 132,MATH 136,MATH 161,MATH 165",
            "restrictions": "",
            "offering": "spring, fall, summer",
            "creditHours": "4"
        ,
          "title": "Applied Calculus 1",
          "courseName": "MATH 161",
          "requisitionNumber": "",
          "prerequisites": "MATH 111, MATH 112",
          "corequisite": "",
          "restrictions": "MATH 165",
          "offering": "spring, summer, fall",
          "creditHours": "3"
};

var fs = require('fs');
var body = JSON.stringify(jsonContent);
console.log(body);
var localPath = '/Users/codyyork/Downloads/course.json';
fs.writeFile(localPath,body,function(err){});
