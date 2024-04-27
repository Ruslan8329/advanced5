let list = document.querySelector(".listPages ");
document.addEventListener("click", () => {
  list.forEach(function (link) {
    if (link.href("https://")) {
      link.style.backgroundColor = "red";
    }
  });
});
