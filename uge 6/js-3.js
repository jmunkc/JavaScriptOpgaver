
// 1 + 2

let urlAll = "https://jsonplaceholder.typicode.com/users"

document.getElementById("btn-single").onclick = (e) => {
    e.preventDefault()
    const idFromInput = document.getElementById("input").value

    fetch("https://jsonplaceholder.typicode.com/users/" + idFromInput)
        .then(res => res.json())
        .then(data => {
            console.log("data", data);

            const user = `<p>Name: ${data.name}</p>\n<p>Phone: ${data.phone}</p><br><p><b>Address</b></p>\n<p>Street: ${data.street}</p>`

                document.getElementById("container").innerHTML = user;

        })
}


document.getElementById("btn-all").onclick = (e) => {
    e.preventDefault()
    fetch(urlAll)
        .then(res => res.json())
        .then(data => {
            console.log("data", data);
            function makeTable(data) {
                const tableBody = data.map(n => `<tr>
                <td>${n.name}
                <td>${n.phone}
                    <tr>`).join("");

                const table = `<table><thead><tr><th>Name</th><th>Phone</th></tr><tbody>${tableBody}</tbody></thead></table>`
                document.getElementById("container").innerHTML = table
            }
            makeTable(data)
        })
}


