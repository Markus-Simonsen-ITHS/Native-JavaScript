let textTrue = true
let consentTrue = true

document.getElementById("form").onsubmit = (e) => {
    e.preventDefault();
    document.getElementById("greeting").innerText = `Hej ${document.getElementById("name").value}!`
}

document.getElementById("name").oninput = () => {
    textTrue = document.getElementById("name").value.length == 0
    errorHandle()
}

document.getElementById("consent").oninput = () => {
    consentTrue = !document.getElementById("consent").checked
    errorHandle()
}


errorHandle = () => {
    if(textTrue || consentTrue) {
        document.getElementById("errors").style.display = "block"
        document.getElementById("send").disabled = true

        if(textTrue) {
            document.getElementById("name-error").style.display = "block"
        } else {
            document.getElementById("name-error").style.display = "none"
        }

        if(consentTrue) {
            document.getElementById("consent-error").style.display = "block"
        } else {
            document.getElementById("consent-error").style.display = "none"
        }
    } else {
        document.getElementById("errors").style.display = "none"
        document.getElementById("send").disabled = false
    }
}

errorHandle()