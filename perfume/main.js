// Perfume Terms Data with Categories and Related Perfumes
const perfumeTerms = [
    {
        category: "기초 용어",
        title: "부향률 (Concentration)",
        description: "향수 원액이 알코올에 섞여 있는 비율입니다. 농도가 높을수록 향이 진하고 지속시간이 길어집니다.",
        relatedPerfumes: "퍼퓸(15-30%), 오 드 퍼퓸(10-15%), 오 드 뚜왈렛(5-10%)"
    },
    {
        category: "기초 용어",
        title: "노트 (Notes)",
        description: "향수가 발산하는 향의 단계를 의미합니다. 시간에 따라 탑, 미들, 베이스로 나뉩니다.",
        relatedPerfumes: "모든 향수의 기본 구성 요소"
    },
    {
        category: "기초 용어",
        title: "트레일 (Sillage)",
        description: "향수가 지나간 자리에 남는 향의 자국이나 공기 중에 퍼지는 확산력을 의미합니다.",
        relatedPerfumes: "디올 소바쥬, 샤넬 넘버5 (확산력이 강한 향수들)"
    },
    {
        category: "플로럴 계열",
        title: "플로럴 (Floral)",
        description: "가장 대중적인 계열로, 꽃향기를 주축으로 합니다. 우아하고 로맨틱한 분위기를 자아냅니다.",
        relatedPerfumes: "디올 미스 디올, 구찌 블룸, 마크 제이콥스 데이지"
    },
    {
        category: "플로럴 계열",
        title: "일랑일랑 (Ylang-Ylang)",
        description: "달콤하고 관능적인 꽃향기로, 향수의 '심장' 역할을 자주 수행합니다. 풍부한 깊이감을 더해줍니다.",
        relatedPerfumes: "샤넬 No.5, 르 라보 리스 41"
    },
    {
        category: "플로럴 계열",
        title: "로즈 (Rose)",
        description: "향수의 여왕이라 불리는 성분으로, 우아함부터 싱그러움까지 다양한 스펙트럼을 가집니다.",
        relatedPerfumes: "딥티크 오 로즈, 끌로에 오 드 퍼퓸"
    },
    {
        category: "우디 & 얼시 계열",
        title: "우디 (Woody)",
        description: "나무의 따뜻하고 묵직한 향입니다. 차분하고 안정적인 느낌을 주며 베이스 노트에 많이 쓰입니다.",
        relatedPerfumes: "바이레도 슈퍼 시더, 탐다오, 조말론 우드 세이지 앤 씨 솔트"
    },
    {
        category: "우디 & 얼시 계열",
        title: "샌달우드 (Sandalwood)",
        description: "부드럽고 크리미한 나무 향입니다. 명상적인 분위기와 포근한 잔향이 특징입니다.",
        relatedPerfumes: "르 라보 상탈 33, 에르메스 상탈 마솔리아"
    },
    {
        category: "우디 & 얼시 계열",
        title: "패출리 (Patchouli)",
        description: "흙냄새와 나무 향이 섞인 독특한 향으로, 향의 지속력을 높이고 깊이를 더해줍니다.",
        relatedPerfumes: "샤넬 코코 마드모아젤, 조말론 잉글리쉬 페어 앤 프리지아"
    },
    {
        category: "시트러스 & 프루티 계열",
        title: "시트러스 (Citrus)",
        description: "레몬, 오렌지, 자몽 등 상큼한 감귤류 향입니다. 청량감이 뛰어나며 여름에 인기가 많습니다.",
        relatedPerfumes: "아쿠아 디 파르마 미르토, 조말론 라임 바질 앤 만다린"
    },
    {
        category: "시트러스 & 프루티 계열",
        title: "베르가못 (Bergamot)",
        description: "고급스러운 시트러스 향으로, 쌉싸름하면서도 화사한 향기가 탑 노트의 정석으로 불립니다.",
        relatedPerfumes: "르 라보 베르가못 22, 디올 소바쥬"
    },
    {
        category: "특수 계열",
        title: "머스크 (Musk)",
        description: "따뜻하고 부드러운 살결 같은 향입니다. 체취와 섞였을 때 가장 매력적인 잔향을 남깁니다.",
        relatedPerfumes: "키엘 오리지널 머스크, 더바디샵 화이트 머스크"
    },
    {
        category: "특수 계열",
        title: "오리엔탈 (Oriental)",
        description: "바닐라, 앰버, 스파이스 등이 섞인 신비롭고 강렬한 향입니다. 추운 계절에 잘 어울립니다.",
        relatedPerfumes: "입생로랑 블랙 오피움, 샤넬 샬리마"
    }
];

// Grouping and Rendering Logic
function renderTerms(terms) {
    const termsList = document.getElementById('terms-list');
    if (!termsList) return;

    // Group terms by category
    const grouped = terms.reduce((acc, term) => {
        if (!acc[term.category]) acc[term.category] = [];
        acc[term.category].push(term);
        return acc;
    }, {});

    termsList.innerHTML = Object.entries(grouped).map(([category, items]) => `
        <div class="category-group">
            <h2 class="category-title"><i class="fas fa-tag"></i> ${category}</h2>
            <div class="term-grid">
                ${items.map(term => `
                    <article class="term-card">
                        <div class="term-header">
                            <h3>${term.title}</h3>
                        </div>
                        <div class="term-body">
                            <p class="description">${term.description}</p>
                            <div class="related-box">
                                <span class="related-label">추천/관련:</span>
                                <span class="related-text">${term.relatedPerfumes}</span>
                            </div>
                        </div>
                    </article>
                `).join('')}
            </div>
        </div>
    `).join('');
}

// Search Filter (enhanced to handle groups)
function filterTerms() {
    const query = document.getElementById('term-search').value.toLowerCase();
    const filtered = perfumeTerms.filter(term => 
        term.title.toLowerCase().includes(query) || 
        term.description.toLowerCase().includes(query) ||
        term.category.toLowerCase().includes(query)
    );
    renderTerms(filtered);
}

// Theme Logic
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

function setTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('perfume_theme', theme);
    const btn = document.getElementById('theme-btn');
    if (btn) {
        btn.innerText = theme === 'light' ? '🌙' : '☀️';
    }
}

function initTheme() {
    const savedTheme = localStorage.getItem('perfume_theme') || 'light';
    setTheme(savedTheme);
}

window.onload = () => {
    initTheme();
    renderTerms(perfumeTerms);
};
