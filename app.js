const sidebar = document.getElementById("sidebar");
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const overlay = document.getElementById("sidebarOverlay");

// Buka Sidebar
openSidebar.addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.style.display = "block";
  openSidebar.classList.add("hidden"); // Sembunyikan tombol menu
});

// Tutup Sidebar
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.style.display = "none";
  openSidebar.classList.remove("hidden"); // Tampilkan tombol menu
});

// Klik Overlay Tutup Sidebar
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.style.display = "none";
  openSidebar.classList.remove("hidden"); // Tampilkan tombol menu
});
