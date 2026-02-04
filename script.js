/* LOGICA DE NEGÓCIO: Verificação de Horário 
   Muda a saudação do link do Zap baseada na hora do cliente
*/
const updateWhatsappLink = () => {
    const now = new Date();
    const hours = now.getHours();
    const btnZap = document.querySelector('.whatsapp-fixed');
    let message = "";

    if (hours >= 9 && hours < 19) {
        message = encodeURIComponent("Olá! Gostaria de agendar um horário para hoje.");
    } else {
        message = encodeURIComponent("Olá! Vi o site e quero deixar um horário agendado para amanhã.");
    }

    // Altera o link dinamicamente (troque o número pelo seu)
    btnZap.href = `https://wa.me/5511999999999?text=${message}`;
};

/* EFEITO REVEAL (INTERSECTION OBSERVER)
   Faz os elementos surgirem com scroll - Muito usado em sites Premium
*/
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

/* INICIALIZAÇÃO 
*/
document.addEventListener('DOMContentLoaded', () => {
    // 1. Aplicar animação inicial nos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        // Estilização inicial via JS para não quebrar se o JS estiver off
        card.style.opacity = "0";
        card.style.transform = "translateY(30px)";
        card.style.transition = `all 0.6s ease-out ${index * 0.2}s`;
        observer.observe(card);
    });

    // 2. Efeito de Scroll no Header (opcional se tiver navbar)
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.hero');
        const scrollValue = window.scrollY;
        
        // Efeito Parallax simples no fundo do Hero
        header.style.backgroundPositionY = `${scrollValue * 0.5}px`;
    });

    // 3. Rodar verificação de horário
    updateWhatsappLink();
});

// Log para confirmar que o "motor" do site está rodando
console.log("✂️ Barbearia Engine: Ativa e carregada.");