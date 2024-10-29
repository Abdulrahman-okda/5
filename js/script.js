const menubtn = document.querySelector(".nav_menu_btn");
const navlinks = document.querySelector(".nav_links");
const menubtnicon = document.querySelector(".nav_menu_btn i");

menubtn.addEventListener("click", (e) => {
  navlinks.classList.toggle("open");

  const isopen = navlinks.classList.contains("open");
  menubtnicon.setAttribute("class", isopen ? "ri-close-line" : "ri-menu-line");
});

navlinks.addEventListener("click", (e) => {
  navlinks.classList.remove("open");
  menubtnicon.setAttribute("class", "ri-menu-line");
});
