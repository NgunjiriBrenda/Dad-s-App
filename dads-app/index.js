function createHeart() {
    const container = document.getElementById('heartsContainer');
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = ['❤️','💖','💕','💗','💓'][Math.floor(Math.random()*5)];
    heart.style.left = Math.random()*100 + '%';
    heart.style.animationDuration = (Math.random()*5+8)+'s';
    container.appendChild(heart);
    setTimeout(()=>heart.remove(),12000);
}
setInterval(createHeart,800);

// Sparkles on touch
document.addEventListener('touchstart', (e)=>{
    const t = e.touches[0];
    const s = document.createElement('div');
    s.innerHTML='✨';
    s.style.position='fixed';
    s.style.left=t.clientX+'px';
    s.style.top=t.clientY+'px';
    s.style.animation='fadeOut 1s forwards';
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),1000);
});

const messages = {
    photo1: "Thank you for always working hard so I can have a better life. I see your sacrifices, Dad 💙",
    photo2: "Your advice has shaped me into who I am today. I carry your lessons everywhere.",
    photo3: "You believed in me even when I doubted myself. That means everything to me.",
    photo4: "I’m proud to call you my dad. I Love You ❤️."
};


function showDescription(photo) {
    document.getElementById("modalText").innerText = messages[photo];
    document.getElementById("modal").classList.remove("hidden");
}
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}


function createBall() {
    const ball = document.createElement("span");
    const balls = ["⚽","🔴","⚪"]; // Arsenal colors + ball
    ball.innerHTML = balls[Math.floor(Math.random()*balls.length)];
    ball.style.left = Math.random() * 100 + "%";
    ball.style.animationDuration = (Math.random() * 5 + 8) + "s";
    document.getElementById("balls").appendChild(ball);
    setTimeout(()=>ball.remove(),12000);
}
setInterval(createBall, 900);