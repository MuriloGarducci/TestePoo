// Add event listeners to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const sectionId = link.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Add animation to code boxes
document.querySelectorAll('.code-box').forEach(codeBox => {
    codeBox.addEventListener('mouseover', () => {
        codeBox.classList.add('hover');
    });
    codeBox.addEventListener('mouseout', () => {
        codeBox.classList.remove('hover');
    });
});

  // Adiciona um evento de click ao botão para abrir o dropdown
  document.querySelector('.dropdown-btn').addEventListener('click', function() {
    document.querySelector('.dropdown-content').style.display = 'block';
  });

  // Adiciona um evento de click fora do dropdown para fechá-lo
  document.addEventListener('click', function(event) {
    if (!event.target.closest('.dropdown-content') && !event.target.closest('.dropdown-btn')) {
      document.querySelector('.dropdown-content').style.display = 'none';
    }
  });