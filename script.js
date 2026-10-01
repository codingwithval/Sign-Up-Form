const submit = document.querySelector(".submit")

submit.addEventListener("click",()=>{
    const formside = document.querySelector("#form-content")
    formside.innerHTML= "<p class='after'>Thank you for signing up, please check your email to proceed!<p><p class='copys'>Made by Val with love in the 254</p>";
})