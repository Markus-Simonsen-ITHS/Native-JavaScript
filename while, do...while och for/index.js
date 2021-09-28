while (true) {
    let amount = prompt("Input amount!")
    if (amount && !isNaN(amount)) {
        for (let i = 0; i < amount; i++) {
            window.alert(amount)
        }
        break;
    }
}
