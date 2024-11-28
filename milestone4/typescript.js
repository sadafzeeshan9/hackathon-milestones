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
    var addressElement = document.getElementById('address');
    if (addressElement && profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var address = addressElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePicturefile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : '';
        var resumeOutput = "\n      \n      <h2> Resume </h2>\n\n       ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profilePicture\" class=\"profilePicture\">") : '', "\n      <p><stronge>Name:</stronge> <span id=\"edit-name\" class=\"editable\">").concat(name_1, "</span></p>\n      <p><stronge>Email:</stronge><span id=\"edit-email\" class=\"editable\">").concat(email, "</span></p>\n      <p><stronge>Phone :</stronge><span id=\"edit-phone\" class=\"editable\">").concat(phone, "</span></p>\n  \n      <h3>Education</h3>\n      <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n      \n      <h3>Experience</h3>\n      <p id=\"edit-experience\" class=\"editable\">").concat(experience, "</p>\n  \n      <h3>Skills<h3>\n      <p id=\"edit-skills\" class=\"editable\">").concat(skills, "</p> ");
        var resumeOutputElement = document.getElementById("resumeOutput");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
        }
    }
    else {
        console.error("one or more output element are missing");
    }
});
function makeEditable() {
    var editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currrntElement = element;
            var currentValue = currrntElement.textContent || "";
            if (currrntElement.tagName === "p" || currrntElement.tagName === "span") {
                var input_1 = document.createElement("input");
                input_1.type = "text";
                input_1.value = currentValue;
                input_1.classList.add("editing-input");
                input_1.addEventListener("blur", function () {
                    currrntElement.textContent = input_1.value;
                    currrntElement.style.display = "inline";
                    input_1.remove();
                });
                currrntElement.style.display = "none";
                (_a = currrntElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currrntElement);
                input_1.focus();
            }
        });
    });
}
