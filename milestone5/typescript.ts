document.getElementById("resumeForm")?.addEventListener("submit",function(event){
    event.preventDefault();
  
  
  const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
  const nameElement = document.getElementById('name') as HTMLInputElement;
  const emailElement = document.getElementById('email') as HTMLInputElement;
  const phoneElement = document.getElementById('phone') as HTMLInputElement;
  const educationElement = document.getElementById('education') as HTMLInputElement;
  const experienceElement = document.getElementById('experience') as HTMLInputElement;
  const skillsElement = document.getElementById('skills') as HTMLInputElement;
  const usernameElement = document.getElementById('username') as HTMLInputElement;
  const addressElement = document.getElementById('address') as HTMLInputElement;






  if( addressElement && profilePictureInput && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement &&  usernameElement ){
  
      const name = nameElement.value;
      const email = emailElement.value;
      const phone = phoneElement.value;
      const address = addressElement.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;
      const username = usernameElement.value;

      const profilePicturefile = profilePictureInput.files?.[0]
      const profilePictureURL = profilePicturefile? URL.createObjectURL(profilePicturefile) : '';
       


    
      const uniquePath = `cv/${username.replace(/\s+/g,  '__' )}_cv.html`
  
  
      const resumeOutput = `
      
      <h2> Resume </h2>

      ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profilePicture" class="profilePicture">` : ''}
      <p><stronge>Name:</stronge> ${name}</p>
      <p><stronge>Email:</stronge>${email}</p>
      <p><stronge>Phone :</stronge>${phone}</p>
  
      <h3>Education</h3>
      <p>${education}</p>
      
      <h3>Experience</h3>
      <p>${experience}</p>
  
      <h3>Skills<h3>
      <p>${skills}</p> `;
      
  
const donwloadLink = document.createElement('a')
donwloadLink.href = "data:text/html;charset=utf-8," + encodeURIComponent(resumeOutput)
donwloadLink.download = uniquePath ;
donwloadLink.textContent = "Download your 2024 resume" ;


      const resumeOutputElement = document.getElementById("resumeOutput")
        
      if(resumeOutputElement){
        resumeOutputElement.innerHTML = resumeOutput;

resumeOutputElement.appendChild(donwloadLink)


        
      }
  
    }else{
      console.error("one or more output element are missing")
      
    }
  
  
  
  })
      
 
          
        