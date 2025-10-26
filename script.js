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
    
    // Create world-specific transition overlay
    const portalOverlay = document.createElement('div');
    portalOverlay.className = 'portal-transition-overlay';
    portalOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9999;
        pointer-events: none;
    `;
    
    // World-specific transition effects
    if (worldName === 'web') {
        // 90s pixel dissolve effect
        portalOverlay.style.background = 'repeating-conic-gradient(#0000FF 0% 25%, #C0C0C0 0% 50%) 50% / 20px 20px';
        portalOverlay.style.animation = 'pixelDissolve 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards';
    } else if (worldName === 'cloud') {
        // 70s blueprint wipe
        portalOverlay.style.background = 'linear-gradient(90deg, #0D1B2A 0%, transparent 100%)';
        portalOverlay.style.animation = 'blueprintWipe 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards';
    } else if (worldName === 'ai') {
        // 80s neon flash
        portalOverlay.style.background = 'radial-gradient(circle, #FF006E, #00F5FF, #9D4EDD)';
        portalOverlay.style.animation = 'neonFlash 0.8s cubic-bezier(0.19, 1, 0.22, 1) forwards';
    }
    
    document.body.appendChild(portalOverlay);
    
    setTimeout(() => portalOverlay.remove(), 800);
    
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

// ===== Notification System =====
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.custom-notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `custom-notification notification-${type}`;
    notification.textContent = message;
    
    Object.assign(notification.style, {
        position: 'fixed',
        top: '100px',
        right: '20px',
        padding: '1rem 1.5rem',
        backgroundColor: type === 'success' ? 'var(--accent-secondary)' : 'var(--primary-color)',
        color: 'white',
        borderRadius: 'var(--radius-md)',
        boxShadow: 'var(--shadow-lg)',
        zIndex: '10001',
        animation: 'slideInRight 0.3s ease',
        maxWidth: '400px',
        fontFamily: 'var(--font-primary)',
        fontSize: '0.95rem'
    });
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add notification animations
if (!document.querySelector('#notification-styles')) {
    const style = document.createElement('style');
    style.id = 'notification-styles';
    style.textContent = `
        @keyframes slideInRight {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(400px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== Interactive Demos =====

// Play buttons for showcases
const playButtons = document.querySelectorAll('.play-btn');
playButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        sounds.click();
        const demoType = btn.dataset.demoType;
        const card = e.target.closest('.showcase-card');
        
        if (demoType === 'drag-drop') {
            activateDragDrop(card);
            btn.textContent = 'Active ✓';
            btn.style.background = 'var(--accent-secondary)';
        } else if (demoType === 'component-library') {
            activateComponentDemo(card);
        } else if (demoType === 'css-art') {
            const shape = card.querySelector('.morphing-shape');
            shape.style.animationPlayState = shape.style.animationPlayState === 'paused' ? 'running' : 'paused';
        } else {
            const demoTitle = card.querySelector('h3').textContent;
            showNotification(`🎮 ${demoTitle} demo would open here in full-screen mode!`, 'info');
        }
    });
});

// Activate drag and drop
function activateDragDrop(card) {
    const draggableCards = card.querySelectorAll('.draggable-card');
    const dropZone = card.querySelector('.drop-zone');
    
    draggableCards.forEach(draggable => {
        draggable.setAttribute('draggable', 'true');
        
        draggable.addEventListener('dragstart', (e) => {
            draggable.classList.add('dragging');
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/html', draggable.innerHTML);
        });
        
        draggable.addEventListener('dragend', () => {
            draggable.classList.remove('dragging');
        });
    });
    
    dropZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(dropZone, e.clientY);
        const dragging = dropZone.querySelector('.dragging');
        if (afterElement == null) {
            dropZone.appendChild(dragging);
        } else {
            dropZone.insertBefore(dragging, afterElement);
        }
    });
}

function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('.draggable-card:not(.dragging)')];
    
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// Activate component library demo
function activateComponentDemo(card) {
    const toggleSwitch = card.querySelector('.toggle-switch');
    const toggleSlider = toggleSwitch.querySelector('.toggle-slider');
    const demoButtons = card.querySelectorAll('.demo-button');
    
    let isDark = false;
    
    toggleSwitch.addEventListener('click', () => {
        sounds.click();
        isDark = !isDark;
        
        if (isDark) {
            toggleSlider.style.transform = 'translateX(24px)';
            toggleSwitch.style.background = 'var(--primary-color)';
            card.querySelector('.component-demo').style.background = '#1a1f2e';
            demoButtons.forEach(btn => {
                btn.style.filter = 'brightness(1.2)';
            });
        } else {
            toggleSlider.style.transform = 'translateX(0)';
            toggleSwitch.style.background = 'var(--bg-tertiary)';
            card.querySelector('.component-demo').style.background = 'var(--bg-tertiary)';
            demoButtons.forEach(btn => {
                btn.style.filter = 'none';
            });
        }
    });
}

