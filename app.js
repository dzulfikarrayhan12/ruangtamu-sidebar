// Ambil elemen
const openSidebar = document.getElementById("openSidebar");
const closeSidebar = document.getElementById("closeSidebar");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("sidebarOverlay");
const cartBtn = document.getElementById("cartBtn");
const cartCount = document.getElementById("cartCount");

// Buka sidebar
openSidebar.addEventListener("click", () => {
  sidebar.classList.add("open");
  overlay.style.display = "block";
  openSidebar.classList.add("hidden");
  cartBtn.classList.add("hidden");
});

// Tutup sidebar
closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.style.display = "none";
  openSidebar.classList.remove("hidden");
  cartBtn.classList.remove("hidden");
});

// Tutup sidebar dengan overlay
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.style.display = "none";
  openSidebar.classList.remove("hidden");
  cartBtn.classList.remove("hidden");
});

// Update badge keranjang dari localStorage
function updateCartBadge() {
  const cart = JSON.parse(localStorage.getItem("checkout")) || [];
  cartCount.textContent = cart.length;
}

// Panggil saat halaman dimuat
document.addEventListener("DOMContentLoaded", updateCartBadge);

// Event klik tombol keranjang → pindah ke halaman checkout
cartBtn.addEventListener("click", () => {
  window.location.href = "checkout.html";
});
