// Простое приветствие в консоли (можно удалить)
console.log('Сайт «Обо мне» загружен!');

// Плавная прокрутка по якорям (если добавите навигацию)
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});