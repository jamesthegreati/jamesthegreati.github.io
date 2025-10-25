// ===== Magnetic Portfolio - Enhanced JavaScript =====

// Global state
let soundEnabled = true;
let currentWorld = 'web';

// ===== Sound System =====
const sounds = {
    whoosh: () => playSound(200, 0.1, 'sine'),
    click: () => playSound(400, 0.05, 'square'),
    hum: () => playSound(100, 0.2, 'sine')
};

function playSound(frequency, duration, type = 'sine') {
    if (!soundEnabled) return;
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = frequency;
        oscillator.type = type;
        
        gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + duration);
    } catch (e) {
        console.log('Audio not supported');
    }
}

// ===== Sound Toggle =====
const soundToggle = document.getElementById('sound-toggle');
if (soundToggle) {
    soundToggle.addEventListener('click', () => {
        soundEnabled = !soundEnabled;
        const label = soundToggle.querySelector('.sound-label');
        const icon = soundToggle.querySelector('.sound-icon');
        label.textContent = soundEnabled ? 'Sound: ON' : 'Sound: OFF';
        icon.textContent = soundEnabled ? '🔊' : '🔇';
        sounds.click();
    });
}

// ===== World Navigation System =====
const worldButtons = document.querySelectorAll('.world-btn');
const worlds = document.querySelectorAll('.world');
const worldHub = document.querySelector('.world-hub');
const portalCards = document.querySelectorAll('.portal-card');

function activateWorld(worldName) {
    sounds.whoosh();
    currentWorld = worldName;
    
    // Hide hub, show world
    if (worldHub) worldHub.style.display = 'none';
    
    worlds.forEach(world => {
        if (world.dataset.world === worldName) {
            world.classList.add('active');
            world.style.display = 'block';
            setTimeout(() => world.style.opacity = '1', 50);
        } else {
            world.classList.remove('active');
            world.style.opacity = '0';
            setTimeout(() => world.style.display = 'none', 600);
        }
    });
    
    // Update navigation
    worldButtons.forEach(btn => {
        if (btn.dataset.world === worldName) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// World button clicks
worldButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        activateWorld(btn.dataset.world);
    });
});

// Portal card clicks
portalCards.forEach(card => {
    card.addEventListener('click', () => {
        activateWorld(card.dataset.world);
    });
});

// ===== Vision Scoper Modal =====
const visionScoperBtn = document.getElementById('vision-scoper-btn');
const visionScoperModal = document.getElementById('vision-scoper-modal');
const modalClose = document.querySelector('.modal-close');
const modalOverlay = document.querySelector('.modal-overlay');

let scoperAnswers = [];

function openModal() {
    sounds.whoosh();
    visionScoperModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    sounds.click();
    visionScoperModal.classList.remove('active');
    document.body.style.overflow = '';
    // Reset scoper
    scoperAnswers = [];
    document.querySelectorAll('.scoper-step').forEach((step, i) => {
        if (i === 0) step.classList.add('active');
        else step.classList.remove('active');
    });
    document.querySelector('.scoper-result').classList.remove('active');
}

if (visionScoperBtn) {
    visionScoperBtn.addEventListener('click', openModal);
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
}

// Scoper options
const scoperOptions = document.querySelectorAll('.scoper-option');
scoperOptions.forEach(option => {
    option.addEventListener('click', () => {
        sounds.click();
        const value = option.dataset.value;
        const currentStep = document.querySelector('.scoper-step.active');
        const stepNumber = parseInt(currentStep.dataset.step);
        
        scoperAnswers.push(value);
        
        // Move to next step or show result
        if (stepNumber < 2) {
            currentStep.classList.remove('active');
            const nextStep = document.querySelector(`.scoper-step[data-step="${stepNumber + 1}"]`);
            nextStep.classList.add('active');
        } else {
            // Show result
            showScoperResult();
        }
    });
});

function showScoperResult() {
    const currentStep = document.querySelector('.scoper-step.active');
    currentStep.classList.remove('active');
    
    const result = document.querySelector('.scoper-result');
    const resultText = result.querySelector('.result-text');
    const resultCta = result.querySelector('.result-cta');
    
    // Determine recommendation based on answers
    let recommendation = {
        world: 'web',
        text: ''
    };
    
    if (scoperAnswers[0] === 'engage') {
        recommendation.world = 'web';
        recommendation.text = 'Based on your goals, you need a Creative Builder who understands the art of engagement. I recommend starting with the Web World, where we transformed user experiences and increased conversion rates by 200%.';
    } else if (scoperAnswers[0] === 'fortify') {
        recommendation.world = 'cloud';
        recommendation.text = 'Your infrastructure needs a Reliable Architect. Explore the Cloud World to see how we reduced costs by 70% while eliminating outages completely.';
    } else if (scoperAnswers[0] === 'unlock') {
        recommendation.world = 'ai';
        recommendation.text = 'You need a Visionary Innovator to unlock your data\'s potential. Visit the AI World to discover intelligent systems that create new possibilities.';
    }
    
    resultText.textContent = recommendation.text;
    resultCta.addEventListener('click', () => {
        closeModal();
        activateWorld(recommendation.world);
    });
    
    result.classList.add('active');
}

