document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        gap: 20,
        perView: 4,
        breakpoints: {
            1024: { perView: 3 },
            800: { perView: 2 },
            600: { perView: 1 }
        }
    }).mount();
});

document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide1', {
        type: 'carousel',
        startAt: 0,
        gap: 20,
        perView: 3.5,
        autoplay: 1000,
        hoverpause: true,
        breakpoints: {
            1024: { perView: 2.5 },
            800: { perView: 1.5 },
            600: { perView: 1 }
        }
    }).mount();
});