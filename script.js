// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// FAQアコーディオン
document.querySelectorAll('.faq-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // 他のアイテムを閉じる
        document.querySelectorAll('.faq-item').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        // クリックされたアイテムをトグル
        item.classList.toggle('active');
    });
});

// スクロールアニメーション
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// アニメーション対象の要素
document.querySelectorAll('.feature-card, .problem-card, .use-case-card, .step').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ヘッダーのスクロール時背景変更
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// デモカードのアニメーション（オプション）
const demoCard = document.querySelector('.demo-card');
if (demoCard) {
    setInterval(() => {
        demoCard.style.transform = 'scale(1.02)';
        setTimeout(() => {
            demoCard.style.transform = 'scale(1)';
        }, 300);
    }, 5000);
}

// モバイルメニュー（将来的に追加可能）
const createMobileMenu = () => {
    // モバイルメニューの実装はここに追加
};

// ページロード時の初期化
document.addEventListener('DOMContentLoaded', () => {
    console.log('Branch Website loaded successfully! 🚀');

    // 最初のFAQを開く（オプション）
    // document.querySelector('.faq-item')?.classList.add('active');
});
