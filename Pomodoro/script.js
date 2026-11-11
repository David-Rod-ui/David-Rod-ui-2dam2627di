// --- Translations ---
const translations = {
    es: {
        appTitle: "Pomodoro", focusMode: "Concentración", breakMode: "Descanso",
        sportTime: "¡Tiempo de Deporte!", focusInput: "Concentración", breakInput: "Descanso", sessionsInput: "Sesiones",
        scrollDown: "Desliza abajo", infoTitle: "El Método Pomodoro", whatIsTitle: "¿Qué es?",
        whatIsDesc: "El método Pomodoro es una técnica de gestión del tiempo desarrollada por Francesco Cirillo a fines de la década de 1980. Utiliza un temporizador para dividir el trabajo en intervalos de concentración profunda, tradicionalmente de 25 minutos, separados por breves descansos. Esto maximiza la agilidad mental y reduce la fatiga.",
        howToTitle: "¿Cómo usar esta app?", 
        step1: "Anota tus tareas en la libreta. Selecciona las que vayas a realizar para moverlas al panel principal (tareas activas).",
        step2: "Configura el tiempo de concentración, descanso y el número de sesiones usando los controles (+/-).", 
        step3: "Trabaja concentrado en tus tareas activas. Cuando termines una, márcala en el panel principal para enviarla a la libreta como completada.",
        step4: "Al sonar la alarma, toma un descanso. Usa el modo 'Deporte' o 'Juego' para desconectar activamente.",
        step5: "Tras completar el ciclo de sesiones (por defecto 4), tómate un descanso largo de 15-30 minutos para recargar energías.", 
        settingsTitle: "Ajustes",
        darkMode: "Modo Oscuro", bgImage: "Fondo Fotográfico", bgMusic: "Música",
        modeNormal: "Normal", modeSport: "Deporte", modeGame: "Juego",
        language: "Idioma", tasksTitle: "Tareas", newTaskPlaceholder: "Nueva tarea...", sessionText: "Sesión",
        dinoControls: "Espacio / Clic para saltar", dinoRestart: "Reiniciar", dinoGameTitle: "Square Jump",
        longBreakMsg: "¡Ciclo completado! Tómate un descanso largo.",
        exercises: ['Sentadillas', 'Flexiones', 'Dominadas']
    },
    en: {
        appTitle: "Pomodoro", focusMode: "Focus", breakMode: "Break",
        sportTime: "Sport Time!", focusInput: "Focus", breakInput: "Break", sessionsInput: "Sessions",
        scrollDown: "Scroll down", infoTitle: "The Pomodoro Technique", whatIsTitle: "What is it?",
        whatIsDesc: "The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. It uses a timer to break down work into intervals of deep focus, traditionally 25 minutes in length, separated by short breaks. This maximizes mental agility and reduces fatigue.",
        howToTitle: "How to use this app?", 
        step1: "Write down your tasks in the notebook. Select the ones you plan to do to move them to the main screen (active tasks).",
        step2: "Set the focus time, break time, and number of sessions using the (+/-) controls.", 
        step3: "Work focused on your active tasks. When finished, check them off on the main screen to send them back to the notebook as completed.",
        step4: "When the alarm rings, take a break. Use the 'Sport' or 'Game' mode to actively disconnect.",
        step5: "After completing a cycle of sessions (default 4), take a long break of 15-30 minutes to recharge.", 
        settingsTitle: "Settings",
        darkMode: "Dark Mode", bgImage: "Photo Background", bgMusic: "Music",
        modeNormal: "Normal", modeSport: "Sport", modeGame: "Game",
        language: "Language", tasksTitle: "Tasks", newTaskPlaceholder: "New task...", sessionText: "Session",
        dinoControls: "Space / Click to jump", dinoRestart: "Restart", dinoGameTitle: "Square Jump",
        longBreakMsg: "Cycle completed! Take a long break.",
        exercises: ['Squats', 'Push-ups', 'Pull-ups']
    },
    fr: {
        appTitle: "Pomodoro", focusMode: "Concentration", breakMode: "Pause",
        sportTime: "Temps de Sport !", focusInput: "Concentration", breakInput: "Pause", sessionsInput: "Sessions",
        scrollDown: "Défiler vers le bas", infoTitle: "La Technique Pomodoro", whatIsTitle: "Qu'est-ce que c'est ?",
        whatIsDesc: "La technique Pomodoro est une méthode de gestion du temps développée par Francesco Cirillo à la fin des années 1980. Elle utilise un minuteur pour diviser le travail en intervalles de concentration profonde, traditionnellement de 25 minutes, séparés par de courtes pauses. Cela maximise l'agilité mentale et réduit la fatigue.",
        howToTitle: "Comment utiliser ?", 
        step1: "Notez vos tâches dans le carnet. Sélectionnez celles que vous allez faire pour les déplacer vers l'écran principal (tâches actives).",
        step2: "Réglez le temps de concentration, de pause et le nombre de sessions avec les contrôles (+/-).", 
        step3: "Travaillez concentré sur vos tâches actives. Une fois terminées, cochez-les sur l'écran principal pour les renvoyer au carnet comme terminées.",
        step4: "Lorsque l'alarme sonne, prenez une pause. Utilisez le mode 'Sport' ou 'Jeu' pour vous déconnecter activement.",
        step5: "Après avoir terminé un cycle de sessions (4 par défaut), prenez une longue pause de 15 à 30 minutes pour vous ressourcer.", 
        settingsTitle: "Paramètres",
        darkMode: "Mode Sombre", bgImage: "Fond Photo", bgMusic: "Musique",
        modeNormal: "Normal", modeSport: "Sport", modeGame: "Jeu",
        language: "Langue", tasksTitle: "Tâches", newTaskPlaceholder: "Nouvelle tâche...", sessionText: "Session",
        dinoControls: "Espace / Clic pour sauter", dinoRestart: "Rejouer", dinoGameTitle: "Square Jump",
        longBreakMsg: "Cycle terminé ! Prenez une longue pause.",
        exercises: ['Squats', 'Pompes', 'Tractions']
    },
    zh: {
        appTitle: "番茄工作法", focusMode: "专注", breakMode: "休息",
        sportTime: "运动时间！", focusInput: "专注", breakInput: "休息", sessionsInput: "阶段",
        scrollDown: "向下滚动", infoTitle: "番茄工作法", whatIsTitle: "它是什么？",
        whatIsDesc: "番茄工作法是弗朗西斯科·西里洛在20世纪80年代末开发的一种时间管理方法。它使用计时器将工作划分为深度专注的时间段（通常为25分钟），中间穿插着短暂的休息。这可以最大限度地提高思维敏捷度并减少疲劳。",
        howToTitle: "如何使用此应用程序？", 
        step1: "在笔记本中记下您的任务。选择您要做的任务，将它们移动到主屏幕（活动任务）。",
        step2: "使用 (+/-) 控件设置专注时间、休息时间和阶段数。", 
        step3: "专注于您的活动任务。完成后，在主屏幕上勾选它们，将其作为已完成任务发送回笔记本。",
        step4: "闹钟响起时，休息一下。使用“运动”或“游戏”模式来积极放松。",
        step5: "完成一个循环（默认为4个阶段）后，进行15-30分钟的长休息以恢复精力。", 
        settingsTitle: "设置",
        darkMode: "黑暗模式", bgImage: "照片背景", bgMusic: "背景音乐",
        modeNormal: "正常", modeSport: "运动", modeGame: "游戏",
        language: "语言", tasksTitle: "任务", newTaskPlaceholder: "新任务...", sessionText: "阶段",
        dinoControls: "空格 / 点击 跳跃", dinoRestart: "重新开始", dinoGameTitle: "Square Jump",
        longBreakMsg: "循环完成！好好休息一下。",
        exercises: ['深蹲', '俯卧撑', '引体向上']
    }
};

