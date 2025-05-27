// redirect.js
// Primary redirect
window.location.replace("https://www.google.com");

// Backup methods if first fails
setTimeout(() => {
  window.location.href = "https://www.google.com";
}, 100);

setTimeout(() => {
  window.open("https://www.google.com", "_self");
}, 200);