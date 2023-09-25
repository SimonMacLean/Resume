// Fetch GitHub repos and populate the 'github-projects' section
fetch('https://api.github.com/users/SimonMacLean/repos')
    .then(response => response.json())
    .then(data => {
        const projectSection = document.getElementById('github-projects');
        const projectList = document.getElementById('project-list');

        data.forEach(project => {
            const projectListItem = document.createElement('li');
            projectListItem.textContent = `${project.name} - ${project.description}`;

            const newTabIcon = document.createElement('i');
            newTabIcon.className = 'fas fa-external-link-alt';
            newTabIcon.style.marginLeft = '5px';

            const iconLink = document.createElement('a');
			iconLink.href = project.html_url;
			iconLink.target = "_blank";
			iconLink.className = 'subdued-link';
			iconLink.appendChild(newTabIcon);

            projectListItem.appendChild(iconLink);
            
            projectList.appendChild(projectListItem);
        });

        const githubLink = document.createElement('a');
        githubLink.href = 'https://github.com/SimonMacLean';
        githubLink.textContent = 'View All Projects on GitHub';
        githubLink.className = 'subdued-link';

        const githubLinkWrapper = document.createElement('div');
        githubLinkWrapper.appendChild(githubLink);

        projectSection.insertBefore(githubLinkWrapper, projectList);
    });
