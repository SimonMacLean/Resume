// Fetch GitHub repos and populate the 'github-projects' section
fetch('https://api.github.com/users/SimonMacLean/repos')
    .then(response => response.json())
    .then(data => {
        const projectSection = document.getElementById('github-projects');
        
        data.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.classList.add('project-card');
            
            const projectTitle = document.createElement('h3');
            projectTitle.textContent = project.name;
            
            const projectLink = document.createElement('a');
            projectLink.href = project.html_url;
            projectLink.textContent = 'View on GitHub';
            
            projectCard.appendChild(projectTitle);
            projectCard.appendChild(projectLink);
            
            projectSection.appendChild(projectCard);
        });
    });
