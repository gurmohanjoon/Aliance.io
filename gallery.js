document.addEventListener("DOMContentLoaded", function () {
    const images = [
     "https://i.postimg.cc/FYXRbVLj/56r8ws.webp",
    "https://i.postimg.cc/F7LzJB7r/5z4fbm.webp",
    "https://i.postimg.cc/HJpkRW3n/bje56a.webp",
    "https://i.postimg.cc/BLbQZhrG/c3hejp.webp",
    "https://i.postimg.cc/VJ9NK0q2/g6w45t.webp",
    "https://i.postimg.cc/HJBkgGP2/kwqmac.webp",
    "https://i.postimg.cc/WFypdGVq/ndzzey.webp",
    "https://i.postimg.cc/wRsqL1xf/wypmkv.webp"
    ];
    let current = 0;
    const mainImg = document.getElementById("main-gallery-img");
    const thumbs = document.querySelectorAll(".thumb");
    const prev = document.getElementById("gallery-prev");
    const next = document.getElementById("gallery-next");
  
    function showImage(idx) {
      current = idx;
      mainImg.style.opacity = 0.5;
      setTimeout(() => {
        mainImg.src = images[current];
        mainImg.style.opacity = 1;
      }, 150);
      thumbs.forEach((t, i) => t.classList.toggle("active", i === current));
    }
  
    thumbs.forEach((thumb, idx) => {
      thumb.addEventListener("click", () => showImage(idx));
    });
  
    prev.addEventListener("click", () => showImage((current - 1 + images.length) % images.length));
    next.addEventListener("click", () => showImage((current + 1) % images.length));
  });