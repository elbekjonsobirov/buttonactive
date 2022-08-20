let navBtns = document.querySelector('.navbarCard')
let btns = document.querySelectorAll('button')

let bgCard = document.querySelector('.bgCard')
let bgColor = bgCard.querySelectorAll('div')

let text = document.querySelectorAll('p')


navBtns.addEventListener("click", (event) => {
    target = event.target

    btns.forEach((item, index) => {
        item.classList.remove('btnActive')

        if (item === target) {
            item.classList.add('btnActive')
            textEditor(index)
        }
    })

    function textEditor(i) {
        bgColor.forEach((item, index) => {
            item.classList.remove('bgActive')
            if (i === index) {
                item.classList.add('bgActive')
            }
        })

        text.forEach((item, index) => {
            item.classList.remove('textActive')
            if (i === index) {
                item.classList.add('textActive')
            }
        })
    }
})