// Restart scoper
const restartScoper = document.querySelector('.restart-scoper');
if (restartScoper) {
    restartScoper.addEventListener('click', () => {
        scoperAnswers = [];
        document.querySelector('.scoper-result').classList.remove('active');
        const firstStep = document.querySelector('.scoper-step[data-step="1"]');
        firstStep.classList.add('active');
    });
}

// ===== Interactive Demos =====

// Play buttons for showcases
const playButtons = document.querySelectorAll('.play-btn');
playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        sounds.click();
        const card = e.target.closest('.showcase-card');
        alert(`Demo: ${card.querySelector('h3').textContent}\n\nThis would open an interactive full-screen demo!`);
    });
});

// Copy code buttons
const copyCodeButtons = document.querySelectorAll('.copy-code-btn');
copyCodeButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        sounds.click();
        const codeBlock = e.target.closest('.infra-card').querySelector('code');
        if (codeBlock) {
            navigator.clipboard.writeText(codeBlock.textContent);
            btn.textContent = 'Copied!';
            setTimeout(() => {
                btn.textContent = 'Copy';
            }, 2000);
        }
    });
});

// ===== Cloud Cost Calculator =====
const cloudSpendInput = document.getElementById('cloud-spend');
const unusedInstancesInput = document.getElementById('unused-instances');
const overProvisionedInput = document.getElementById('over-provisioned');
const calculateBtn = document.getElementById('calculate-savings');
const calcResult = document.querySelector('.calc-result');

function updateRangeValue(input) {
    const valueDisplay = input.parentElement.querySelector('.range-value');
    if (valueDisplay) {
        valueDisplay.textContent = input.value + '%';
    }
}

if (unusedInstancesInput) {
    unusedInstancesInput.addEventListener('input', (e) => updateRangeValue(e.target));
}

if (overProvisionedInput) {
    overProvisionedInput.addEventListener('input', (e) => updateRangeValue(e.target));
}

if (calculateBtn) {
    calculateBtn.addEventListener('click', () => {
        sounds.click();
        const spend = parseFloat(cloudSpendInput.value) || 0;
        const unused = parseFloat(unusedInstancesInput.value) / 100;
        const overProvisioned = parseFloat(overProvisionedInput.value) / 100;
        
        const savings = spend * (unused * 0.5 + overProvisioned * 0.3);
        const annualSavings = savings * 12;
        
        const savingsAmount = calcResult.querySelector('.savings-amount');
        const savingsNote = calcResult.querySelector('.savings-note strong');
        
        savingsAmount.textContent = '$' + Math.round(savings).toLocaleString();
        savingsNote.textContent = '$' + Math.round(annualSavings).toLocaleString();
        
        calcResult.classList.add('visible');
        
        // Animate the number
        animateNumber(savingsAmount, 0, Math.round(savings), 1000);
    });
}

function animateNumber(element, start, end, duration) {
    const startTime = performance.now();
    
    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = '$' + current.toLocaleString();
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    
    requestAnimationFrame(update);
}

// ===== AI Chatbot Demo =====
const chatInput = document.getElementById('chat-input');
const sendChatBtn = document.getElementById('send-chat');
const chatMessages = document.getElementById('chat-messages');

const aiResponses = [
    "That's a great question! Machine learning is all about teaching computers to learn from data.",
    "NLP (Natural Language Processing) helps computers understand human language. It's fascinating!",
    "Computer vision enables machines to interpret visual information from the world.",
    "I'm here to help! Ask me anything about AI, ML, or data science.",
    "Deep learning uses neural networks with multiple layers to solve complex problems.",
];

