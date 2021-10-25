let id = prompt("id")

let body = {
}

let keys = [["name", "string"], ["population", "int"]]

keys.forEach(key => {
    let value = prompt(key[0])

    if(key[1] == "int") value = parseInt(value)

    if(value) body[key[0]] = value
});

console.log(body)

fetch(`https://avancera.app/cities/` + id, {
    body: JSON.stringify(body),
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'PATCH'
})
    .then(response => response.json())
    .then(cities => {
        console.log(cities)
    });