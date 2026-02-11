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