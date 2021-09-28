let out = ""

let input = prompt()

switch (input) {
    case '1':
        // Heal active player
        out = "ett"
        break
    case '2':
        // Heal active player
        out = "två"
        break
    case '3':
        // Heal active player
        out = "tre"
        break
    case '4':
        // Heal active player
        out = "fyra"
        break
    case '5':
        // Heal active player
        out = "fem"
        break
    case '6':
        // Heal active player
        out = "sex"
        break
    case '7':
        // Heal active player
        out = "sju"
        break
    case '8':
        // Heal active player
        out = "åtta"
        break
    case '9':
        // Heal active player
        out = "nio"
        break
    case '10':
        // Heal active player
        out = "tio"
        break
    case '11':
        // Heal active player
        out = "elva"
        break
    case '12':
        // Heal active player
        out = "tolv"
        break
    default:
        // Other roles deals extra damage, but less than mages
        out = input
        break
}

alert(out)
