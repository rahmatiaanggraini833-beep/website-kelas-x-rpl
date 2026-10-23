
/* =========================================
   1. AMBIL ELEMEN HTML
========================================= */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");
const currentYear = document.getElementById("currentYear");

/* =========================================
   2. MENU NAVIGASI MOBILE
========================================= */
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Tutup menu navigasi" : "Buka menu navigasi"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
  });

  // Tutup menu setelah salah satu tautan dipilih
  navItems.forEach((item) => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu navigasi");
      menuToggle.textContent = "☰";
    });
  });

  // Tutup menu jika pengguna menekan Escape
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      navLinks.classList.remove("show");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Buka menu navigasi");
      menuToggle.textContent = "☰";
    }
  });
}

/* =========================================
   3. TAHUN OTOMATIS DI FOOTER
========================================= */
if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

/* =========================================
   4. MENU AKTIF SESUAI BAGIAN HALAMAN
========================================= */
const pageSections = document.querySelectorAll("main section[id]");

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;

          navItems.forEach((item) => {
            const isActive =
              item.getAttribute("href") === `#${sectionId}`;

            item.classList.toggle("active", isActive);
          });
        }
      });
    },
    {
      rootMargin: "-25% 0px -60% 0px",
      threshold: 0
    }
  );

  pageSections.forEach((section) => {
    sectionObserver.observe(section);
  });
}

console.log("Website kelas X-RPL berhasil dimuat!");