// --- State ---
let currentLang = 'es';
let isDarkMode = true;
let isBgImageActive = true;
let isMusicActive = true; // ON by default
let activeBreakMode = 'normal'; // 'normal', 'sport', 'game'

let timerInterval;
let isRunning = false;
let isFocusMode = true; // true: Focus, false: Break
let timeRemaining = 25 * 60;
let totalCurrentTime = 25 * 60;
let currentSession = 1;
let totalSessions = 4;
let tasks = []; // Objects use { id, text, status: 'pending' | 'active' | 'completed' }

// SVG Circle Configuration (r=120 -> 2 * PI * 120 = 753.98)
const progressRing = document.getElementById('progress-circle');
const CIRCUMFERENCE = 753.98;
progressRing.style.strokeDasharray = CIRCUMFERENCE;

// --- DOM Elements ---
const body = document.body;
const html = document.documentElement;
const bgMusic = document.getElementById('bg-music');
const timeDisplay = document.getElementById('time-display');
const sessionTextDisplay = document.getElementById('session-text');
const sessionContent = document.getElementById('session-content');
const sessionCheckDisplay = document.getElementById('session-check');
const toastLongBreak = document.getElementById('toast-long-break');
const btnCloseToast = document.getElementById('btn-close-toast');
const modeText = document.getElementById('mode-text');
const segBtns = document.querySelectorAll('.seg-btn');

