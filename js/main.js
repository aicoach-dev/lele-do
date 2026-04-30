/**
 * 株式会社レレ堂 共通JS
 * main.js — ナビ開閉 / スクロールアニメ / FAQ / フォーム制御 / フローティングCTA
 */

(function () {
  'use strict';

  /* ================================================
     1. ハンバーガーメニュー
     ================================================ */
  function initHamburger() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    if (!hamburger || !mobileNav) return;

    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('is-open');
      hamburger.textContent = isOpen ? '✕' : '☰';
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // ナビリンクをクリックしたら閉じる
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileNav.classList.remove('is-open');
        hamburger.textContent = '☰';
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ================================================
     2. スクロールフェードインアニメーション
     ================================================ */
  function initFadeIn() {
    const targets = document.querySelectorAll('.fade-in');
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          observer.unobserve(e.target); // 一度表示したら解除
        }
      });
    }, { threshold: 0.1 });

    targets.forEach(el => observer.observe(el));
  }

  /* ================================================
     3. アクティブナビゲーション
     ================================================ */
  function initActiveNav() {
    const current = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.global-nav a, .mobile-nav a').forEach(a => {
      const href = a.getAttribute('href');
      if (href && href.split('#')[0] === current) {
        a.classList.add('active');
      }
    });
  }

  /* ================================================
     4. FAQアコーディオン
     ================================================ */
  function initFaq() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(item => {
      const btn = item.querySelector('.faq-question');
      if (!btn) return;

      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('is-open');

        // 他を全て閉じる
        faqItems.forEach(i => {
          i.classList.remove('is-open');
          const a = i.querySelector('.faq-answer');
          if (a) a.style.maxHeight = null;
        });

        // クリックしたものをトグル
        if (!isOpen) {
          item.classList.add('is-open');
          const answer = item.querySelector('.faq-answer');
          if (answer) {
            answer.style.maxHeight = answer.scrollHeight + 'px';
          }
        }
      });
    });
  }

  /* ================================================
     5. 会社概要ページ — ポリシータブ
     ================================================ */
  function initPolicyTabs() {
    const tabBtns = document.querySelectorAll('.policy-tab-btn');
    const tabContents = document.querySelectorAll('.policy-content');
    if (!tabBtns.length) return;

    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        btn.classList.add('active');
        const content = document.querySelector(`.policy-content[data-tab="${target}"]`);
        if (content) content.classList.add('active');
      });
    });
  }

  /* ================================================
     6. エントリーフォーム — Formspreeとサンクス表示
     ================================================ */
  function initEntryForm() {
    const form = document.getElementById('entry-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = '送信中...';
      btn.disabled = true;

      try {
        const data = new FormData(form);
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.style.display = 'none';
          const thanks = document.getElementById('entry-thanks');
          if (thanks) thanks.style.display = 'block';
        } else {
          alert('送信に失敗しました。しばらく経ってから再度お試しください。');
          btn.textContent = originalText;
          btn.disabled = false;
        }
      } catch {
        alert('通信エラーが発生しました。インターネット接続をご確認ください。');
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

  /* ================================================
     7. お問い合わせフォーム — Formspree
     ================================================ */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.textContent = '送信中...';
      btn.disabled = true;

      try {
        const data = new FormData(form);
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { 'Accept': 'application/json' }
        });

        if (res.ok) {
          form.style.display = 'none';
          const thanks = document.getElementById('contact-thanks');
          if (thanks) thanks.style.display = 'block';
        } else {
          alert('送信に失敗しました。しばらく経ってから再度お試しください。');
          btn.textContent = originalText;
          btn.disabled = false;
        }
      } catch {
        alert('通信エラーが発生しました。インターネット接続をご確認ください。');
        btn.textContent = originalText;
        btn.disabled = false;
      }
    });
  }

  /* ================================================
     8. フローティングCTAボタン（採用ページ）
     ================================================ */
  function initFloatingCta() {
    const floatingCta = document.querySelector('.floating-cta');
    if (!floatingCta) return;

    let shown = false;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300 && !shown) {
        floatingCta.classList.add('is-visible');
        shown = true;
      } else if (window.scrollY <= 300 && shown) {
        floatingCta.classList.remove('is-visible');
        shown = false;
      }
    }, { passive: true });
  }

  /* ================================================
     9. ヘッダー スクロール影
     ================================================ */
  function initHeaderShadow() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
      } else {
        header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.06)';
      }
    }, { passive: true });
  }

  /* ================================================
     初期化
     ================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    initHamburger();
    initFadeIn();
    initActiveNav();
    initFaq();
    initPolicyTabs();
    initEntryForm();
    initContactForm();
    initFloatingCta();
    initHeaderShadow();
  });

})();
