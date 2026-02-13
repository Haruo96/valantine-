document.addEventListener('DOMContentLoaded', function() {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const celebration = document.getElementById('celebration');
    const mainContent = document.querySelector('.main-content');
    
    let noClickCount = 0;
    
    const noBtnTexts = [
        'Maybe... 🤔',
        'Are you sure? 😢',
        'Please reconsider 🥺',
        'Think again! 💭',
        'Come on... 😊',
        'Pretty please? 🙏',
        'Last chance! ❤️',
        'Fine... YES! 😍'
    ];
    
    yesBtn.addEventListener('click', function() {
        mainContent.style.display = 'none';
        celebration.classList.remove('hidden');
        createMoreHearts();
        playHappyAnimation();
    });
    
    noBtn.addEventListener('click', function() {
        noClickCount++;
        
        if (noClickCount >= noBtnTexts.length - 1) {
            // Automatically trigger yes after many no clicks
            mainContent.style.display = 'none';
            celebration.classList.remove('hidden');
            createMoreHearts();
            playHappyAnimation();
        } else {
            noBtn.textContent = noBtnTexts[noClickCount];
            
            // Make the no button smaller and move around
            noBtn.style.transform = `scale(${1 - noClickCount * 0.1}) translateX(${Math.random() * 20 - 10}px)`;
            
            // Make yes button bigger and more attractive
            yesBtn.style.transform = `scale(${1 + noClickCount * 0.1})`;
            yesBtn.style.animation = 'pulse 0.5s ease-in-out';
        }
    });
    
    function createMoreHearts() {
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const heart = document.createElement('div');
                heart.className = 'heart';
                heart.style.left = Math.random() * 100 + '%';
                heart.style.animationDelay = Math.random() * 2 + 's';
                heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
                document.querySelector('.hearts-background').appendChild(heart);
            }, i * 100);
        }
    }
    
    function playHappyAnimation() {
        celebration.style.animation = 'bounceIn 0.5s ease-out';
    }
});

// Add pulse animation for yes button
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.1); }
        100% { transform: scale(1); }
    }
    
    @keyframes bounceIn {
        0% {
            transform: translate(-50%, -50%) scale(0.3);
            opacity: 0;
        }
        50% {
            transform: translate(-50%, -50%) scale(1.1);
        }
        100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