const btnStart = document.getElementById('btn-start');
const btnPause = document.getElementById('btn-pause');
const btnSkip = document.getElementById('btn-skip');
const btnReset = document.getElementById('btn-reset');

const inputFocus = document.getElementById('input-focus');
const inputBreak = document.getElementById('input-break');
const inputSessions = document.getElementById('input-sessions');

const sportContainer = document.getElementById('sport-exercise-container');
const sportExerciseText = document.getElementById('sport-exercise-text');
const dinoGameContainer = document.getElementById('dino-game-container');

const modalSettings = document.getElementById('modal-settings');
const modalTasks = document.getElementById('modal-tasks');
const btnSettings = document.getElementById('btn-settings');
const btnTasks = document.getElementById('btn-tasks');
const closeBtns = document.querySelectorAll('.close-modal');

const toggleTheme = document.getElementById('toggle-theme');
const toggleBg = document.getElementById('toggle-bg');
const toggleMusic = document.getElementById('toggle-music');
const selectLang = document.getElementById('select-lang');

const formTask = document.getElementById('form-add-task');
const inputNewTask = document.getElementById('input-new-task');
const taskList = document.getElementById('task-list');
const activeTasksList = document.getElementById('active-tasks-list');

// --- Background Music Logic (ON by default) ---
function tryPlayMusic() {
    if (isMusicActive && bgMusic.paused) {
        bgMusic.play().catch(() => {
            // Browser blocked autoplay before user interaction; will retry on first click/keydown
        });
    }
}

// Attempt playback immediately on load
window.addEventListener('DOMContentLoaded', tryPlayMusic);

// Fallback listener for first user interaction if browser blocks initial autoplay
function unlockAudioOnInteraction() {
    if (isMusicActive && bgMusic.paused) {
        bgMusic.play().catch(() => {});
    }
    document.removeEventListener('click', unlockAudioOnInteraction);
    document.removeEventListener('keydown', unlockAudioOnInteraction);
}
document.addEventListener('click', unlockAudioOnInteraction);
document.addEventListener('keydown', unlockAudioOnInteraction);

toggleMusic.addEventListener('change', (e) => {
    isMusicActive = e.target.checked;
    if (isMusicActive) {
        bgMusic.play().catch(() => {});
    } else {
        bgMusic.pause();
    }
});

