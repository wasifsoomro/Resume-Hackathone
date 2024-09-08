document.getElementById('resume-form').addEventListener('submit', function(e) {
  e.preventDefault();


  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const objective = document.getElementById('objective').value;
  const education = document.getElementById('education').value;
  const workExperience = document.getElementById('workexperience').value;

 
  document.getElementById('display-name').textContent = name;
  document.getElementById('display-email').textContent = email;
  document.getElementById('display-phone').textContent = phone;
  document.getElementById('display-objective').textContent = objective;
  document.getElementById('display-education').textContent = education;
  document.getElementById('display-experience').textContent = workExperience;

 
  document.querySelector('.resume').style.display = 'block';
});

const skillInput = document.getElementById('skill-input');
const addSkillBtn = document.getElementById('add-skill');
const skillsList = document.getElementById('skills-list');
const displaySkills = document.getElementById('display-skills');

skillInput.addEventListener('input', function() {
  addSkillBtn.disabled = !skillInput.value.trim();
});

addSkillBtn.addEventListener('click', function() {
  const skill = skillInput.value.trim();
  if (skill) {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsList.appendChild(li);

    const skillForDisplay = document.createElement('li');
    skillForDisplay.textContent = skill;
    displaySkills.appendChild(skillForDisplay);

    skillInput.value = '';
    addSkillBtn.disabled = true;
  }
});

const fileInput = document.getElementById('file-input');
const profileImage = document.getElementById('display-profile-image');

fileInput.addEventListener('change', function(e) {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(event) {
      profileImage.src = event.target.result;
    };
    reader.readAsDataURL(file);
  }
});
