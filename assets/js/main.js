// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 40) {

    header.style.background = "rgba(255,255,255,0.96)";
    header.style.boxShadow = "0 10px 30px rgba(0,0,0,.08)";

  } else {

    header.style.background = "rgba(255,255,255,.85)";
    header.style.boxShadow = "none";

  }

});

// ========================================
// INTERSECTION OBSERVER
// ========================================

const revealElements = document.querySelectorAll(
  ".service-card, .team-card, .stats-card"
);

const observer = new IntersectionObserver(

(entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("revealed");

}

});

},

{
threshold: 0.15
}

);

revealElements.forEach(el => {

el.classList.add("hidden-card");
observer.observe(el);

});

// ========================================
// FLOATING NETWORK EFFECT
// ========================================

const nodes = document.querySelectorAll(".node");

nodes.forEach((node, index) => {

const speed = 2 + (index * 0.4);

let angle = Math.random() * Math.PI * 2;

function animate() {

angle += 0.01;

const x = Math.sin(angle) * speed;
const y = Math.cos(angle) * speed;

node.style.transform =
`translate(${x}px, ${y}px)`;

requestAnimationFrame(animate);

}

animate();

});

// ========================================
// PARALLAX HERO
// ========================================

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {

const scrolled = window.pageYOffset;

hero.style.backgroundPositionY =
`${scrolled * 0.3}px`;

});

// ========================================
// BUTTON MICROINTERACTIONS
// ========================================

document
.querySelectorAll(".btn-primary, .btn-secondary")
.forEach(button => {

button.addEventListener("mouseenter", () => {

button.style.transform =
"translateY(-4px) scale(1.02)";

});

button.addEventListener("mouseleave", () => {

button.style.transform =
"translateY(0) scale(1)";

});

});

// ========================================
// TYPEWRITER EFFECT HERO
// ========================================

const headline =
document.querySelector(".hero-copy h1");

if(headline){

headline.classList.add("loaded");

}

// ========================================
// TRUST BAR ANIMATION
// ========================================

const trustItems =
document.querySelectorAll(".trust-grid div");

trustItems.forEach((item,index)=>{

item.style.animationDelay =
`${index * 0.15}s`;

item.classList.add("trust-reveal");

});

// ========================================
// SMOOTH ANCHOR LINKS
// ========================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener(
"click",
function(e){

e.preventDefault();

const target =
document.querySelector(
this.getAttribute("href")
);

if(target){

target.scrollIntoView({

behavior:"smooth",
block:"start"

});

}

});

});