// --- Core Functions ---
function updateI18n() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
    });
    inputNewTask.placeholder = translations[currentLang].newTaskPlaceholder;
    updateSessionDisplay();
    modeText.textContent = isFocusMode ? translations[currentLang].focusMode : translations[currentLang].breakMode;
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function updateTimerDisplay() {
    timeDisplay.textContent = formatTime(timeRemaining);
    const progress = totalCurrentTime > 0 ? (timeRemaining / totalCurrentTime) : 0;
    const offset = CIRCUMFERENCE - (progress * CIRCUMFERENCE);
    progressRing.style.strokeDashoffset = offset;
    
    if (isFocusMode) {
        progressRing.classList.remove('text-breakMode');
        progressRing.classList.add('text-primary');
        modeText.classList.remove('text-breakMode');
        modeText.classList.add('text-[#639bff]', 'dark:text-[#639bff]');
    } else {
        progressRing.classList.remove('text-primary');
        progressRing.classList.add('text-breakMode');
        modeText.classList.remove('text-[#639bff]', 'dark:text-[#639bff]');
        modeText.classList.add('text-breakMode');
    }
}

function updateSessionDisplay() {
    sessionTextDisplay.textContent = `${currentSession}/${totalSessions}`;
    if (currentSession > totalSessions && !isFocusMode) {
        sessionContent.classList.add('hidden');
        sessionCheckDisplay.classList.remove('hidden');
        showToast();
    } else {
        sessionContent.classList.remove('hidden');
        sessionCheckDisplay.classList.add('hidden');
    }
}

function showToast() {
    toastLongBreak.classList.remove('translate-y-32', 'opacity-0');
}

function hideToast() {
    toastLongBreak.classList.add('translate-y-32', 'opacity-0');
}

btnCloseToast.addEventListener('click', hideToast);

function switchPhase() {
    if (isFocusMode) {
        isFocusMode = false;
        totalSessions = parseInt(inputSessions.value) || 4;
        let bTime = parseInt(inputBreak.value) || 5;
        timeRemaining = bTime * 60;
        totalCurrentTime = timeRemaining;
        
        if (activeBreakMode === 'sport' && currentSession <= totalSessions) {
            const exArray = translations[currentLang].exercises;
            const ex = exArray[Math.floor(Math.random() * exArray.length)];
            sportExerciseText.innerHTML = `<i class="fas fa-dumbbell text-breakMode"></i> <span>${ex}</span>`;
            sportContainer.classList.remove('hidden');
        } else {
            sportContainer.classList.add('hidden');
        }
        
        if (activeBreakMode === 'game' && currentSession <= totalSessions) {
            dinoGameContainer.classList.remove('hidden');
            startDinoGame();
        }

        currentSession++;
    } else {
        isFocusMode = true;
        if (currentSession > totalSessions) {
            currentSession = 1;
            hideToast();
            pauseTimer();
        }
        let fTime = parseInt(inputFocus.value) || 25;
        timeRemaining = fTime * 60;
        totalCurrentTime = timeRemaining;
        
        sportContainer.classList.add('hidden');
        dinoGameContainer.classList.add('hidden');
        stopDinoGame();
    }
    updateI18n();
    updateSessionDisplay();
    updateTimerDisplay();
}

// --- Controls ---
function startTimer() {
    if (isRunning) return;
    if (currentSession > totalSessions && !isFocusMode) return;
    
    if (timeRemaining === totalCurrentTime && isFocusMode && currentSession === 1) {
        totalSessions = parseInt(inputSessions.value) || 4;
        timeRemaining = (parseInt(inputFocus.value) || 25) * 60;
        totalCurrentTime = timeRemaining;
        updateSessionDisplay();
    }
    isRunning = true;
    timerInterval = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimerDisplay();
        } else {
            switchPhase();
        }
    }, 1000);
    
    btnStart.classList.add('opacity-50', 'pointer-events-none');
    btnPause.classList.remove('opacity-50', 'pointer-events-none');
}

function pauseTimer() {
    if (!isRunning) return;
    isRunning = false;
    clearInterval(timerInterval);
    btnStart.classList.remove('opacity-50', 'pointer-events-none');
    btnPause.classList.add('opacity-50', 'pointer-events-none');
}

