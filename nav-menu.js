document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header.header');
    if (!header) return;

    const pathSegments = window.location.pathname.split('/');
    const basePath = pathSegments.slice(0, pathSegments.indexOf('pages') > -1 ? pathSegments.indexOf('pages') : pathSegments.length - 1).join('/') + '/';
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const headerTopHTML = `
        <div class="header-top">
            <img src="${basePath}images/round-logo.png" alt="Treaty Education logo" class="header-logo" onerror="this.src='${basePath}images/round-placeholder.svg'">
            <h1>TREATY EDUCATION</h1>
        </div>
    `;

    const navHTML = `
        <nav class="main-nav" aria-label="Main navigation">
            <ul>
                <li><a href="${basePath}index.html" class="nav-link">About Treaty Education</a></li>
                <li><a href="${basePath}pages/workshops.html" class="nav-link">Workshops</a></li>
                <li><a href="${basePath}pages/resources.html" class="nav-link">Resources</a></li>
                <li><a href="${basePath}pages/contact.html" class="nav-link">Contact</a></li>
                <li><a href="${basePath}pages/testimonials.html" class="nav-link">Testimonials</a></li>
            </ul>
        </nav>
    `;

    const bannerHTML = `
        <div class="banner-container">
            <img src="${basePath}images/banner.jpg" alt="Treaty Education banner" class="banner-img" onerror="this.src='${basePath}images/banner-placeholder.svg'">
        </div>
    `;

    let bannerSection = '';
    if (currentPage === 'index.html') {
        bannerSection = bannerHTML;
    }

    header.innerHTML = `
        <div class="container">
            ${headerTopHTML}
            ${navHTML}
            ${bannerSection}
        </div>
    `;

    const container = header.querySelector('.container');
    const mainNav = header.querySelector('.main-nav');
    if (container && mainNav) {
        const toggleDiv = document.createElement('div');
        toggleDiv.className = 'nav-toggle';
        toggleDiv.innerHTML = '<button aria-label="Toggle navigation"><i class="fas fa-bars"></i></button>';
        container.insertBefore(toggleDiv, mainNav);

        const toggleButton = toggleDiv.querySelector('button');
        toggleButton.addEventListener('click', function() {
            mainNav.classList.toggle('show');
        });

        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('show');
            });
        });
    }

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href').split('/').pop();
        if (linkHref === currentPage) {
            link.classList.add('active');
        }
    });

    const scrollBtn = document.createElement('button');
    scrollBtn.id = 'scrollToTopBtn';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.setAttribute('aria-label', 'Scroll to top');
    scrollBtn.innerHTML = '<i class="fas fa-chevron-up" aria-hidden="true"></i>';
    document.body.appendChild(scrollBtn);

    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    if (!document.querySelector('footer')) {
        const footer = document.createElement('footer');
        footer.innerHTML = `
            <p class="footer-copyright"></p>
            <div class="social-share">
                <a href="#" onclick="shareOn('facebook'); return false;" class="social-icon" aria-label="Share on Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="#" onclick="shareOn('twitter'); return false;" class="social-icon" aria-label="Share on Twitter"><i class="fab fa-twitter"></i></a>
                <a href="#" onclick="shareOn('linkedin'); return false;" class="social-icon" aria-label="Share on LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" onclick="shareOn('email'); return false;" class="social-icon" aria-label="Share via Email"><i class="fas fa-envelope"></i></a>
            </div>
        `;
        document.body.appendChild(footer);
    }
});

window.shareOn = function(platform) {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    let shareUrl = '';
    switch(platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
        case 'email':
            window.location.href = `mailto:?subject=${title}&body=${url}`;
            return;
        default:
            return;
    }
    window.open(shareUrl, '_blank', 'width=600,height=400');
};