let puckoValue = document.getElementById("value")

let i = 0

document.getElementById("increase").onmousemove = () => {
  puckoValue.innerText = i

  i += 1
}