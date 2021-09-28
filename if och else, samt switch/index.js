let price = prompt()

if (price && !isNaN(price)) {
    let VAT = 0.20

    let priceExlVAT = price * (1 - VAT)

    alert(priceExlVAT)
} else if (isNaN(price)) {
    alert("Du skrev inte in ett nummer.")
}
