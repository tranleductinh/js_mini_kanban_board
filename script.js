const dialog = document.getElementById("dialog");
const toggle = document.getElementById("toggle");
let theme = localStorage.getItem("theme");

if (!theme) {
  const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  theme = systemDark ? "dark" : "light";
}
if (theme === "dark") {
  document.body.classList.add("dark");
} else {
  document.body.classList.remove("dark");
}

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggle.innerText = "Chuyển Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggle.innerText = "Chuyển Dark Mode";
  }
});
function openDialog() {
  dialog.show();
}
function closeDialog() {
  dialog.close();
}

dialog.addEventListener("click", (e) => {
  if (e.target === dialog) {
    dialog.close();
  }
});

window.addEventListener("storage", (e) => {
  if(e.key === "theme") {
    document.body.classList.toggle("dark");
  }
})