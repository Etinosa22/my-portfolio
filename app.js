const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('show');
    nav.classList.toggle('show');
   
});

const li = document.querySelectorAll(".links")
const sect = document.querySelectorAll("section")

const activeMenu = () => {
  let len = sect.length;
  while (--len && window.scrollY + 97 < sect[len].offsetTop){}
  li.forEach(ltx => ltx.classList.remove("active"))
  li[len].classList.add("active")
}

activeMenu()
window.addEventListener("scroll", activeMenu)