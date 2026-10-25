// show initials until a photo is loaded, or when the file is missing
function updatePhoto(photo) {
  const initials = photo.parentElement.querySelector(".person-initials");
  const loaded = photo.complete && photo.naturalWidth > 0;

  photo.classList.toggle("is-loaded", loaded);

  if (initials) {
    initials.hidden = loaded;
  }
}

document.querySelectorAll(".person-photo").forEach((photo) => {
  photo.addEventListener("load", () => updatePhoto(photo));
  photo.addEventListener("error", () => updatePhoto(photo));
  updatePhoto(photo);
});