


$(function () {
    let grade;

    $('#calculate').on('click', function () {
        grade = $('#assignemnts').val() * 0.50 + $('#group_project').val() * 0.1 + $('#quizzes').val() * 0.1 + $('#midterm').val() * 0.1 + $('#final').val() * 0.1 + $('#intex').val() * 0.1;
        alert("Your final grade is: " + grade);
        console.log($('#assignments'));
    });
});