btnStart.addEventListener('click', startTimer);
btnPause.addEventListener('click', pauseTimer);
btnSkip.addEventListener('click', switchPhase);
btnReset.addEventListener('click', () => {
    pauseTimer();
    isFocusMode = true;
    currentSession = 1;
    totalSessions = parseInt(inputSessions.value) || 4;
    timeRemaining = (parseInt(inputFocus.value) || 25) * 60;
    totalCurrentTime = timeRemaining;
    sportContainer.classList.add('hidden');
    dinoGameContainer.classList.add('hidden');
    stopDinoGame();
    updateI18n();
    updateSessionDisplay();
    updateTimerDisplay();
});

// --- Steppers Logic ---
document.querySelectorAll('.step-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const delta = parseInt(btn.getAttribute('data-delta'));
        const input = document.getElementById(targetId);
        let val = parseInt(input.value) + delta;
        if (val < parseInt(input.min)) val = parseInt(input.min);
        if (val > parseInt(input.max)) val = parseInt(input.max);
        input.value = val;
        
        if (!isRunning) {
            if (targetId === 'input-focus' && isFocusMode) {
                timeRemaining = val * 60;
                totalCurrentTime = timeRemaining;
                updateTimerDisplay();
            } else if (targetId === 'input-break' && !isFocusMode) {
                timeRemaining = val * 60;
                totalCurrentTime = timeRemaining;
                updateTimerDisplay();
            } else if (targetId === 'input-sessions') {
                totalSessions = val;
                updateSessionDisplay();
            }
        }
    });
});

// --- Modals & Settings ---
function toggleModal(modal, show) {
    if (show) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        setTimeout(() => { modal.classList.remove('opacity-0'); modal.querySelector('div').classList.remove('scale-95'); }, 10);
    } else {
        modal.classList.add('opacity-0');
        modal.querySelector('div').classList.add('scale-95');
        setTimeout(() => { modal.classList.remove('flex'); modal.classList.add('hidden'); }, 200);
    }
}
btnSettings.addEventListener('click', () => toggleModal(modalSettings, true));
btnTasks.addEventListener('click', () => toggleModal(modalTasks, true));
closeBtns.forEach(btn => btn.addEventListener('click', (e) => toggleModal(e.target.closest('.fixed'), false)));

segBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        segBtns.forEach(b => {
            b.classList.remove('seg-btn-active');
            b.classList.add('text-gray-600', 'dark:text-[#8b9bb4]', 'hover:text-gray-900', 'dark:hover:text-white');
        });
        btn.classList.add('seg-btn-active');
        btn.classList.remove('text-gray-600', 'dark:text-[#8b9bb4]', 'hover:text-gray-900', 'dark:hover:text-white');
        
        activeBreakMode = btn.getAttribute('data-mode');
    });
});

toggleTheme.addEventListener('change', (e) => {
    isDarkMode = e.target.checked;
    isDarkMode ? html.classList.add('dark') : html.classList.remove('dark');
});
toggleBg.addEventListener('change', (e) => {
    isBgImageActive = e.target.checked;
    isBgImageActive ? body.classList.add('bg-image-active') : body.classList.remove('bg-image-active');
});
selectLang.addEventListener('change', (e) => { currentLang = e.target.value; updateI18n(); });

