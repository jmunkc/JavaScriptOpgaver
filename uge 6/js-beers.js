
fetch("https://api.punkapi.com/v2/beers")
    .then(res => res.json())
    .then(beers => {
        function makeTable(input) {
            const table = input.map(n => `<tr>
            <td>${n.name}
            <td>${n.tagline}
            <td>${n.abv}
            <td>${n.ibu}
                <tr>`).join("");
            document.getElementById("tbl1").innerHTML = table
        }
        makeTable(beers)
        document.getElementById("abv-btn").onclick = (e) => {
            const abv = document.getElementById("filter-abv").value
            const filteredAbv = beers.filter(c => c.abv > abv)
            console.log(filteredAbv)
            makeTable(filteredAbv)
        }
    })
