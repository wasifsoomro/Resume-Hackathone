let toggelSkills = document.getElementById('toggle-button')

let skillsButton = document.getElementById('skills')

toggelSkills.addEventListener('click', () => {if(skillsButton.style.display === 'none'){skillsButton.style.display = 'block'}
  else{
    skillsButton.style.display = 'none'
  }
})
