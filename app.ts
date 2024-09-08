const form = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLElement;
const saveButton = document.getElementById('saveResume') as HTMLButtonElement;
const editButton = document.getElementById('editResume') as HTMLButtonElement;

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = (document.getElementById('name') as HTMLInputElement).value;
  const fathersName = (document.getElementById('fathersName') as HTMLInputElement).value;
  const age = (document.getElementById('age') as HTMLInputElement).value;
  const gender = (document.getElementById('gender') as HTMLSelectElement).value;
  const education = (document.getElementById('education') as HTMLInputElement).value;
  const workExperience = (document.getElementById('workExperience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  // Generate the Resume
  resumeOutput.innerHTML = `
    <div class="resume-box">
      <h2>Personal Information</h2>
      <p contenteditable="true" id="editableName">Name: ${name}</p>
      <p contenteditable="true" id="editableFathersName">Father's Name: ${fathersName}</p>
      <p contenteditable="true" id="editableAge">Age: ${age}</p>
      <p contenteditable="true" id="editableGender">Gender: ${gender}</p>

      <h2>Education</h2>
      <p contenteditable="true" id="editableEducation">${education}</p>

      <h2>Work Experience</h2>
      <p contenteditable="true" id="editableWorkExperience">${workExperience}</p>

      <h2>Skills</h2>
      <p contenteditable="true" id="editableSkills">${skills}</p>
    </div>
  `;

  saveButton.classList.remove('hidden');
  editButton.classList.remove('hidden');
});

// Edit and Save functionality
saveButton.addEventListener('click', () => {
  // Save functionality can be customized if needed
  alert('Resume Saved!');
});

editButton.addEventListener('click', () => {
  const fields = resumeOutput.querySelectorAll('[contenteditable="true"]');
  fields.forEach((field) => {
    field.setAttribute('contenteditable', 'true');
  });
});