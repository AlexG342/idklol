document.getElementById('menuToggle').addEventListener('click', () => {
    const menu = document.getElementById('dropdownMenu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
  });

  window.addEventListener("DOMContentLoaded", () => {
    const popup = document.getElementById("popupAd");
    const closeBtn = document.getElementById("closePopup");
  
    // Show popup after 2 seconds
    setTimeout(() => {
      popup.style.display = "flex";
    }, 2000);
  
    // Close when "X" is clicked
    closeBtn.addEventListener("click", () => {
      popup.style.display = "none";
    });
  
    // Close if clicking outside the popup content
    popup.addEventListener("click", (e) => {
      if (e.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  