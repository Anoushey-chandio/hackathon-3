var resumeForm = document.getElementById("resumeForm");
var resumeOutput = document.getElementById("resumeOutput");
resumeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // Get form data
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var skills = document.getElementById("skills").value;
    var experience = document.getElementById("experience").value;
    // Create resume output
    var resumeHtml = "\n    <h2>Resume</h2>\n    <p>Name: ".concat(name, "</p>\n    <p>Email: ").concat(email, "</p>\n    <p>Phone: ").concat(phone, "</p>\n    <h3>Education</h3>\n    <p>").concat(education, "</p>\n    <h3>Skills</h3>\n    <p>").concat(skills, "</p>\n    <h3>Experience</h3>\n    <p>").concat(experience, "</p>\n  ");
    // Display the resume
    resumeOutput.innerHTML = resumeHtml;
});
