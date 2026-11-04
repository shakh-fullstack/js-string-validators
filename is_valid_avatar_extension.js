function isValidAvatarExtension(filename) {
  const validExtensions = [".jpg", "jpeg", ".png", "webp"];
  const lowerName = filename.toLowerCase();

  const isValid = validExtensions.some((ext) => lowerName.endsWith(ext));
  return isValid ? "Yes" : "No";
}
console.log(isValidAvatarExtension("my-photo.PNG"));
console.log(isValidAvatarExtension("document.pdf"));