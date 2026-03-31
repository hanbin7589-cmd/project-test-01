const ROWS = 5;
const COLS = 6;

let numbers = [];
let locks = Array(ROWS).fill(false);

function rand() {
    return Math.floor(Math.random() * 45) + 1;
}

function makeRow() {
    let arr = [];
    while (arr.length < COLS) {
        let n = rand();
        if (!arr.includes(n)) arr.push(n);
    }
    return arr.sort((a,b)=>a-b);
}

function animate(ball, final) {
    let count = 0;
    let interval = setInterval(() => {
        ball.innerText = rand();
        count++;
        if (count > 8) {
            clearInterval(interval);
            ball.innerText = final;
            ball.classList.add("roll");
            setTimeout(()=>ball.classList.remove("roll"),300);
        }
    }, 60);
}

function render(animatedRows=[]) {
    const app = document.getElementById("app");
    if (!app) return;
    app.innerHTML = "";

    numbers.forEach((row, i) => {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";

        const numDiv = document.createElement("div");
        numDiv.className = "numbers";

        row.forEach((n) => {
            const ball = document.createElement("div");
            ball.className = "ball";

            if (animatedRows.includes(i) && !locks[i]) {
                animate(ball, n);
            } else {
                ball.innerText = n;
            }

            numDiv.appendChild(ball);
        });

        const actions = document.createElement("div");
        actions.className = "actions";

        const regen = document.createElement("button");
        regen.className = "regen";
        regen.innerText = "재추첨";
        regen.onclick = () => {
            if (!locks[i]) {
                numbers[i] = makeRow();
                render([i]);
            }
        };

        const lock = document.createElement("button");
        lock.className = "lock" + (locks[i] ? " active" : "");
        lock.innerText = locks[i] ? "고정됨" : "고정";
        lock.onclick = () => {
            locks[i] = !locks[i];
            render();
        };

        actions.appendChild(regen);
        actions.appendChild(lock);

        rowDiv.appendChild(numDiv);
        rowDiv.appendChild(actions);

        app.appendChild(rowDiv);
    });
}

function generateAll() {
    let animated = [];
    numbers = numbers.map((row, i) => {
        if (locks[i]) return row;
        animated.push(i);
        return makeRow();
    });
    render(animated);
}

function init() {
    for (let i = 0; i < ROWS; i++) {
        numbers.push(makeRow());
    }
    render();
    initTheme();
}

// Theme Logic
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    const btn = document.getElementById('theme-btn');
    if (btn) {
        btn.innerText = theme === 'light' ? '🌙 다크 모드' : '☀️ 라이트 모드';
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

window.onload = init;
