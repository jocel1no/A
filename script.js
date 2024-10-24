// script.js // Você pode adicionar scripts JavaScript aqui

// Funcionalidade para scroll suave
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Funcionalidade para mostrar seções ao clicar
document.addEventListener("DOMContentLoaded", function() {
    console.log("Página carregada com sucesso!");

    const navLinks = document.querySelectorAll('a.nav-link');
    const sections = document.querySelectorAll('.content-section');

    // Ocultar todas as seções inicialmente
    sections.forEach(section => {
        section.style.display = 'none';
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Ocultar todas as seções
            sections.forEach(section => {
                section.style.display = 'none';
            });
            
            // Mostrar a seção correspondente ao link clicado
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.style.display = 'block';
        });
    });
});
