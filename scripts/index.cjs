const bodyEl = document.querySelector("body")
const menuBtnEl = document.querySelector(".page-header__nav-menu-btn")
const mainEl = document.querySelector("main")
const footerEl = document.querySelector(".page-footer")

menuBtnEl.addEventListener("click", onMenuBtnClick)

window.addEventListener("resize",onWindowResize)

function onWindowResize() {
    if (innerWidth >= 768) {
        bodyEl.setAttribute("data-menu", "closed")
        mainEl.removeAttribute("inert", "")
        footerEl.removeAttribute("inert", "")
    }
}

function onMenuBtnClick() {
    const body = document.querySelector("body")

    const state = body.getAttribute("data-menu")

    if (state === "opened") {
        body.setAttribute("data-menu", "closed")
        mainEl.removeAttribute("inert")
        footerEl.removeAttribute("inert")
    } else {
        body.setAttribute("data-menu", "opened")
        mainEl.setAttribute("inert", "")
        footerEl.setAttribute("inert", "")
    }
}
