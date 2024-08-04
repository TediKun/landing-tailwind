function events(el, ev, cb) {
    el.addEventListener(ev, cb);
}

// Navbar Script
const btnNavbar = document.querySelector("[btn-nav]");
const navbarMenu = document.querySelector("[side-bar]");
const topBar = document.querySelector("[top-bar]");
events(btnNavbar, "click", function () {
    navbarMenu.classList.remove("-right-full");
    navbarMenu.classList.add("right-0");
});
function closeNavbar() {
    navbarMenu.classList.remove("right-0");
    navbarMenu.classList.add("-right-full");
}

// events(document, "scroll", function () {
//     topBar.classList.remove("shadow-sm");
//     topBar.classList.toggle("shadow-lg", scrollY > 100);
// });
//

// Tabs Produk
const tabBtns = document.querySelectorAll(".tab-btn");
const tabs = document.querySelectorAll(".tab");

const tabSwitch = function (tabClick) {
    tabBtns.forEach(e => {
        e.classList.remove("active");
    });
    tabs.forEach(e => {
        e.classList.remove("active");
    });

    tabBtns[tabClick].classList.add("active");
    tabs[tabClick].classList.add("active");
};
tabBtns.forEach((e, i) => {
    e.addEventListener("click", function () {
        tabSwitch(i);
    });
});
