document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            } else {
                // Opcionalmente, puedes hacer que las cards vuelvan a su estado inicial
                // cuando salen del viewport, aunque esto puede no ser deseado:
                // entry.target.style.opacity = '0';
                // entry.target.style.transform = 'translateY(20px)';
            }
        });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        observer.observe(card);
    });
});
