document.getElementById("resumeForm")?.addEventListener("submit",function(event){
    event.preventDefault();
  
  
    const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLInputElement;
  const experienceElement = document.getElementById('experience') as HTMLInputElement;
  const skillsElement = document.getElementById('skills') as HTMLInputElement;
  const addressElement = document.getElementById('address') as HTMLInputElement;

  if( addressElement && profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement){
  
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      const profilePicturefile = profilePictureInput.files?.[0]
      const profilePictureURL = profilePicturefile? URL.createObjectURL(profilePicturefile) : '';
       

  
  
      const resumeOutput = `
      
      <h2> Resume </h2>

       ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profilePicture" class="profilePicture">` : ''}
      <p><stronge>Name:</stronge> <span id="edit-name" class="editable">${name}</span></p>
      <p><stronge>Email:</stronge><span id="edit-email" class="editable">${email}</span></p>
      <p><stronge>Phone :</stronge><span id="edit-phone" class="editable">${phone}</span></p>
  
      <h3>Education</h3>
      <p id="edit-education" class="editable">${education}</p>
      
      <h3>Experience</h3>
      <p id="edit-experience" class="editable">${experience}</p>
  
      <h3>Skills<h3>
      <p id="edit-skills" class="editable">${skills}</p> `;
      
  
      const resumeOutputElement = document.getElementById("resumeOutput")
        
      if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;
        makeEditable();
      }
  
    }else{
      console.error("one or more output element are missing")
      
    }
  
  
  
  })
      
  function makeEditable(){
    const editableElement = document.querySelectorAll(".editable");
    editableElement.forEach(element =>{ 
      element.addEventListener('click' , function(){
        const currrntElement = element as HTMLElement;
        const currentValue = currrntElement.textContent || "" ;

        if(currrntElement.tagName === "p" || currrntElement.tagName ===  "span") {
          const input = document.createElement("input")
          input.type ="text"
          input.value =currentValue
          input.classList.add("editing-input")

          input.addEventListener("blur",function () {
            currrntElement.textContent = input.value;
            currrntElement.style.display = "inline"
            input.remove()
          })

          currrntElement.style.display = "none"
          currrntElement.parentNode?.insertBefore(input, currrntElement )
          input.focus()

          
        }
      })

    })
  }