const form = document.querySelector("form")
const inputName = document.querySelector(".name")
const inputTel = document.querySelector(".tel")
const inputEmail = document.querySelector(".email")
const button = document.querySelector("button")

const onSubmit = (event) => {
    document.querySelectorAll("div").forEach(el => {
        el.remove()
    })
    inputName.classList.remove("error")
    inputTel.classList.remove("error")
    inputEmail.classList.remove("error")
    let isValid = true
    if (event.target[0].value.length > 10 || !/[a-z]/i.test(event.target[0].value)) {
        inputName.classList.add("error")
        inputName.insertAdjacentHTML("afterend", '<div class="error">неправильно заполнено имя</div>')
        isValid = false
    }
    if (!/\(\d{3}\)\d{3}\-\d{4}/.test(event.target[1].value)) {
        inputTel.classList.add("error")
        inputTel.insertAdjacentHTML("afterend", '<div class="error">неправильно заполнено</div>')
        isValid = false
    }
    if (!/[a-z\.\-]{6,7}@[a-z]{4}\.[a-z]{2}/i.test(event.target[2].value)) {
        inputEmail.classList.add("error")
        inputEmail.insertAdjacentHTML("afterend", '<div class="error">неправильно заполнен email</div>')
        isValid = false
    }
    console.log(isValid)
    if (!isValid) { event.preventDefault() }
}
form.addEventListener("submit", onSubmit)
