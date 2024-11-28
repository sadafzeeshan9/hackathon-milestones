var _a;
(_a = document.getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePictureInput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    var usernameElement = document.getElementById('username');
    var addressElement = document.getElementById('address');
    if (addressElement && profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var username = usernameElement.value;
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '';
        var uniquePath = "cv/".concat(username.replace(/\s+/g, '__'), "_cv.html");
        var resumeOutput = "\n      \n      <h2> Resume </h2>\n\n      ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profilePicture\" class=\"profilePicture\">") : '', "\n      <p><stronge>Name:</stronge> ").concat(name_1, "</p>\n      <p><stronge>Email:</stronge>").concat(email, "</p>\n      <p><stronge>Phone :</stronge>").concat(phone, "</p>\n  \n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n      \n      <h3>Experience</h3>\n      <p>").concat(experience, "</p>\n  \n      <h3>Skills<h3>\n      <p>").concat(skills, "</p> ");
        var donwloadLink = document.createElement('a');
        donwloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput);
        donwloadLink.download = uniquePath;
        donwloadLink.textContent = "Download your 2024 resume";
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(donwloadLink);
        }
    }
    else {
        console.error("one or more output element are missing");
    }
});
