deleteButton = document.getElementsByClassName("buttons-container_delete")[0];
modal = document.getElementsByClassName("modal-delete")[0];
closeButtons = document.getElementsByClassName("buttons-container_cancel");
deleteMobButton = document.getElementsByClassName("delete_button")[0];
function openDeleteModal() {
  modal.style.display = "flex";
}

function closeDeleteModal() {
  modal.style.display = "none";
}

closeButtons[0].addEventListener("click", closeDeleteModal);
closeButtons[1].addEventListener("click", closeDeleteModal);
deleteButton.addEventListener("click", openDeleteModal);
deleteMobButton.addEventListener("click", openDeleteModal);
