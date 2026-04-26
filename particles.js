// Создаём контейнер для перьев
const particlesContainer = document.createElement('div');
particlesContainer.className = 'particles';
document.body.prepend(particlesContainer);

function createFeather() {
    const feather = document.createElement('div');
    feather.className = 'feather';
    
    // Только перо
    feather.textContent = '🪶';
    
    // Случайная позиция по горизонтали
    feather.style.left = Math.random() * 100 + '%';
    
    // Случайный размер
    const size = Math.random() * 20 + 18;
    feather.style.fontSize = size + 'px';
    
    // Случайная длительность падения
    const duration = Math.random() * 12 + 8;
    feather.style.animationDuration = duration + 's';
    
    // Случайная задержка
    feather.style.animationDelay = Math.random() * 3 + 's';
    
    particlesContainer.appendChild(feather);
    
    // Удаляем перо после анимации
    setTimeout(() => {
        feather.remove();
    }, (duration + 3) * 1000);
}

// Создаём начальные перья
for (let i = 0; i < 15; i++) {
    setTimeout(createFeather, Math.random() * 4000);
}

// Создаём новые перья постоянно
setInterval(createFeather, 1200);
