const hamburgerMenu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector(".navbar");
const moreBtn = document.querySelector("#more-btn");
const moreList = document.querySelector(".more-list");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

moreBtn.addEventListener("click", () => {
  moreList.classList.toggle("active");

  const currentText = moreBtn.textContent;
  const newText = currentText === "Show more" ? "Show less" : "Show more";
  moreBtn.textContent = newText;

  if (moreList.classList.contains("active")) {
    moreList.style.display = "flex";
    moreList.style.maxHeight = moreList.scrollHeight + "px";
  } else {
    moreList.style.maxHeight = 0;
    setTimeout(() => {
      moreList.style.display = "none";
    }, 300);
  }
});
