createDeck = () => {
    let deck = [];
    let suits = ['HEARTS', 'SPADES', 'DIAMONDS', 'CLUBS']

    card = (value, suit) => {
        let object = {
            suit: suit,
            value: value,
        }
        return object
    }

    for (let i = 0; i < suits.length; i++) {
        for (let j = 1; j <= 13; j++) {
            deck.push(card(j, suits[i]))
        }
    }
    return deck
}

let deck = createDeck()

score = (cards) => {
    let points = 0
    let aceNumber = 0
    cards.forEach(element => {
        if (element.value == 1) {
            points += 11
            aceNumber += 1
        }
        else if (element.value >= 10) {
            points += 10
        } else {
            points += element.value
        }
    });

    for (let index = 0; index < aceNumber; index++) {
        if(points > 21) {
            points -= 10
        }
    }

    return points
}

console.log(score(deck))