/*
  Treaty Education
  Copyright:   (c) 2026 Sharon Annett (Treaty Education). All rights reserved.
  Developer:   Jericho Crosby (built for Sharon Annett)
  License:     Proprietary  - Use, copying, modification, distribution,
               or derivation without permission is strictly prohibited.
*/

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle button');
    const mainNav = document.querySelector('.main-nav');
    if (navToggle && mainNav) {
        navToggle.addEventListener('click', function () {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            mainNav.classList.toggle('show');
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function () {
                mainNav.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });

        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && mainNav.classList.contains('show')) {
                mainNav.classList.remove('show');
                navToggle.setAttribute('aria-expanded', 'false');
                navToggle.focus();
            }
        });
    }

    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }, { passive: true });

    scrollBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

window.shareOn = function (platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    let shareUrl = '';
    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?u=${url}`;
            break;
        case 'email':
            window.location.href = `mailto:?subject=${title}&body=${url}`;
            return;
        default:
            return;
    }
    window.open(shareUrl, '_blank', 'noopener,noreferrer,width=600,height=400');
};