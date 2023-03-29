
function openNav(x) {
  x.classList.toggle("change");
  document.getElementById("menu_sidepanel").style.width = "250px";
}

/* Set the width of the sidebar to 0 (hide it) */
function closeNav(x) {
  x.classList.toggle("change");
  document.getElementById("menu_sidepanel").style.width = "0";
} 

function toggleNav(x) {
  x.classList.toggle("change");
  var sidePanel = document.getElementById("menu_sidepanel");
  if (sidePanel.style.width === "250px") {
    sidePanel.style.width = "0";
  } else {
    sidePanel.style.width = "250px";
  }
}