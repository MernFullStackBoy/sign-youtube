const form = document.querySelector("form")

const eye1 = document.querySelector("#eye1")

const eye2 = document.querySelector("#eye2")

const pass = document.querySelector("#password")

const con = document.querySelector("#confirm")



form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (pass.value.match(con.value)) {

        window.location.assign("https://www.youtube.com")

    }
    else {

        pass.style.border = "2px solid red"
        
        con.style.border = "2px solid red"

        alert("Password isn't matched")

    }
    form.reset()
})

eye1.addEventListener("click", () => {

    if (eye1.className == "fa-solid fa-eye-slash") {
        pass.type = "text"

        eye1.classList.toggle("fa-eye")

        eye1.classList.toggle("fa-eye-slash")
    } else if (eye1.className == "fa-solid fa-eye") {
        pass.type = 'password'

        eye1.classList.toggle("fa-eye")

        eye1.classList.toggle("fa-eye-slash")

    }

})


eye2.addEventListener("click", () => {

    if (eye2.className == "fa-solid fa-eye-slash") {
        con.type = "text"

        eye2.classList.toggle("fa-eye")

        eye2.classList.toggle("fa-eye-slash")
    } else if (eye2.className == "fa-solid fa-eye") {
        con.type = 'password'

        eye2.classList.toggle("fa-eye")

        eye2.classList.toggle("fa-eye-slash")

    }

})