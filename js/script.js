document.addEventListener('DOMContentLoaded', function () {
    new Glide('.glide', {
        type: 'carousel',
        startAt: 0,
        gap: 20,
        perView: 5,
        breakpoints: {
            1024: { perView: 4 },
            800: { perView: 2 },
            600: { perView: 1 }
        }
    }).mount();
});