function isValidAvatarExtension(filename) {
  const validExtensions = [".jpg", "jpeg", ".png", "webp"];
  const lowerName = filename.toLowerCase();

  return validExtensions.some((ext) => lowerName.endsWith(ext));
}
console.log(isValidAvatarExtension("my-photo.PNG"));
console.log(isValidAvatarExtension("document.pdf"));
