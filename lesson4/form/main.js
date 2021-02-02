const form = document.querySelector("form")
const inputName = document.querySelector(".name")
const inputTel = document.querySelector(".tel")
const inputEmail = document.querySelector(".email")
const button = document.querySelector("button")
const onSubmit = (event) => {
    event.preventDefault()
    if (event.target[0].value.length > 10 || !/[a-z]/i.test(event.target[0].value)) {
        inputName.classList.add("error")
        inputName.value = "неправильно заполнено имя"
    }
    if (!/\(\d{3}\)\d{3}\-\d{4}/.test(event.target[1].value)) {
        inputTel.classList.add("error")
        inputTel.value = "неправильно заполнено"
    }
    if (!/[a-z\.\-]{6,7}@[a-z]{4}\.[a-z]{2}/i.test(event.target[2].value)) {
        inputEmail.classList.add("error")
        inputEmail.value = "неправильно заполнен email"
    }
}
form.addEventListener("submit", onSubmit)
