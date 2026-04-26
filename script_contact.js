window.closeModal = () => {
  const overlay = document.getElementById("modal-overlay");
  overlay.classList.add("closing");
  setTimeout(() => {
    overlay.classList.remove("active", "closing");
  }, 280);
};