function addChatMessage(text, isBot = true) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${isBot ? 'bot' : 'user'}`;
    messageDiv.innerHTML = `
        <div class="message-avatar">${isBot ? '🤖' : '👤'}</div>
        <div class="message-content">${text}</div>
    `;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;
    
    sounds.click();
    addChatMessage(message, false);
    chatInput.value = '';
    
    // Simulate bot response with typing indicator
    setTimeout(() => {
        const response = aiResponses[Math.floor(Math.random() * aiResponses.length)];
        addChatMessage(response, true);
    }, 1000);
}

if (sendChatBtn) {
    sendChatBtn.addEventListener('click', sendMessage);
}

if (chatInput) {
    chatInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// ===== Sentiment Analysis Demo =====
const sentimentInput = document.getElementById('sentiment-input');
const analyzeSentimentBtn = document.getElementById('analyze-sentiment');
const sentimentResult = document.querySelector('.sentiment-result');

if (analyzeSentimentBtn) {
    analyzeSentimentBtn.addEventListener('click', () => {
        sounds.click();
        const text = sentimentInput.value.trim();
        if (!text) return;
        
        // Simple sentiment analysis (mock)
        const positiveWords = ['love', 'great', 'amazing', 'excellent', 'beautiful', 'wonderful', 'fantastic'];
        const negativeWords = ['hate', 'bad', 'terrible', 'awful', 'poor', 'horrible'];
        
        let score = 0.5; // neutral
        const words = text.toLowerCase().split(' ');
        
        words.forEach(word => {
            if (positiveWords.some(pw => word.includes(pw))) score += 0.1;
            if (negativeWords.some(nw => word.includes(nw))) score -= 0.1;
        });
        
        score = Math.max(0, Math.min(1, score));
        
        const meterFill = sentimentResult.querySelector('.meter-fill');
        const scoreValue = sentimentResult.querySelector('.score-value');
        
        meterFill.style.width = (score * 100) + '%';
        
        if (score > 0.6) {
            meterFill.className = 'meter-fill positive';
            scoreValue.textContent = 'Positive';
            scoreValue.style.color = 'var(--accent-secondary)';
        } else if (score < 0.4) {
            meterFill.className = 'meter-fill negative';
            scoreValue.textContent = 'Negative';
            scoreValue.style.color = 'var(--accent-color)';
        } else {
            meterFill.className = 'meter-fill neutral';
            scoreValue.textContent = 'Neutral';
            scoreValue.style.color = 'var(--text-muted)';
        }
        
        sentimentResult.classList.add('visible');
    });
}

// ===== ML Chart Visualization =====
const mlChart = document.getElementById('ml-chart');
const vizButtons = document.querySelectorAll('.viz-btn');

if (mlChart) {
    const ctx = mlChart.getContext('2d');
    
    function drawChart(type) {
        ctx.clearRect(0, 0, mlChart.width, mlChart.height);
        
        // Simple line chart
        ctx.strokeStyle = '#A78BFA';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        const points = type === 'accuracy' ? 
            [0.3, 0.5, 0.65, 0.75, 0.82, 0.88, 0.92, 0.95] :
            type === 'loss' ?
            [0.9, 0.7, 0.5, 0.35, 0.22, 0.15, 0.1, 0.07] :
            [0.6, 0.65, 0.7, 0.68, 0.72, 0.75, 0.78, 0.8];
        
        points.forEach((point, i) => {
            const x = (i / (points.length - 1)) * mlChart.width;
            const y = mlChart.height - (point * mlChart.height);
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        
        ctx.stroke();
        
        // Add points
        ctx.fillStyle = '#A78BFA';
        points.forEach((point, i) => {
            const x = (i / (points.length - 1)) * mlChart.width;
            const y = mlChart.height - (point * mlChart.height);
            ctx.beginPath();
            ctx.arc(x, y, 5, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
    drawChart('accuracy');
    
    vizButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            sounds.click();
            vizButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            drawChart(btn.dataset.viz);
        });
    });
}

// ===== AI Readiness Quiz =====
const aiScorecard = document.getElementById('ai-scorecard');
let quizAnswers = [];
let currentQuestion = 1;

const quizQuestions = document.querySelectorAll('.quiz-question');
const quizOptions = document.querySelectorAll('.quiz-option');

quizOptions.forEach(option => {
    option.addEventListener('click', () => {
        sounds.click();
        const value = parseInt(option.dataset.value);
        quizAnswers.push(value);
        
        const current = document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`);
        current.classList.remove('active');
        
        if (currentQuestion < 5) {
            currentQuestion++;
            const next = document.querySelector(`.quiz-question[data-question="${currentQuestion}"]`);
            next.classList.add('active');
        } else {
            showQuizResult();
        }
    });
});

