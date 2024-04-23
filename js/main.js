let encryptedlist = ["en1t!$er4", "im%#es", "ai&", "ob%>er", "uf$@at5"];



function showRightDiv(showHide) {
    let divnormal = document.getElementById("aside");
    let divresult = document.getElementById("aside-copy");
    divnormal.hidden = showHide;
    divresult.hidden = !showHide;
}

function encryptText(element) {
    let decryptText = document.getElementById(element).value;
    
    let encryptText = decryptText
    .replaceAll('e', encryptedlist[0])
    .replaceAll('i', encryptedlist[1])
    .replaceAll('a', encryptedlist[2])
    .replaceAll('o', encryptedlist[3])
    .replaceAll('u', encryptedlist[4]);
    document.getElementById("textside").textContent = encryptText;
    showRightDiv(true);
}
function decryptText(element) {
    let encryptText = document.getElementById(element).value;
    
    let decryptText = encryptText
    .replaceAll(encryptedlist[0], "e")
    .replaceAll(encryptedlist[1], "i")
    .replaceAll(encryptedlist[2], "a")
    .replaceAll(encryptedlist[3], "o")
    .replaceAll(encryptedlist[4], "u");
    document.getElementById("textside").textContent = decryptText;
    showRightDiv(true);
}
function copyText(element) {
    let copyText = document.getElementById(element);
    navigator.clipboard.writeText(copyText.textContent);
}