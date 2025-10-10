document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeBtn = document.getElementById("close");

    // Bayrak ve haritaları seç
    const imgs = document.querySelectorAll(".flag-box img, .map-box img");

    imgs.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.remove("hidden"); // aç
        });
    });

    // Kapatma fonksiyonu
    const closeLightbox = () => lightbox.classList.add("hidden");

    // Çarpıya tıklayınca kapat
    closeBtn.addEventListener("click", closeLightbox);

    // Arka plana tıklayınca kapat
    lightbox.addEventListener("click", e => {
        if (e.target === lightbox) closeLightbox();
    });

    // ESC tuşu ile kapat
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") closeLightbox();
    });
});
