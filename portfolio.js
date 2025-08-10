function generatePortfolio(event){
    event.preventDefault();
    const name=document.getElementById('name').value.trim();
    const email=document.getElementById('email').value.trim();
    const skills=document.getElementById('skills').value.trim();
    const project=document.getElementById('project').value.trim();


const output=document.getElementById('portfolioOutput');
output.innerHTML=`
    <h3>${name}'s portfolio</h3>
    <p><strong>Email:</strong>${email}</p>
    <p><strong>skills:</strong>${skills.split(',').map(skill => `<span class="skill">${skill}</span>`).join('')}</p>

    <p><strong>project:</strong>${project}</p>
`;
output.classList.remove('hidden');
console.log('portfolio Data:',{name, email, skills,project});
}