// Testimonials Carousel
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const carouselDots = document.querySelectorAll('.carousel-dots .dot');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');

function showTestimonial(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
    
    carouselDots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        sounds.click();
        currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        sounds.click();
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    });
}

carouselDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        sounds.click();
        currentTestimonial = index;
        showTestimonial(currentTestimonial);
    });
});

// Auto-rotate testimonials
let testimonialInterval = setInterval(() => {
    if (testimonialCards.length > 0) {
        currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
        showTestimonial(currentTestimonial);
    }
}, 5000);

// Pause on hover
document.querySelector('.testimonials-carousel')?.addEventListener('mouseenter', () => {
    clearInterval(testimonialInterval);
});

document.querySelector('.testimonials-carousel')?.addEventListener('mouseleave', () => {
    testimonialInterval = setInterval(() => {
        if (testimonialCards.length > 0) {
            currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
            showTestimonial(currentTestimonial);
        }
    }, 5000);
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

// Pipeline Simulation
const simulatePipelineBtn = document.querySelector('.simulate-pipeline');
if (simulatePipelineBtn) {
    simulatePipelineBtn.addEventListener('click', () => {
        sounds.click();
        const stages = document.querySelectorAll('.pipeline-stage');
        const statuses = document.querySelectorAll('.stage-status');
        
        // Reset all stages
        stages.forEach((stage, index) => {
            stage.style.transform = 'scale(1)';
            stage.style.borderColor = 'transparent';
            statuses[index].style.background = 'var(--bg-tertiary)';
            statuses[index].textContent = '●';
        });
        
        // Animate stages sequentially
        stages.forEach((stage, index) => {
            setTimeout(() => {
                stage.style.transform = 'scale(1.1)';
                stage.style.borderColor = 'var(--cloud-color)';
                statuses[index].style.background = 'var(--accent-secondary)';
                statuses[index].textContent = '✓';
                sounds.whoosh();
                
                setTimeout(() => {
                    stage.style.transform = 'scale(1)';
                }, 300);
            }, index * 800);
        });
        
        // Show completion notification
        setTimeout(() => {
            showNotification('✅ Pipeline completed successfully! All stages passed.', 'success');
        }, stages.length * 800);
    });
}

// Metrics Dashboard Animation
function animateMetrics() {
    const metricValues = document.querySelectorAll('[data-metric]');
    
    metricValues.forEach(metric => {
        const metricType = metric.dataset.metric;
        
        // Animate counter for deploys
        if (metricType === 'deploys') {
            let count = 0;
            const target = 42;
            const interval = setInterval(() => {
                count += 2;
                metric.textContent = count;
                if (count >= target) {
                    metric.textContent = target;
                    clearInterval(interval);
                }
            }, 50);
        }
    });
    
    // Draw sparkline
    const sparklineCanvas = document.getElementById('uptime-sparkline');
    if (sparklineCanvas) {
        const ctx = sparklineCanvas.getContext('2d');
        const data = [99.95, 99.97, 99.99, 99.98, 99.99, 99.99, 100, 99.99];
        
        ctx.strokeStyle = '#34D399';
        ctx.lineWidth = 2;
        ctx.beginPath();
        
        data.forEach((value, i) => {
            const x = (i / (data.length - 1)) * sparklineCanvas.width;
            const y = sparklineCanvas.height - ((value - 99.9) / 0.1 * sparklineCanvas.height);
            
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        
        ctx.stroke();
        
        // Fill area under line
        ctx.lineTo(sparklineCanvas.width, sparklineCanvas.height);
        ctx.lineTo(0, sparklineCanvas.height);
        ctx.closePath();
        ctx.fillStyle = 'rgba(52, 211, 153, 0.1)';
        ctx.fill();
    }
}

// Run metrics animation when metrics dashboard is visible
const metricsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateMetrics();
            metricsObserver.unobserve(entry.target);
        }
    });
});

