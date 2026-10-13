/*--------SIDEBAR--------*/
let sidebarOpen = false;
const sidebar = document.getElementById("sidebar");

// Fungsi untuk membuka sidebar
function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

// Fungsi untuk menutup sidebar
function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}

