//your code here
// Wait for the DOM, since this script is loaded before the div in the body
document.addEventListener("DOMContentLoaded", () => {
  const link = document.querySelector("a");

  // Open the YouTube video in a new tab, safely
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener noreferrer");

  // Log clicks (handy for checking the link works)
  link.addEventListener("click", () => {
    console.log("Opening:", link.href);
  });
});