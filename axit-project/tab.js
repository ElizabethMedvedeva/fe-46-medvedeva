const links = document.querySelectorAll(".tabs__nav-link");

const onWindowClick = (e) => {
  if (e.target.tagName === "A") {
    e.target.parentNode.click();
  }
};

window.addEventListener("click", onWindowClick, false);
window.onload = function () {
  links[0].click();
};

const tabs = document.querySelectorAll(".tabs__nav-item");
const contents = document.querySelectorAll(".tab");

for (let i = 0; i < tabs.length; i++) {
  tabs[i].addEventListener("click", (event) => {
    let tabsChildren = event.target.parentElement.children;
    for (let t = 0; t < tabsChildren.length; t++) {
      tabsChildren[t].classList.remove("tabs__nav-item_active");
    }
    tabs[i].classList.add("tabs__nav-item_active");

    let tabContentChildren =
      event.target.parentElement.nextElementSibling.children;
    for (let c = 0; c < tabContentChildren.length; c++) {
      tabContentChildren[c].classList.remove("tab__content_active");
    }
    contents[i].classList.add("tab__content_active");
  });
}
