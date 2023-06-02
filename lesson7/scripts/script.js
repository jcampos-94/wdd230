/* Selecting all images*/
const images = document.querySelectorAll("[data-src]");

/* Modify rootMargin bottom and threshold to test for the image loading */
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 300px 0px"
};

/* Replace src with data-src and then remove it */
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    }

    img.src = src;
    img.onload = () => {
        img.removeAttribute("data-src");
    };
}

/* Image Observer */
const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);

/* Iterate through each image to load them */
images.forEach(image => {
    imgObserver.observe(image);
});