let price = prompt()

if (price) {
    let VAT = 0.20

    let priceExlVAT = price * (1 - VAT)

    alert(priceExlVAT)
}
