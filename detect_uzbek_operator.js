// about    startsWith():

//My option
function detectUzbekOperators(phoneNumber) {
  const cleanPhone = phoneNumber.replace("+998", "").trim();

  return cleanPhone.startsWith("90") || cleanPhone.startsWith("91")
    ? "Beeline"
    : cleanPhone.startsWith("93") || cleanPhone.startsWith("94")
      ? "Ucell"
      : cleanPhone.startsWith("97") || cleanPhone.startsWith("88")
        ? "Mobiuz"
        : cleanPhone.startsWith("99") || cleanPhone.startsWith("77")
          ? "Uztelecom"
          : "Noma'lum operator";
}
console.log(detectUzbekOperators("+998931803411"));

//Ai option

function detectUzbekOperators(phoneNumber) {
  const cleanPhone = phoneNumber.replace("+998", "").trim();

  if (cleanPhone.startsWith("90") || cleanPhone.startsWith("91"))
    return "Belline";
  if (cleanPhone.startsWith("93") || cleanPhone.startsWith("94"))
    return "Ucell";
  if (cleanPhone.startsWith("97") || cleanPhone.startsWith("88"))
    return "Mobiuz";
  if (cleanPhone.startsWith("99") || cleanPhone.startsWith("77"))
    return "Uztelecom";
  return "Noma'lum operator";
}
console.log(detectUzbekOperators("+998887752493"));
