document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('studentForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get form inputs
        const name = document.getElementById('name').value;
        const class_ = document.getElementById('class').value;
        const roll = document.getElementById('roll').value; // Changed from ID to Roll
        const marks = [
            parseInt(document.getElementById('subject1_marks').value),
            parseInt(document.getElementById('subject2_marks').value),
            parseInt(document.getElementById('subject3_marks').value),
            parseInt(document.getElementById('subject4_marks').value),
            parseInt(document.getElementById('subject5_marks').value)
        ];

        // Calculate total marks and percentage
        const totalMarks = marks.reduce((acc, curr) => acc + curr, 0);
        const percentage = (totalMarks / (marks.length * 100)) * 100;

        // Calculate grade
        let grade;
        if (percentage >= 90) {
            grade = 'A+';
        } else if (percentage >= 80) {
            grade = 'A';
        } else if (percentage >= 70) {
            grade = 'B';
        } else if (percentage >= 60) {
            grade = 'C';
        } else if (percentage >= 50) {
            grade = 'D';
        } else {
            grade = 'F';
        }

        // Display results
        const message = getMotivationalMessage(grade);
        displayResult(name, class_, roll, percentage.toFixed(2), grade, message);
    });

    function displayResult(name, class_, roll, percentage, grade, message) {
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('class', class_);
        sessionStorage.setItem('roll', roll); // Changed from ID to Roll
        sessionStorage.setItem('percentage', percentage);
        sessionStorage.setItem('grade', grade);
        sessionStorage.setItem('message', message);
        window.location.href = 'result.html';
    }

    function getMotivationalMessage(grade) {
        switch (grade) {
            case 'A+':
                return "You're outstanding! Keep up the excellent work!";
            case 'A':
                return "Fantastic job! Your hard work is paying off!";
            case 'B':
                return "Great effort! Keep striving for excellence!";
            case 'C':
                return "Well done! Consistency is key, keep it up!";
            case 'D':
                return "You're almost there! Keep pushing forward!";
            default:
                return "Don't be discouraged! Failure is the first step towards success!";
        }
    }
});
