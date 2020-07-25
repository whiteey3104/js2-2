const getMenubtn = document.getElementsByClassName("js-get-menu-btn")
const getModal = document.getElementById("js-get-modal")
const getHeader = document.getElementById("js-get-header").style


for (i = 0; i < getMenubtn.length; i++) {
    getMenubtn[i].addEventListener("click", () => {
        getHeader.display === "none" ? getHeader.display = "flex" : getHeader.display = "none"
        getModal.classList.toggle('js-is-show')
    })
}