const metricsDashboard = document.querySelector('.metrics-dashboard');
if (metricsDashboard) {
    metricsObserver.observe(metricsDashboard);
}

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
        const resourceNames = {
            'ux-checklist': '10-Point UX/UI Pre-Flight Checklist'
        };
        const resourceName = resourceNames[resource] || resource;
        showNotification(`📥 Downloading ${resourceName}... In production, this would be a beautifully designed PDF!`, 'success');
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

// ===== Vintage Carousel =====
const vintageCarouselModal = document.getElementById('vintage-carousel-modal');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const carouselPrev = document.querySelector('.carousel-prev');
const carouselNext = document.querySelector('.carousel-next');
const carouselIndicators = document.querySelectorAll('.indicator');
const carouselModalClose = document.querySelector('.carousel-modal-close');
const carouselOverlay = document.querySelector('.carousel-overlay');

let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

// Open carousel when Vision Scoper button is clicked
if (visionScoperBtn && vintageCarouselModal) {
    visionScoperBtn.addEventListener('click', (e) => {
        // Instead of opening the scoper modal, open the carousel
        e.stopPropagation();
        openVintageCarousel();
    });
}

function openVintageCarousel() {
    sounds.whoosh();
    vintageCarouselModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    showSlide(0);
}

function closeVintageCarousel() {
    sounds.click();
    vintageCarouselModal.classList.remove('active');
    document.body.style.overflow = '';
}

if (carouselModalClose) {
    carouselModalClose.addEventListener('click', closeVintageCarousel);
}

if (carouselOverlay) {
    carouselOverlay.addEventListener('click', closeVintageCarousel);
}

function showSlide(index) {
    // Ensure index is within bounds
    currentSlide = ((index % carouselSlides.length) + carouselSlides.length) % carouselSlides.length;
    
    carouselSlides.forEach((slide, i) => {
        slide.classList.remove('active', 'prev', 'turning-out', 'turning-in');
        
        if (i === currentSlide) {
            slide.classList.add('active');
        } else if (i < currentSlide) {
            slide.classList.add('prev');
        }
    });
    
    // Update indicators
    carouselIndicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentSlide);
    });
}

function nextSlide() {
    sounds.click();
    
    const current = carouselSlides[currentSlide];
    current.classList.add('turning-out');
    
    setTimeout(() => {
        showSlide(currentSlide + 1);
        const next = carouselSlides[currentSlide];
        next.classList.add('turning-in');
        
        setTimeout(() => {
            next.classList.remove('turning-in');
        }, 800);
    }, 400);
}

function prevSlide() {
    sounds.click();
    
    const current = carouselSlides[currentSlide];
    current.classList.add('turning-out');
    
    setTimeout(() => {
        showSlide(currentSlide - 1);
        const prev = carouselSlides[currentSlide];
        prev.classList.add('turning-in');
        
        setTimeout(() => {
            prev.classList.remove('turning-in');
        }, 800);
    }, 400);
}

if (carouselNext) {
    carouselNext.addEventListener('click', nextSlide);
}

if (carouselPrev) {
    carouselPrev.addEventListener('click', prevSlide);
}

// Indicator clicks
carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        sounds.click();
        showSlide(index);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!vintageCarouselModal.classList.contains('active')) return;
    
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        prevSlide();
    } else if (e.key === 'Escape') {
        closeVintageCarousel();
    }
});

// Touch swipe support
const carouselContainer = document.querySelector('.vintage-carousel-container');
if (carouselContainer) {
    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
}

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide
            nextSlide();
        } else {
            // Swipe right - previous slide
            prevSlide();
        }
    }
}

// Slide click navigation
carouselSlides.forEach((slide) => {
    slide.addEventListener('click', () => {
        const target = slide.dataset.target;
        if (target) {
            closeVintageCarousel();
            
            setTimeout(() => {
                if (target === 'home') {
                    // Navigate to home
                    if (worldHub) worldHub.style.display = 'block';
                    worlds.forEach(w => {
                        w.classList.remove('active');
                        w.style.display = 'none';
                    });
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if (target.includes('world')) {
                    // Navigate to specific world
                    const worldName = target.replace('-world', '');
                    activateWorld(worldName);
                } else {
                    // Navigate to section
                    const section = document.getElementById(target);
                    if (section) {
                        section.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }, 300);
        }
    });
});

console.log('%c✨ Magnetic Portfolio Experience Active ✨', 'font-size: 20px; font-weight: bold; color: #A78BFA;');
