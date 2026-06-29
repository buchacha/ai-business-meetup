document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.main-header');
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const backdrop = document.querySelector('.menu-backdrop');
    const navItems = document.querySelectorAll('.nav-links a');

    // 1. Header scroll logic
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            header.classList.add('header-visible');
        } else {
            // Only hide if menu is not open on mobile
            if (!burgerMenu.classList.contains('open')) {
                header.classList.remove('header-visible');
            }
        }
    });

    // 2. Burger menu logic
    function toggleMenu() {
        burgerMenu.classList.toggle('open');
        navLinks.classList.toggle('active');
        backdrop.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    }

    burgerMenu.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', toggleMenu);

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                toggleMenu();
            }
        });
    });
});

function togglePrompt(button) {
    const actions = button.closest('.case-actions');
    const content = actions.nextElementSibling;

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
        button.textContent = "Скрыть промпт";
    } else {
        content.style.display = "none";
        button.textContent = "Раскрыть промпт";
    }
}

function copyPrompt(button) {
    const code = button.previousElementSibling;
    const text = code.innerText;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = "Скопировано!";
        button.style.backgroundColor = "#28a745";

        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = "";
        }, 2000);
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}
