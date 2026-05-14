// JavaScript Document
/* ============================================
   O MUNDO DOS ANIMAIS - PET SHOP
   Scripts JavaScript
   ============================================ */

// Executar quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {

    // REMOVER target="_blank" de TODOS os links
    var links = document.querySelectorAll('a');
    links.forEach(function(link) {
        link.removeAttribute('target');
        link.removeAttribute('rel');
    });

    // Iniciar carousel automaticamente
    initCarousel();

});

/* ============================================
   CAROUSEL - Banner Rotativo
   ============================================ */
var currentSlide = 0;
var slides = document.querySelectorAll('.carousel-slide');
var dots = document.querySelectorAll('.dot');
var carouselInterval;

function initCarousel() {
    // Auto-rotacionar a cada 5 segundos
    carouselInterval = setInterval(nextSlide, 5000);
}

function goToSlide(index) {
    // Resetar intervalo
    clearInterval(carouselInterval);

    // Atualizar slides
    slides.forEach(function(slide, i) {
        slide.classList.toggle('active', i === index);
    });

    // Atualizar dots
    dots.forEach(function(dot, i) {
        dot.classList.toggle('active', i === index);
    });

    currentSlide = index;

    // Reiniciar intervalo
    carouselInterval = setInterval(nextSlide, 5000);
}

function nextSlide() {
    var next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}

/* ============================================
   NAVEGAÇÃO - Menu Mobile
   ============================================ */
function toggleMenu() {
    var navLinks = document.getElementById('navLinks');

    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    } else {
        navLinks.classList.add('active');
    }
}

/* ============================================
   CATEGORIAS - Navegação por Categoria
   ============================================ */
function goToCategory(category) {
    // Aqui você pode redirecionar para páginas específicas
    // Por enquanto, mostra um alerta
    alert('Indo para: ' + category.toUpperCase() + ' - Em breve com produtos reais!');

    // Exemplo de redirecionamento real:
    // window.location.href = category + '.html';
}

/* ============================================
   NEWSLETTER - Formulário
   ============================================ */
document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    var email = this.querySelector('input[type="email"]').value;

    if (email && email.includes('@')) {
        alert('Obrigado por assinar! Email: ' + email);
        this.reset();
    } else {
        alert('Por favor, insira um email válido.');
    }
});

/* ============================================
   PRODUTOS - Interação
   ============================================ */
var productCards = document.querySelectorAll('.product-card');
productCards.forEach(function(card) {
    card.addEventListener('click', function() {
        var productName = this.querySelector('.product-name').textContent;
        alert('Produto: ' + productName + ' - Em breve na loja!');
    });
});

/* ============================================
   BANNERS - Interação
   ============================================ */
var brandBanners = document.querySelectorAll('.brand-banner');
brandBanners.forEach(function(banner) {
    banner.addEventListener('click', function() {
        var brandName = this.querySelector('h3').textContent;
        alert('Marca: ' + brandName + ' - Ver produtos em breve!');
    });
});