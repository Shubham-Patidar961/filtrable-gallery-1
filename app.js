// variable decration //
const gallery = document.querySelector(".gallery");
const all = document.querySelector(".btnall");
const logo = document.querySelector(".btnlogo");
const web = document.querySelector(".btnweb");
const mobile = document.querySelector(".btnmobile");
const logo2 = document.querySelector(".logo");
const web2 = document.querySelector(".web");
const mobile2 = document.querySelector(".mobile");
//---end of variable decration --//

//-- core js --start-- //
all.addEventListener("click", () => {
  gallery.classList.remove("gallery");
  console.log("btnclickd");
});

logo.addEventListener("click", () => {
  gallery.classList.add("gallery");
  logo2.classList.remove("logo");
});
web.addEventListener("click", () => {
  gallery.classList.add("gallery");
  logo2.classList.add("logo");
  web2.classList.remove("web");
});
mobile.addEventListener("click", () => {
  gallery.classList.add("gallery");
  logo2.classList.add("logo");
  web2.classList.add("web");
  mobile2.classList.remove("mobile");
});
//--core js --end--//
