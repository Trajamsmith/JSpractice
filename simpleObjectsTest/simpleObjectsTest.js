//array of student objects
var students = [
    {
        name : 'John',
        track : 'Front End Development',
        achievements : 125,
        points : 767
    },
    {
        name : 'Tiffany',
        track : 'Full Stack Development',
        achievements : 35,
        points : 3573
    },
    {
        name : 'George',
        track : 'iOS Development with Swift',
        achievements : 65,
        points : 5322
    },
    {
        name : 'Samantha',
        track : 'Python Web Development',
        achievements : 78,
        points : 457
    },
    {
        name : 'Trish',
        track : 'Full Stack Development',
        achievements : 230,
        points : 563
    }
];


//print single student's information
function printStudent ( student ) {
    document.write('<h2>Student: ' + student.name + '</h2>');
    document.write('<p>Track: ' + student.track + '</p>');
    document.write('<p>Achievements: ' + student.achievements + '</p>');
    document.write('<p>Points: ' + student.points + '</p>');
    document.write('<br><br>');
};

//print all student information
function printStudents () {
    for ( var i = 0; i < students.length; i += 1 ) {
        document.write('<h2>Student: ' + students[i].name + '</h2>');
        document.write('<p>Track: ' + students[i].track + '</p>');
        document.write('<p>Achievements: ' + students[i].achievements + '</p>');
        document.write('<p>Points: ' + students[i].points + '</p>');
        document.write('<br><br>');
    }
};


//student search
var search = prompt("Enter student's name (or enter all for all students)");
for ( var i = 0; i < students.length; i += 1 ) {
    if ( search === students[i].name ) {
        printStudent ( students[i] );
    } else if ( search === "all") {
        printStudents();
    }
}