function showQuizResult() {
    const totalScore = quizAnswers.reduce((a, b) => a + b, 0);
    const result = document.querySelector('.quiz-result');
    const scoreNumber = result.querySelector('.score-number');
    const feedbackText = result.querySelector('.feedback-text');
    const recommendationsList = result.querySelector('.recommendations-list');
    
    scoreNumber.textContent = totalScore;
    
    let feedback, recommendations;
    
    if (totalScore >= 12) {
        feedback = "🌟 Excellent! Your organization is highly AI-ready. You have the foundation, expertise, and infrastructure to implement advanced AI solutions immediately.";
        recommendations = [
            "Begin with a pilot AI project in your strongest area",
            "Scale successful models across the organization",
            "Invest in advanced AI research and development",
            "Build internal AI centers of excellence"
        ];
    } else if (totalScore >= 8) {
        feedback = "✨ Good Progress! You're on the right track. With some focused effort on data quality and team skills, you'll be ready for AI implementation.";
        recommendations = [
            "Invest in data cleaning and structuring",
            "Provide AI training for your team",
            "Start with simple ML models and build up",
            "Establish clear AI use cases and ROI metrics"
        ];
    } else {
        feedback = "🚀 Getting Started! You're in the exploration phase. Focus on building your foundation before diving into complex AI projects.";
        recommendations = [
            "Begin collecting and organizing your data",
            "Build AI awareness in your organization",
            "Start with AI-powered tools and services",
            "Hire or consult with AI experts",
            "Define clear business problems AI could solve"
        ];
    }
    
    feedbackText.textContent = feedback;
    recommendationsList.innerHTML = recommendations.map(rec => `<li>${rec}</li>`).join('');
    
    result.classList.add('active');
}

const restartQuizBtn = document.querySelector('.restart-quiz');
if (restartQuizBtn) {
    restartQuizBtn.addEventListener('click', () => {
        quizAnswers = [];
        currentQuestion = 1;
        document.querySelector('.quiz-result').classList.remove('active');
        document.querySelector('.quiz-question[data-question="1"]').classList.add('active');
    });
}

// ===== Neural Network Canvas Animation =====
const neuralCanvas = document.getElementById('neural-network-canvas');

if (neuralCanvas) {
    const ctx = neuralCanvas.getContext('2d');
    let particles = [];
    let mouse = { x: 0, y: 0 };
    
    // Create particles
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * neuralCanvas.width,
            y: Math.random() * neuralCanvas.height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            radius: Math.random() * 3 + 1
        });
    }
    
    neuralCanvas.addEventListener('mousemove', (e) => {
        const rect = neuralCanvas.getBoundingClientRect();
        mouse.x = e.clientX - rect.left;
        mouse.y = e.clientY - rect.top;
    });
    
    function drawNeuralNetwork() {
        ctx.fillStyle = '#1e2530';
        ctx.fillRect(0, 0, neuralCanvas.width, neuralCanvas.height);
        
        // Update and draw particles
        particles.forEach((p, i) => {
            p.x += p.vx;
            p.y += p.vy;
            
            // Bounce off edges
            if (p.x < 0 || p.x > neuralCanvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > neuralCanvas.height) p.vy *= -1;
            
            // Mouse interaction
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < 100) {
                p.x -= dx * 0.01;
                p.y -= dy * 0.01;
            }
            
            // Draw particle
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = '#A78BFA';
            ctx.fill();
            
            // Draw connections
            particles.slice(i + 1).forEach(p2 => {
                const dx = p2.x - p.x;
                const dy = p2.y - p.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.strokeStyle = `rgba(167, 139, 250, ${1 - dist / 150})`;
                    ctx.lineWidth = 1;
                    ctx.stroke();
                }
            });
        });
        
        requestAnimationFrame(drawNeuralNetwork);
    }
    
    drawNeuralNetwork();
}

// ===== Download Resource Handlers =====
const downloadResourceBtns = document.querySelectorAll('.download-resource');
downloadResourceBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        sounds.click();
        const resource = btn.dataset.resource;
        alert(`Downloading: ${resource}\n\nIn a real implementation, this would download a beautifully designed PDF!`);
    });
});

// ===== Navigation & Scroll Effects =====
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// ===== Intersection Observer for Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
fadeElements.forEach(el => observer.observe(el));

// ===== Initialize on Load =====
document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Magnetic Portfolio initialized!');
    console.log('🌐 Web | ☁️ Cloud | 🤖 AI');
    
    // Show loading screen briefly
    const loadingScreen = document.querySelector('.loading-screen');
    if (loadingScreen) {
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            setTimeout(() => loadingScreen.remove(), 500);
        }, 500);
    }
    
    // Initialize first world
    if (worldHub) {
        worldHub.style.display = 'block';
    }
});

// ===== Contact Form =====
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        sounds.click();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        const mailtoLink = `mailto:hello@jamesdesign.me?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(name)} (${encodeURIComponent(email)})`;
        window.location.href = mailtoLink;
        
        contactForm.reset();
    });
}

console.log('%c✨ Magnetic Portfolio Experience Active ✨', 'font-size: 20px; font-weight: bold; color: #A78BFA;');
