function closeModalMenu(menu) {
  let menuBoxContent = document.querySelector(".menu__box--content");
  let menuContainer = document.querySelector(".menu__container");
  let menus = document.querySelector("#menu");
  switch (!!menuBoxContent && !!menuContainer) {
    case !menuContainer.classList.contains("openModalMenu") &&
      !menuBoxContent.classList.contains("openModalMenu"):
      menuContainer.classList.add("openModalMenu");
      menuBoxContent.classList.add("openModalMenu");
      menus.classList.add("openModalMenu");
      break;
    case menuContainer.classList.contains("openModalMenu") &&
      menuBoxContent.classList.contains("openModalMenu"):
      menuContainer.classList.remove("openModalMenu");
      menuBoxContent.classList.remove("openModalMenu");
      setTimeout(() => {
        menus.classList.remove("openModalMenu");
      }, 1000);
      break;
  }
}
export { closeModalMenu };
