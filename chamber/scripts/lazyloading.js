/*---------- LAZY LOADING ----------*/

/* Selecting all images*/
const images = document.querySelectorAll("[data-srcset]");

/* Modify rootMargin bottom and threshold to test for the image loading */
const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 150px 0px"
};

/* Replace src with data-src and then remove it */
function preloadImage(img) {
    const srcset = img.getAttribute("data-srcset");
    if (!srcset) {
        return;
    }

    img.srcset = srcset;
    img.onload = () => {
        img.removeAttribute("data-srcset");
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