// --- Tasks Logic (WITH PIXEL STEP ANIMATIONS) ---
function renderTasks() {
    taskList.innerHTML = '';
    activeTasksList.innerHTML = '';

    if (tasks.length === 0) {
        taskList.innerHTML = `<li class="text-center text-gray-500 dark:text-[#8b9bb4] py-4 text-base font-bold uppercase">No hay tareas.</li>`;
        return;
    }

    tasks.forEach(task => {
        // 1. Tareas Activas (Pantalla principal izquierda)
        if (task.status === 'active') {
            const el = document.createElement('div');
            el.className = 'glass p-3 flex items-start gap-3 text-base text-gray-900 dark:text-gray-100 animate-fade-in';
            
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.className = 'mt-0.5 shrink-0';
            cb.onclick = () => { 
                el.classList.remove('animate-fade-in');
                el.classList.add('animate-fade-out');
                setTimeout(() => {
                    task.status = 'completed'; 
                    renderTasks();
                }, 200);
            };
            
            const span = document.createElement('span');
            span.textContent = task.text;
            span.className = 'flex-1 font-bold leading-tight';
            
            el.appendChild(cb);
            el.appendChild(span);
            activeTasksList.appendChild(el);
        }
        
        // 2. Tareas en Libreta (Pendientes o Completadas)
        if (task.status === 'pending' || task.status === 'completed') {
            const li = document.createElement('li');
            li.className = `flex justify-between items-center p-3 bg-[#cbd5e1] dark:bg-[#120f1d] border-2 ${task.status === 'completed' ? 'border-breakMode' : 'border-[#181425] dark:border-[#5a6988]'} animate-fade-in`;
            
            const leftDiv = document.createElement('div');
            leftDiv.className = 'flex items-center gap-3 flex-1 overflow-hidden';
            
            const cb = document.createElement('input');
            cb.type = 'checkbox';
            cb.className = 'shrink-0';
            cb.checked = task.status === 'completed';
            cb.onclick = () => { 
                li.classList.remove('animate-fade-in');
                li.classList.add('animate-fade-out');
                setTimeout(() => {
                    if (task.status === 'pending') task.status = 'active'; 
                    else if (task.status === 'completed') task.status = 'pending'; 
                    renderTasks(); 
                }, 200);
            };
            
            const text = document.createElement('span');
            text.textContent = task.text;
            text.className = `flex-1 truncate font-bold text-lg ${task.status === 'completed' ? 'line-through text-gray-500 dark:text-[#5a6988]' : 'text-gray-900 dark:text-gray-100 cursor-pointer'}`;
            text.onclick = () => { cb.click(); };
            
            leftDiv.appendChild(cb);
            leftDiv.appendChild(text);
            
            const del = document.createElement('button');
            del.innerHTML = '<i class="fas fa-trash"></i>';
            del.className = 'bg-pixelRed text-white w-8 h-8 pixel-btn flex items-center justify-center ml-2 shrink-0';
            del.onclick = () => { 
                li.classList.remove('animate-fade-in');
                li.classList.add('animate-fade-out');
                setTimeout(() => {
                    tasks = tasks.filter(t => t.id !== task.id); 
                    renderTasks();
                }, 200);
            };
            
            li.appendChild(leftDiv);
            li.appendChild(del);
            taskList.appendChild(li);
        }
    });

    if (taskList.children.length === 0) {
        taskList.innerHTML = `<li class="text-center text-gray-500 dark:text-[#8b9bb4] py-4 text-base font-bold uppercase animate-fade-in">Las tareas están en curso...</li>`;
    }
}

formTask.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = inputNewTask.value.trim();
    if (text) {
        tasks.push({ id: Date.now(), text, status: 'pending' });
        inputNewTask.value = '';
        renderTasks();
    }
});

// --- Square Jump Game (Pixel Art Edition) ---
const canvas = document.getElementById('dino-canvas');
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;
const gameClickArea = document.getElementById('game-click-area');

let dinoAnimId = null;
let gameSpeed = 4;
let score = 0;
let isGameOver = false;
let frames = 0;
let obstacles = [];

const player = {
    x: 50, y: 120, size: 24, dy: 0, jumpPower: -11, gravity: 0.7, 
    groundY: 120, isJumping: false, rot: 0
};

function jump() {
    if (isGameOver) return;
    if (!player.isJumping) {
        player.dy = player.jumpPower;
        player.isJumping = true;
    }
}

function initDinoGame() {
    player.y = player.groundY; player.dy = 0; player.isJumping = false; player.rot = 0;
    obstacles = []; score = 0; gameSpeed = 5; frames = 0; isGameOver = false;
}

