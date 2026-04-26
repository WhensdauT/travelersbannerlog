// Создаём контейнер для частиц
const particlesContainer = document.createElement('div');
particlesContainer.className = 'particles';
document.body.prepend(particlesContainer);

function createParticle() {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const colors = ['gold', 'light', 'blue'];
    particle.classList.add(colors[Math.floor(Math.random() * colors.length)]);
    
    particle.style.left = Math.random() * 100 + '%';
    
    const size = Math.random() * 5 + 2;
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    
    const duration = Math.random() * 15 + 12;
    particle.style.animationDuration = duration + 's';
    
    particle.style.animationDelay = Math.random() * 8 + 's';
    
    particlesContainer.appendChild(particle);
    
    setTimeout(() => {
        particle.remove();
    }, (duration + 5) * 1000);
}

for (let i = 0; i < 25; i++) {
    setTimeout(createParticle, Math.random() * 6000);
}

setInterval(createParticle, 900);