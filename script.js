/* =========================================================
   TEMPLATE NUTRIÇÃO INFANTIL — JavaScript
   ========================================================= */

/* ---- CONFIGURAÇÃO POR CLIENTE ---- */
const CONFIG = {
  genero: "f",                           // "f" = a nutricionista  |  "m" = o nutricionista
  whatsapp: "5511900000000",             // DDI + DDD + número (só dígitos)
  mensagem: "Olá! Gostaria de agendar uma consulta nutricional para meu filho(a)."
};

/* Gênero automático: <span data-g="O|A"> -> escolhe o texto antes/depois do "|" */
document.querySelectorAll("[data-g]").forEach(el => {
  el.textContent = el.dataset.g.split("|")[CONFIG.genero === "f" ? 1 : 0];
});

/* Links do WhatsApp em todo [data-wpp] */
document.querySelectorAll("[data-wpp]").forEach(el => {
  el.href = `https://api.whatsapp.com/send?phone=${CONFIG.whatsapp}&text=${encodeURIComponent(CONFIG.mensagem)}`;
  el.target = "_blank"; el.rel = "noopener";
});

/* Menu mobile */
const burger = document.getElementById("burger"), menu = document.getElementById("menu");
burger.addEventListener("click", () => { burger.classList.toggle("open"); menu.classList.toggle("open"); });
menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => { burger.classList.remove("open"); menu.classList.remove("open"); }));

/* Sombra no header ao rolar */
const header = document.getElementById("header");
addEventListener("scroll", () => header.classList.toggle("scrolled", scrollY > 20), { passive: true });

/* Animação de entrada ao rolar */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

document.getElementById("year").textContent = new Date().getFullYear();