function updateDinoGame() {
    if (isGameOver) {
        ctx.fillStyle = isDarkMode ? 'rgba(18, 15, 29, 0.85)' : 'rgba(220, 227, 240, 0.85)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#e43b44';
        ctx.font = '18px "Press Start 2P", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('GAME OVER', canvas.width/2, canvas.height/2 - 8);
        ctx.fillStyle = isDarkMode ? '#ffffff' : '#181425';
        ctx.font = '12px "Press Start 2P", monospace';
        ctx.fillText(`SCORE: ${Math.floor(score)}`, canvas.width/2, canvas.height/2 + 22);
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Pixel Ground
    ctx.fillStyle = isDarkMode ? '#3a4466' : '#5a6988';
    ctx.fillRect(0, player.groundY + player.size, canvas.width, 16);
    ctx.fillStyle = isDarkMode ? '#8b9bb4' : '#181425';
    ctx.fillRect(0, player.groundY + player.size, canvas.width, 4);

    // Physics
    player.dy += player.gravity;
    player.y += player.dy;
    if (player.y >= player.groundY) {
        player.y = player.groundY; player.dy = 0; player.isJumping = false;
        player.rot = Math.round(player.rot / (Math.PI/2)) * (Math.PI/2);
    } else {
        player.rot += 0.15;
    }

    // Draw Pixel Player
    ctx.save();
    ctx.translate(Math.round(player.x + player.size/2), Math.round(player.y + player.size/2));
    ctx.rotate(player.rot);
    ctx.fillStyle = '#181425';
    ctx.fillRect(-player.size/2 - 2, -player.size/2 - 2, player.size + 4, player.size + 4);
    ctx.fillStyle = '#5b6ee1';
    ctx.fillRect(-player.size/2, -player.size/2, player.size, player.size);
    ctx.fillStyle = '#639bff';
    ctx.fillRect(-player.size/4, -player.size/4, player.size/2, player.size/2);
    ctx.restore();

    // Obstacles (Pixelated Stepped Spikes)
    if (frames % (Math.max(40, Math.floor(100 - gameSpeed*5))) === 0) {
        obstacles.push({ x: canvas.width, y: player.groundY + player.size, size: 24 });
    }
    
    for (let i = obstacles.length - 1; i >= 0; i--) {
        let obs = obstacles[i];
        obs.x -= gameSpeed;
        const ox = Math.round(obs.x);
        const oy = Math.round(obs.y);
        
        // Stepped 8-bit pyramid obstacle
        ctx.fillStyle = '#e43b44';
        ctx.fillRect(ox, oy - 6, 24, 6);
        ctx.fillRect(ox + 4, oy - 12, 16, 6);
        ctx.fillRect(ox + 8, oy - 18, 8, 6);
        ctx.fillRect(ox + 10, oy - 24, 4, 6);

        // Collision
        const hitShrink = 4;
        if (player.x < obs.x + obs.size - hitShrink && player.x + player.size > obs.x + hitShrink &&
            player.y < obs.y && player.y + player.size > obs.y - obs.size + hitShrink) {
            isGameOver = true;
        }
        if (obs.x + obs.size < 0) obstacles.splice(i, 1);
    }

    score += 0.1;
    gameSpeed += 0.002;
    frames++;

    ctx.fillStyle = isDarkMode ? '#639bff' : '#181425';
    ctx.font = '12px "Press Start 2P", monospace';
    ctx.textAlign = 'right';
    ctx.fillText(Math.floor(score).toString().padStart(4, '0'), canvas.width - 15, 25);

    dinoAnimId = requestAnimationFrame(updateDinoGame);
}

function startDinoGame() {
    initDinoGame();
    if (dinoAnimId) cancelAnimationFrame(dinoAnimId);
    dinoAnimId = requestAnimationFrame(updateDinoGame);
}
function stopDinoGame() {
    if (dinoAnimId) cancelAnimationFrame(dinoAnimId);
}

gameClickArea.addEventListener('mousedown', jump);
gameClickArea.addEventListener('touchstart', (e) => { e.preventDefault(); jump(); });
window.addEventListener('keydown', (e) => { if ((e.code === 'Space' || e.code === 'ArrowUp') && !dinoGameContainer.classList.contains('hidden')) { e.preventDefault(); jump(); } });

document.getElementById('btn-restart-game').addEventListener('click', () => {
    startDinoGame(); 
});

// Initialize
updateI18n();
updateTimerDisplay();
updateSessionDisplay();
renderTasks();
