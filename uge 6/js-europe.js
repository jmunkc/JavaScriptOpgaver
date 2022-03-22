
let url = "https://countries.plaul.dk/api/countries/"
document.getElementById("event-handler").onclick = (evt) => {

    const country = evt.target.id
    document.getElementById(`${country}`).style.fill = "#89CFF0"

    fetch(url + country)
        .then(res => res.json())
        .then(data => {
            const countryBody = `<p>Country: ${data.name.common}</p>`
            document.getElementById("country-div").innerHTML = countryBody
        })
}