

$(function () {
    $('#calculate').on('click', function () {
        // Declare and grab variables from the form. If there isn't anything, default the value to 0.0
        // Also convert the value from a string to a float
        let grade;
        let letterGrade;
        let assignments = parseFloat(($('#assignments').val() != '') ? $('#assignments').val() : 0.0);
        let project = parseFloat(($('#group_project').val() != '') ? $('#group_project').val() : 0.0);
        let quizzes = parseFloat(($('#quizzes').val() != '') ? $('#quizzes').val() : 0.0);
        let midterm = parseFloat(($('#midterm').val() != '') ? $('#midterm').val() : 0.0);
        let final = parseFloat(($('#final').val() != '') ? $('#final').val() : 0.0);
        let intex = parseFloat(($('#intex').val() != '') ? $('#intex').val() : 0.0);

        // Calculate grade
        grade = assignments * 0.50
                + project * 0.1
                + quizzes * 0.1
                + midterm * 0.1
                + final * 0.1
                + intex * 0.1;

        // Determine letter grade based on grade
        switch (true) {
            case grade >= 94.0:
                letterGrade = 'A';
                break;
            case grade >= 90.0:
                letterGrade = 'A-';
                break;
            case grade >= 87.0:
                letterGrade = 'B+';
                break;
            case grade >= 84.0:
                letterGrade = 'B';
                break;
            case grade >= 80.0:
                letterGrade = 'B-';
                break;
            case grade >= 77.0:
                letterGrade = 'C+';
                break;
            case grade >= 74.0:
                letterGrade = 'C';
                break;
            case grade >= 70.0:
                letterGrade = 'C-';
                break;
            case grade >= 67.0:
                letterGrade = 'D+';
                break;
            case grade >= 64.0:
                letterGrade = 'D';
                break;
            case grade >= 60.0:
                letterGrade = 'D-';
                break;
            default:
                letterGrade = 'E';
        }

        // Print grade to screen
        $('#grade').html(letterGrade);
        
    });
});

