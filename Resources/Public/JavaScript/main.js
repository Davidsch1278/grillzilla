document.addEventListener('DOMContentLoaded', function () {

    // ProcessSteps
    document.querySelectorAll('.grillzilla-steps').forEach(function (widget) {
        const items = widget.querySelectorAll('.grillzilla-steps__item');
        const prevBtn = widget.querySelector('[data-action="prev"]');
        const nextBtn = widget.querySelector('[data-action="next"]');
        const currentLabel = widget.querySelector('.grillzilla-steps__current');
        const total = items.length;
        let current = 0;

        function goTo(index) {
            items[current].classList.remove('active');
            current = index;
            items[current].classList.add('active');
            currentLabel.textContent = current + 1;
            prevBtn.disabled = current === 0;
            nextBtn.disabled = current === total - 1;
        }

        prevBtn.addEventListener('click', function () {
            if (current > 0) goTo(current - 1);
        });

        nextBtn.addEventListener('click', function () {
            if (current < total - 1) goTo(current + 1);
        });
    });

    // Cookie Banner
    if (!localStorage.getItem('grillzilla_cookies_accepted')) {
        const banner = document.createElement('div');
        banner.id = 'grillzilla-cookie-banner';
        banner.innerHTML = `
            <div class="grillzilla-cookie__inner">
                <p class="grillzilla-cookie__text">
                    Diese Website verwendet Cookies, um die Nutzererfahrung zu verbessern.
                    <a href="/datenschutz" class="grillzilla-cookie__link">Datenschutzerklärung</a>
                </p>
                <div class="grillzilla-cookie__buttons">
                    <button id="cookie-accept" class="grillzilla-cookie__btn grillzilla-cookie__btn--accept">Alle akzeptieren</button>
                    <button id="cookie-essential" class="grillzilla-cookie__btn grillzilla-cookie__btn--essential">Nur essenziell</button>
                </div>
            </div>
        `;
        document.body.appendChild(banner);

        document.getElementById('cookie-accept').addEventListener('click', function () {
            localStorage.setItem('grillzilla_cookies_accepted', 'all');
            banner.remove();
        });

        document.getElementById('cookie-essential').addEventListener('click', function () {
            localStorage.setItem('grillzilla_cookies_accepted', 'essential');
            banner.remove();
        });
    }

    // Grillz Spotlight
    document.querySelectorAll('[data-spotlight]').forEach(function (spotlight) {
        const thumbs = spotlight.querySelectorAll('.grillzilla-spotlight__thumb');
        const mainImgs = spotlight.querySelectorAll('.grillzilla-spotlight__main-img');
        const infoPanels = spotlight.querySelectorAll('.grillzilla-spotlight__info-panel');

        thumbs.forEach(function (thumb) {
            thumb.addEventListener('click', function () {
                const index = this.dataset.index;

                thumbs.forEach(t => t.classList.remove('active'));
                mainImgs.forEach(m => m.classList.remove('active'));
                infoPanels.forEach(p => p.classList.remove('active'));

                this.classList.add('active');
                spotlight.querySelector('.grillzilla-spotlight__main-img[data-index="' + index + '"]').classList.add('active');
                spotlight.querySelector('.grillzilla-spotlight__info-panel[data-index="' + index + '"]').classList.add('active');
            });
        });
    });

});
