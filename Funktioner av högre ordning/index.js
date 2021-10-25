function filter(a, f) {
    let newArray = []
    for (let index = 0; index < a.length; index++) {
        if (f(a[index])) newArray.push(a[index])
    }
    return newArray
}