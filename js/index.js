

const button = document.querySelector(".buttonAbout")
const modal = document.querySelector("dialog")
const buttonClose = document.querySelector("dialog .button-close")

button.onclick = function () {
    modal.showModal()
}

buttonClose.onclick = function () {
    modal.close()
}


AOS.init({
    duration: 1000,
    once: true,

})